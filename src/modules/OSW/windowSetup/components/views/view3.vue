<template>
    <!-- View 1 -->
    <div class="flex flex-col">
        <div class="grid grid-cols-[1vw_9.75vw_9.75vw_9.75vw] gap-4">
            <div class="font-bold text-[1.1vw]">P3</div>
            <div class="font-bold text-center">Light Level</div>
            <div class="font-bold text-center">Current Detects</div>
            <div class="font-bold text-center">Last Reject Detects</div>
        </div>
        <div class="grid grid-cols-1 gap-2">
            <div class="grid grid-cols-[1vw_9.75vw_9.75vw_9.75vw] gap-4 items-center">
                <div>V1</div>
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="grid grid-cols-[1vw_9.75vw_9.75vw_9.75vw] gap-4 items-center">
                <div>V2</div>
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="grid grid-cols-[1vw_9.75vw_9.75vw_9.75vw] gap-4 items-center">
                <div>V3</div>
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
            <div class="grid grid-cols-[1vw_9.75vw_9.75vw_9.75vw] gap-4 items-center">
                <div>V4</div>
                <valueViewer />
                <valueViewer />
                <valueViewer />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
</script>