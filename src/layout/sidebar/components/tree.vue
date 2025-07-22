<template>
  <ul class="space-y-1 w-full flex flex-col" :class="{ 'items-center': !isOpenSidebar }">
    <li class="w-full" v-for="(node, key) in props.nodes" :key="key">
      <div
        class="cursor-pointer w-full p-2 rounded-xl font-semibold flex text-xl items-center space-x-2 transition-all duration-200"
        :style="{ paddingLeft: `${depth * 40 + 16}px` }" :class="{
          'hover:bg-secondary hover:bg-opacity-25': true
        }" @click="toggleNode(key)">

        <!-- Flecha si tiene hijos -->


        <!-- Icono principal -->
        <img v-if="isRootNode(node) && node.icon" :src="node.icon" class="w-10 h-10" alt="icon" />

        <transition name="label-fade">
          <div v-show="isOpenSidebar" class="flex w-full items-center justify-between space-x-2">
            <span>
              {{ getLabel(node, key) }}
            </span>
            <img v-if="hasChildren(node.children)" :src="arrowDown" class="w-10 h-10 transition-transform duration-200"
              :class="{ 'rotate-180': expandedNodes[key] }" alt="expand arrow" />
          </div>
        </transition>

      </div>


      <!-- Subniveles -->
      <transition name="fade">
        <Tree v-if="hasChildren(node.children) && expandedNodes[key] && isOpenSidebar" :nodes="(node.children ?? {}) as Record<string, TreeNode>"
          :is-open-sidebar="isOpenSidebar" :depth="depth + 1" @nodeClick="emitClick" />
      </transition>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import arrowDown from '@/assets/sidebarIcons/arrowDown.svg'

interface TreeNode {
  label?: string
  icon?: string
  children?: Record<string, TreeNode | {}> // permite nodos vacíos {}
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

function toggleNode(key: string) {
  expandedNodes.value[key] = !expandedNodes.value[key]
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
</script>
