<template>
  <div class="flex flex-col justify-center p-3 border-2 rounded-xl">
    <!-- Grid con 4 columnas -->
    <div class="grid grid-cols-3 gap-2 text-[0.95vw]">
      <!-- Columna 2 -->
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="w-[7.5vw]">Vertical Position</span>
          <numberInput v-model="horizontalStore.vertical_position_h" />
        </div>
        <div class="flex items-center justify-between">
          <span class="w-[7.5vw]">Bottles per Image</span>
          <numberInput v-model="horizontalStore.bottle_images" />
        </div>


      </div>

      <!-- Columnas 3 y 4 -->
      <div class="flex flex-col col-span-2 gap-2">
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center justify-between">
            <span class="w-[7.5vw]">Window Height</span>
            <numberInput v-model="horizontalStore.window_height_h" />
          </div>
          <div class="flex items-center justify-between">
            <span class="w-[7.5vw]">Neck Width</span>
            <numberInput v-model="horizontalStore.neck_width" />
          </div>
          <div class="flex items-center justify-between">
            <span class="w-[7.5vw]">Fit Threshold</span>
            <numberInput v-model="horizontalStore.fit_threshold_h" />
          </div>

          <div class="flex items-center justify-between">
            <span>Dynamic Tracking</span>
            <Toggle v-model="horizontalStore.dynamic_tracking" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import numberInput from "../../../../assets/vueComponents/inputs/numberInput.vue";
import Toggle from "../../../../assets/vueComponents/inputs/toggle.vue";
import { useHorizontalStore } from "../store/horizontalStore";

const horizontalStore = useHorizontalStore();
</script>
