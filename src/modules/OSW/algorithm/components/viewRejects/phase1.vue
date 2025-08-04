<template>
  <div class="flex flex-row pb-2 border-b-2">
    <!-- Contenido principal -->
    <div class="grid grid-cols-[0.25fr_0.5fr_0.5fr_0.5fr] text-[0.9vw] items-center gap-3 p-2">
      <!-- Encabezados -->
      <div></div> <!-- Encima de View -->
      <div class="text-center font-bold">Current<br />Failed</div>
      <div class="text-center font-bold">Current<br />Detects</div>
      <div class="text-center font-bold">Last Reject<br />Detects</div>

      <!-- View 1 -->
      <div class="text-[0.85vw] font-medium whitespace-nowrap">View 1</div>
      <div class="flex justify-center">
        <span class="h-4 w-4 bg-red-700 rounded-full"></span>
      </div>
      <valueViewer />
      <valueViewer />

      <!-- View 2 -->
      <div class="text-[0.85vw] font-medium whitespace-nowrap">View 2</div>
      <div class="flex justify-center">
        <span class="h-4 w-4 bg-red-700 rounded-full"></span>
      </div>
      <valueViewer />
      <valueViewer />

      <!-- View 3 -->
      <div class="text-[0.85vw] font-medium whitespace-nowrap">View 3</div>
      <div class="flex justify-center">
        <span class="h-4 w-4 bg-red-700 rounded-full"></span>
      </div>
      <valueViewer />
      <valueViewer />

      <!-- View 4 -->
      <div class="text-[0.85vw] font-medium whitespace-nowrap">View 4</div>
      <div class="flex justify-center">
        <span class="h-4 w-4 bg-red-700 rounded-full"></span>
      </div>
      <valueViewer />
      <valueViewer />
    </div>
  </div>
</template>

<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue'
</script>
