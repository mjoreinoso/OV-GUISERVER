<template>
    <div class="flex flex-col space-y-3">
        <div class="text-[1.4vw] font-bold">Light Levels</div>
        <div
            class="grid grid-cols-[auto_1fr_1fr_1fr] gap-x-3 place-items-center gap-y-5 text-white text-[1.1vw] p-3 border-2 rounded-xl">

            <!-- Encabezado -->
            <div></div>
            <div class="font-bold text-center">Current</div>
            <div class="font-bold text-center">Average</div>
            <div class="font-bold text-center">Last Detected</div>

            <!-- IR RLD Sensor -->
            <div class="flex items-center">IR RLD Sensor</div>
            <valueViewer />
            <valueViewer />
            <valueViewer />

        </div>
    </div>
</template>

<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
</script>
