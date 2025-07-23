<template>
  <div class="flex flex-col w-full h-full justify-around space-y-3">
    <div class="flex flex-row space-x-3">
      <div class="flex flex-col self-stretch space-y-3">
        <IR />
        <LightLevels />
      </div>
      <LED_Strobe_Timing />
    </div>
    <div>
      <Graph />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import Graph from './components/graph.vue';
import IR from './components/IR.vue';
import LED_Strobe_Timing from './components/LED_Strobe_Timing.vue';
import LightLevels from './components/lightLevels.vue';
import { useIRStore } from './store/IRStore';
import { useSocketStore } from '../../../../client/socketStore';

const irStore = useIRStore();
const socketStore = useSocketStore();

watch(
  () => irStore.irData,
  (newVal) => {
    if (socketStore.isConnected && newVal.length > 0) {
      console.log("📤 Emitting IR data:", newVal);
      socketStore.irDataEmit(newVal);
    }
  },
  { deep: true }
);

onMounted(async () => {
  await irStore.fetchIRData(); // Espera a que lleguen los datos
  console.log('✅ IR data fetched:', irStore.irData);
});
</script>
