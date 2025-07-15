<script setup lang="ts">

import ovBody from './layout/body.vue';
import ovHeader from './layout/footer/footer.vue';
import ovSidebar from './layout/sidebar/sidebar.vue';

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


