<template>
  <div class="flex flex-col space-y-3 w-[45%] h-full">
    <div class="text-[1.4vw] font-bold">Graph</div>
    <div class="border-2 rounded-xl h-full p-2">
      <chartGraph />
    </div>
  </div>
</template>

<script setup lang="ts">
import chartGraph from './chartGraph.vue';
</script>
