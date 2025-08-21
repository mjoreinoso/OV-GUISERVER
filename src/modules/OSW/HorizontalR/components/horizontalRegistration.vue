<template>
  <div class="flex h-full">
    <!-- Contenedor de tu card -->
    <div class="flex flex-col justify-center p-3 border-2 grow rounded-xl">
      <!-- Grid con 4 columnas -->
      <div class="grid grid-cols-4 gap-6 text-[0.95vw]">

        <!-- Columna 1 -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <span class="font-bold">Registration Window Outline Display</span>
            <Toggle v-model="localToggle" />
          </div>
          <div class="flex items-center justify-between"> <span class="font-bold">Suppress Rejects on Registration Failure</span>
            <Toggle v-model="localToggle" />
          </div>
        </div>

        <!-- Columna 2 -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
              <span class="w-[9vw]">Fit Threshold</span>
              <numberInput v-model="algorithmStore.threshold"
                @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
          <div class="flex items-center justify-between">
            <span class="w-[9vw]">Vertical Position</span>
            <numberInput v-model="algorithmStore.bck_kernel_offset"
              @update:model-value="algorithmStore.emitAlgorithmConfig()" />
          </div>
        </div>

        <!-- Columnas 3 y 4 -->
        <div class="flex flex-col col-span-2 gap-4">
          <div class="grid grid-cols-2 gap-6">
            <div class="flex items-center justify-between">
              <span class="w-[9vw]">Window Height</span>
              <numberInput v-model="algorithmStore.bck_kernel_height"
                @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
            <div class="flex items-center justify-between">
              <span class="w-[9vw]">Window Width</span>
              <numberInput v-model="algorithmStore.bck_kernel_width"
                @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
            <div class="flex items-center justify-between">
              <span class="w-[9vw]">Neck Width</span>
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
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import numberInput from "../../../../assets/vueComponents/inputs/numberInput.vue";
import Toggle from "../../../../assets/vueComponents/inputs/toggle.vue";
import { useAlgorithmStore } from '../store/algorithmStore';

const algorithmStore = useAlgorithmStore();
const localToggle = ref(false);
</script>
