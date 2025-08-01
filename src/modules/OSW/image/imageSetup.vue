<template>
    <div class="flex flex-col space-y-3 h-full">
        <div class="flex flex-row space-x-3">
            <brightness class="w-[45%]" />
            <div class="flex flex-row w-[55%] space-x-3">
                <zoom />

                <outlineDisplay class="grow" />
            </div>
        </div>
        <div class="flex flex-row space-x-3 h-full">
            <div class="w-[45%] border-2 rounded-xl grow flex flex-col justify-around">
                <hardwareConfig />
                <div class="text-[1.1vw] flex flex-col space-y-2 p-3 border-t-2">
                    <div class="flex justify-center items-center w-full font-bold"> Average Light</div>
                    <phase1/>
                    <phase2/>
                    <phase3/>
                </div>
            </div>
            <div class="flex justify-center items-center w-[55%]">
                Live Feed
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import zoom from "./components/zoom.vue";
import brightness from "./components/brightness.vue";
import outlineDisplay from "./components/outlineDisplay.vue";
import hardwareConfig from "./components/hardwareConfig.vue";
import phase1 from "./components/averageLight/phase1.vue";
import phase2 from "./components/averageLight/phase2.vue";
import phase3 from "./components/averageLight/phase3.vue";
import { useImageStore } from './store/imageStore';
import { useSocketStore } from '../../../client/socketStore';

const imageStore = useImageStore();
const socketStore = useSocketStore();

// Detectar cambios en cualquier estado del imageStore
imageStore.$subscribe((mutation) => {
  console.log('Cambio detectado en imageStore:', {
    type: mutation.type,
    storeId: mutation.storeId,
    events: mutation.events
  });
  
  // Obtener el payload del store y enviarlo por socket
  const payload = imageStore.getImageDataPayload();
  socketStore.imageDataEmit(payload);
  console.log('Datos de imagen enviados por socket:', payload);
});

onMounted(() => {
    imageStore.fetchImageConfig();
});
</script>
