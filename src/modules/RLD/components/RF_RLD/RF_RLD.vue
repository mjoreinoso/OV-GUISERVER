<template>
  <div class="flex flex-col justify-around w-full h-full space-y-3">
    <div class="flex flex-col self-stretch space-y-3">
        <RF />
        <LightLevels />
    </div>
    <div class="flex justify-around w-full h-full space-y-3">
      <LiveFeed :enabledItems="{
        bottle: true,
        resolution: true,
        groupBottle: false,
        freeze: true,
        seconds: true,
        save: true
      }" />
      <Graph />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import Graph from './components/graph.vue';
import RF from './components/RF.vue';
import LightLevels from './components/lightLevels.vue';
import { useRFStore } from './store/RFStore';
import { useSocketStore } from '../../../../client/socketStore';
import LiveFeed from './components/camera/liveFeed.vue';


const rfStore = useRFStore();
const socketStore = useSocketStore();

// Detectar cambios solo en rfData y emitir por socket
watch(
  () => rfStore.rfData,
  (newVal) => {
    if (newVal.length > 0) {
      socketStore.rfDataEmit(newVal);
      console.log('Datos de RF enviados por socket:', newVal);
    }
  },
  { deep: true }
);

onMounted(async () => {
  await rfStore.fetchRFData(); // Espera a que lleguen los datos
  console.log('✅ RF data fetched:', rfStore.rfData);
});
</script>
