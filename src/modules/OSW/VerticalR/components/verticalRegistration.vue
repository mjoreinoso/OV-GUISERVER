<template>
  <div class="flex h-full">
    <!-- Contenedor de tu card -->
    <div class="flex flex-col justify-center p-3 border-2 grow rounded-xl">
      <div class="font-bold text-[0.95vw] pb-6">Registration Window Outline Display</div>
      
      <div class="text-[0.95vw] grid grid-cols-2 gap-6">
        <div class="flex items-center justify-between space-y-2">
          <span class="w-[9vw]">Vertical Position</span>
          <numberInput 
            v-model="algorithmStore.bck_sensitivity" 
            @update:model-value="algorithmStore.emitAlgorithmConfig()" 
          />
        </div>
        <div class="flex items-center justify-between space-y-2">
          <span class="w-[9vw]">Window Height</span>
          <numberInput 
            v-model="algorithmStore.bck_kernel_width" 
            @update:model-value="algorithmStore.emitAlgorithmConfig()" 
          />
        </div>
        <div class="flex items-center justify-between space-y-2">
          <span class="w-[9vw]">Window Width</span>
          <numberInput 
            v-model="algorithmStore.bck_kernel_height" 
            @update:model-value="algorithmStore.emitAlgorithmConfig()" 
          />
        </div>
        <div class="flex items-center justify-between space-y-2">
          <span class="w-[9vw]">Fit Threshold</span>
          <numberInput 
            v-model="algorithmStore.bck_kernel_offset" 
            @update:model-value="algorithmStore.emitAlgorithmConfig()" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useAlgorithmStore } from '../store/algorithmStore';

const algorithmStore = useAlgorithmStore();
</script>
