<template>
  <!-- Mini sidebar persistente -->
  <div class="w-[8vw] flex flex-col items-center space-y-4 justify-start bg-primary h-full p-3">
    <!-- Logo mini -->
    <div class="rounded-full h-[80px] w-[80px]" @click="sidebarStore.toggleSidebar">
      <img class="w-full h-full object-contain" :src="logoFILTEC" alt="FILTEC mini" />
    </div>

    <!-- Mini Tree: solo íconos -->
    <Tree :nodes="menuTree" :is-open-sidebar="false" @nodeClick="handleTabClick" />
  </div>

  <!-- Sidebar expandido en overlay -->
  <transition name="fade">
    <div
      v-if="sidebarStore.isOpen"
      class="w-[380px] rounded-r-lg absolute z-30 left-0 top-0 bottom-0 bg-primary h-full p-3 flex flex-col space-y-4 items-center justify-start shadow-lg"
    >
      <!-- Logo expandido -->
      <div class="rounded-full h-[80px] w-[300px]" @click="sidebarStore.toggleSidebar">
        <img class="w-full h-full object-contain" :src="FILTEC" alt="FILTEC" />
      </div>

      <!-- Tree completo: íconos + texto -->
      <Tree :nodes="menuTree" :is-open-sidebar="true" @nodeClick="handleTabClick" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import FILTEC from '@/assets/manufacturer/FILTEC.png';
import logoFILTEC from '@/assets/manufacturer/logoFILTEC.png';
import { useSidebarStore } from './store/sidebarStore';
import Tree from './components/tree.vue';
import { menuTree } from './store/menuTree';

const sidebarStore = useSidebarStore();

function handleTabClick(name: string) {
  console.log('Clicked tab:', name);
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
