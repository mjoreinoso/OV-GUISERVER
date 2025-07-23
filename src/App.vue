<script setup lang="ts">

import ovBody from './layout/body.vue';
import ovHeader from './layout/footer/footer.vue';
import ovSidebar from './layout/sidebar/sidebar.vue';
import { useSidebarStore } from './layout/sidebar/store/sidebarStore';
import { useSocketStore } from './client/socketStore';
import { onMounted, onUnmounted } from 'vue';

const socketStore = useSocketStore();
const sidebarStore = useSidebarStore();

onMounted(() => {
  socketStore.connect();
});

onUnmounted(() => {
  socketStore.disconnect();
});

console.log('App.vue loaded', import.meta.env.VITE_SERVER_DOMAIN);
</script>

<template>
  <div class="w-screen h-screen flex flex-row items-center justify-between gap-3">
    <ovSidebar/>
    <div v-if="sidebarStore.isOpen" @click="sidebarStore.toggleSidebar()" class="fixed opacity-50 w-screen h-screen bg-black"></div>
    <div class="grow h-full w-full flex flex-col items-center justify-between gap-3">
      <ovBody />
      <ovHeader/>
    </div>
    
  </div>
</template>


