<template>
  <div class="grid grid-cols-[1.2vw_0.5fr_0.5fr] text-[0.9vw] items-center gap-2 pb-2 border-b-2 grow">
    <!-- Encabezados -->
    <div class="text-center text-[1.2vw] font-bold leading-4.5">P2</div>
    <div class="text-center text-[0.95vw] font-semibold leading-4.5">Current Detects</div>
    <div class="text-center text-[0.95vw] font-semibold leading-4.5">Last Reject Detects</div>


    <!-- View 1 -->
    <div class="text-[0.95vw] font-medium whitespace-nowrap">V1</div>
    <valueViewer />
    <valueViewer />

    <!-- View 2 -->
    <div class="text-[0.95vw] font-medium whitespace-nowrap">V2</div>
    <valueViewer />
    <valueViewer />

    <!-- View 3 -->
    <div class="text-[0.95vw] font-medium whitespace-nowrap">V3</div>
    <valueViewer />
    <valueViewer />

    <!-- View 4 -->
    <div class="text-[0.95vw] font-medium whitespace-nowrap">V4</div>
    <valueViewer />
    <valueViewer />
  </div>
</template>


<script setup lang="ts">
import valueViewer from "../../../../../assets/vueComponents/inputs/valueViewer.vue";
</script>
