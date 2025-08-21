<template>
  <div class="flex flex-row justify-between w-full h-full space-x-3">
    <div class="flex flex-col justify-between h-full w-[35%]">
      <div class="flex items-center justify-between">
        <div class="font-semibold text-[0.95vw]">Mask Region Outline Display</div>
        <toggle v-model="maskStore.mask_display" />
      </div>
      <topDiagonalMask />
      <bottomDiagonalMask />
      <spotMasking />
    </div>
    <div class="w-[65%] h-full flex-col flex items-end space-y-3">

      <LiveFeed :enabledItems="{
        bottle: true,
        resolution: false,
        groupBottle: true,
        freeze: true,
        seconds: true,
        save: true
      }" bottleType="OSW" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import topDiagonalMask from "./components/topDiagonalMask.vue";
import bottomDiagonalMask from "./components/bottomDiagonalMask.vue";
import spotMasking from "./components/spotMasking.vue";
import { useMaskStore } from "./store/maskStore";
import { useSocketStore } from "../../../client/socketStore";
import LiveFeed from "@/assets/vueComponents/camera/liveFeed.vue";
import toggle from "../../../assets/vueComponents/inputs/toggle.vue";

const maskStore = useMaskStore();
const socketStore = useSocketStore();

// Detectar cambios en el store
maskStore.$subscribe((mutation) => {
  console.log("Cambio detectado en maskStore:", {
    type: mutation.type,
    storeId: mutation.storeId,
    events: mutation.events,
  });

  const payload = maskStore.getMaskDataPayload();
  socketStore.maskDataEmit(payload);
  console.log("Datos de máscara enviados por socket:", payload);
});

onMounted(() => {
  maskStore.fetchMaskConfig();
});

</script>
