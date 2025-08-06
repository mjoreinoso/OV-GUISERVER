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
import { onMounted} from 'vue';
import Graph from './components/graph.vue';
import RF from './components/RF.vue';
import LightLevels from './components/lightLevels.vue';
import { useRFStore } from './store/RFStore';
import { useSocketStore } from '../../../../client/socketStore';

const rfStore = useRFStore();
const socketStore = useSocketStore();

// Detectar cambios en cualquier estado del rfStore (como masks e images)
rfStore.$subscribe((mutation) => {
  console.log('Cambio detectado en rfStore:', {
    type: mutation.type,
    storeId: mutation.storeId,
    events: mutation.events
  });
  
  // Obtener el payload del store y enviarlo por socket
  if (rfStore.rfData.length > 0) {
    const payload = rfStore.rfData;
    socketStore.rfDataEmit(payload);
    console.log('Datos de RF enviados por socket:', payload);
  }
});

onMounted(async () => {
  await rfStore.fetchRFData(); // Espera a que lleguen los datos
  console.log('✅ RF data fetched:', rfStore.rfData);
});
</script>
