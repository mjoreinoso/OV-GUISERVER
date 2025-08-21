<template>
    <!-- View 1 -->
    <div class="grow grid grid-cols-1 gap-2 pb-2 border-b-2">
        <div class="grid grid-cols-4 gap-4 items-center">
            <div>View 1 Center</div>
            <valueViewer />
            <valueViewer />
            <valueViewer />
        </div>
        <div class="grid grid-cols-4 gap-4 items-center">
            <div>True Threshold</div>
            <valueViewer />
            <valueViewer />
            <valueViewer />
        </div>
        <div class="grid grid-cols-4 gap-4 items-center">
            <div>Correlation Fit</div>
            <valueViewer />
            <valueViewer />
            <valueViewer />
        </div>
    </div>
</template>

<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
</script>