<script setup lang="ts">

import ovBody from './components/layout/body.vue';
import ovHeader from './components/layout/header/header.vue';
import ovSidebar from './components/layout/sidebar/sidebar.vue';

</script>

<template>
  <div class="w-screen h-screen flex flex-row items-center justify-between p-3 gap-3">
    <ovSidebar/>
    <div class="grow h-full w-full flex flex-col items-center justify-between gap-3">
      <ovBody />
      <ovHeader/>
    </div>
    
  </div>
</template>


