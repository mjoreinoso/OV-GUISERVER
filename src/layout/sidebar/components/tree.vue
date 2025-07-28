<template>
  <ul class="space-y-1 w-full flex flex-col" :class="{ 'items-center': !isOpenSidebar }">
    <li class="w-full" v-for="(node, key) in props.nodes" :key="key">
      <div
        class="relative cursor-pointer w-full p-2 rounded-r-xl font-semibold flex text-xl items-center space-x-2 transition-all duration-200"
        :style="{ paddingLeft: `${depth * 40 + 16}px` }" :class="{
          'hover:bg-secondary hover:bg-opacity-25': true,
          'bg-secondary bg-opacity-25 text-white':
            isCurrent(key) ||
            shouldHighlightCollapsedParent(key, node) ||
            isParentOfCurrent(node)
        }" @click="toggleNode(key, node)">
        <!-- Línea vertical azul a la izquierda del ítem activo -->
        <span v-if="isCurrent(key) || shouldHighlightCollapsedParent(key, node) || isParentOfCurrent(node)"
          class="absolute left-0 top-0 h-full w-[8px] bg-[#5095BF] rounded-l-lg" />

        <!-- Ícono principal -->
        <img v-if="isRootNode(node) && node.icon" :src="node.icon" class="w-10 h-10" alt="icon" />

        <!-- Label y flecha (solo si sidebar está abierto) -->
        <transition name="label-fade">
          <div v-show="isOpenSidebar" class="flex w-full items-center justify-between space-x-2">
            <span class="whitespace-nowrap overflow-hidden text-ellipsis">
              {{ getLabel(node, key) }}
            </span>
            <img v-if="hasChildren(node.children)" :src="arrowDown" class="w-10 h-10 transition-transform duration-200"
              :class="{ 'rotate-180': expandedNodes[key] }" alt="expand arrow" />
          </div>
        </transition>
      </div>

      <!-- Subniveles -->
      <transition name="fade">
        <Tree v-if="hasChildren(node.children) && expandedNodes[key] && isOpenSidebar"
          :nodes="(node.children ?? {}) as Record<string, TreeNode>" :is-open-sidebar="isOpenSidebar" :depth="depth + 1"
          @nodeClick="emitClick" />
      </transition>
    </li>
  </ul>
</template>


<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import arrowDown from '@/assets/sidebarIcons/arrowDown.svg'
import { useSidebarStore } from '../store/sidebarStore'

const sidebarStore = useSidebarStore()

interface TreeNode {
  label?: string
  icon?: string
  children?: Record<string, TreeNode | {}>
  [key: string]: any
}

const props = defineProps<{
  nodes: Record<string, TreeNode>,
  isOpenSidebar: boolean,
  depth?: number
}>()

const depth = props.depth ?? 0

const emit = defineEmits<{
  (e: 'nodeClick', value: string): void
}>()

const expandedNodes = ref<Record<string, boolean>>({})

// Expande nodos si el currentScreen está dentro de su rama
function findPathToActive(
  nodes: Record<string, TreeNode>,
  activeKey: string,
  path: string[] = []
): string[] | null {
  for (const [key, node] of Object.entries(nodes)) {
    if (key === activeKey) {
      return [...path, key]
    }
    if (hasChildren(node.children)) {
      const result = findPathToActive(node.children as Record<string, TreeNode>, activeKey, [...path, key])
      if (result) return result
    }
  }
  return null
}

function expandToCurrent() {
  const path = findPathToActive(props.nodes, sidebarStore.currentScreen)
  if (path) {
    path.forEach(key => {
      expandedNodes.value[key] = true
    })
  }
}

onMounted(() => {
  expandToCurrent()
})

watch(() => sidebarStore.currentScreen, () => {
  expandToCurrent()
})

function toggleNode(key: string, node: TreeNode) {
  if (!hasChildren(node.children)) {
    sidebarStore.setScreen(key)
  } else {
    expandedNodes.value[key] = !expandedNodes.value[key]
  }

  emitClick(key)
}

function emitClick(value: string) {
  emit('nodeClick', value)
}

function hasChildren(obj: any): boolean {
  return obj && typeof obj === 'object' && Object.keys(obj).length > 0
}

function isRootNode(node: TreeNode): boolean {
  return 'label' in node && 'children' in node
}

function getLabel(node: TreeNode, fallback: string): string {
  return node.label || fallback
}

function isCurrent(key: string): boolean {
  return sidebarStore.currentScreen === key
}

function isDescendantActive(children: Record<string, TreeNode | {}>): boolean {
  return Object.entries(children).some(([childKey, childNode]) => {
    if (childKey === sidebarStore.currentScreen) return true

    const node = childNode as TreeNode
    return node.children && hasChildren(node.children)
      ? isDescendantActive(node.children)
      : false
  })
}


function shouldHighlightCollapsedParent(key: string, node: TreeNode): boolean {
  const children = node.children
  if (
    props.isOpenSidebar && // solo si el sidebar está abierto
    children &&
    hasChildren(children) &&
    !expandedNodes.value[key] && // debe estar colapsado
    isDescendantActive(children)
  ) {
    return true
  }
  return false
}


function isParentOfCurrent(node: TreeNode): boolean {
  const children = node.children

  if (!props.isOpenSidebar && children && hasChildren(children)) {
    return Object.entries(children).some(
      ([childKey, childNode]) =>
        childKey === sidebarStore.currentScreen ||
        isParentOfCurrent(childNode as TreeNode)
    )
  }
  return false
}



</script>
