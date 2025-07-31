<template>
    <div class="flex flex-row h-full w-full">
        <div class="flex flex-col justify-between h-full w-[35vw]">
            <topDiagonalMask />
            <bottomDiagonalMask />
            <spotMasking />
        </div>
        <div class="w-[65vw] h-full flex items-center justify-center">
            <img id="live-img" :src="imageSrc" alt="Live Feed" class="object-contain max-h-full max-w-full" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import topDiagonalMask from "./components/topDiagonalMask.vue";
import bottomDiagonalMask from "./components/bottomDiagonalMask.vue";
import spotMasking from "./components/spotMasking.vue";
import { useMaskStore } from "./store/maskStore";
import { useSocketStore } from "../../../client/socketStore";

const maskStore = useMaskStore();
const socketStore = useSocketStore();

const imageSrc = ref("");

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
