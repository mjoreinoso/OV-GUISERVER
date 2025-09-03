<template>
    <div class="flex flex-col w-full h-full gap-4">
        <!-- Parte superior (70% alto) -->
        <div class="flex w-full h-[65%] gap-4">
            <!-- Columna izquierda (50% ancho) -->
            <div class="w-[50%] h-full">
                <BaseControl />
            </div>

            <!-- Columna derecha (50% ancho) -->
            <div class="flex flex-col w-[60%] h-full gap-2">
                <!-- Superior (LiveFeed) -->
                <div class="flex-1">
                    <LiveFeed bottleType="FN" :enabledItems="{
                        bottle: true,
                        resolution: false,
                        groupBottle: false,
                        freeze: true,
                        seconds: true,
                        save: true
                    }" />
                </div>
            </div>
        </div>

        <!-- Parte inferior (OverallStatistics, 30% alto) -->
        <div class="w-full h-[35%]">
            <RejectControl />
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRFStore } from './store/FNStore';
import { useSocketStore } from '../../../../client/socketStore';
import LiveFeed from "@/assets/vueComponents/camera/liveFeed.vue";
import RejectControl from './components/rejectControl.vue';
import BaseControl from './components/baseControl.vue';


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
