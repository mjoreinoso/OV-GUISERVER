<template>
  <div class="flex flex-col justify-center p-3 border-2 rounded-xl">
    <!-- Grid con 4 columnas -->
    <div class="grid grid-cols-3 gap-2 text-[0.95vw]">
      <!-- Columna 2 -->
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="w-[7.5vw]">Fit Threshold</span>
          <numberInput v-model="algorithmStore.threshold" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
        </div>
        <div class="flex items-center justify-between">
          <span class="w-[7.5vw]">Vertical Position</span>
          <numberInput v-model="algorithmStore.bck_kernel_offset"
            @update:model-value="algorithmStore.emitAlgorithmConfig()" />
        </div>
      </div>

      <!-- Columnas 3 y 4 -->
      <div class="flex flex-col col-span-2 gap-2">
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center justify-between">
            <span class="w-[7.5vw]">Window Height</span>
            <numberInput v-model="algorithmStore.bck_kernel_height"
              @update:model-value="algorithmStore.emitAlgorithmConfig()" />
          </div>
          <div class="flex items-center justify-between">
            <span class="w-[7.5vw]">Window Width</span>
            <numberInput v-model="algorithmStore.bck_kernel_width"
              @update:model-value="algorithmStore.emitAlgorithmConfig()" />
          </div>
          <div class="flex items-center justify-between">
            <span class="w-[7.5vw]">Neck Width</span>
            <numberInput v-model="algorithmStore.grd_width"
              @update:model-value="algorithmStore.emitAlgorithmConfig()" />
          </div>
          <div class="flex items-center justify-between">
            <span>Dynamic Tracking</span>
            <Toggle v-model="localToggle" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import numberInput from "../../../../assets/vueComponents/inputs/numberInput.vue";
import Toggle from "../../../../assets/vueComponents/inputs/toggle.vue";
import { useAlgorithmStore } from "../store/algorithmStore";

const algorithmStore = useAlgorithmStore();
const localToggle = ref(false);
</script>
