<template>
    <div class="grid gap-x-2 grow text-white text-[1.2vw] p-3 border-2 rounded-xl"
        style="grid-template-columns: minmax(100px, 160px) repeat(4, minmax(0, 0.65fr));">
        <!-- Encabezado -->
        <div></div>
        <div class="font-bold text-center">IR</div>
        <div class="font-bold text-center">COMP</div>
        <div class="font-bold text-center">Average</div>
        <div class="font-bold text-center">IR Total</div>

        <!-- IR RLD Sensor -->
        <div class="flex items-center">IR RLD Sensor</div>
        <div class="flex justify-center">
            <valueViewer />
        </div>
        <div class="flex justify-center">
            <valueViewer />
        </div>
        <div class="flex justify-center">
            <valueViewer />
        </div>
        <div class="flex justify-center">
            <valueViewer />
        </div>
    </div>
</template>

<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
</script>
