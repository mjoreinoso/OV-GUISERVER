<template>
  <div class="flex flex-col w-full h-full justify-around space-y-3">
    <div class="flex flex-col self-stretch space-y-3">
        <RF />
        <LightLevels />
    </div>
    <div>
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
