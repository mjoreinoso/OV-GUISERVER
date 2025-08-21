<template>
  <div class="flex flex-col justify-around w-full h-full space-y-3">
    <div class="flex flex-row space-x-3">
      <div class="flex flex-col self-stretch space-y-3 w-[55%]">
        <IR />
        <LightLevels />
      </div>
      <div class="flex flex-col self-stretch w-[45%]">
        <LED_Strobe_Timing />
      </div>
    </div>
    <div class="flex justify-around w-full h-full space-x-3">
      <Graph />
      <div class="flex w-[45%]">
        <LiveFeed :enabledItems="{
          bottle: true,
          resolution: true,
          groupBottle: false,
          freeze: true,
          seconds: true,
          save: true
        }" bottleType="IR" />
      </div>
      
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
import LiveFeed from "@/assets/vueComponents/camera/liveFeed.vue";

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
