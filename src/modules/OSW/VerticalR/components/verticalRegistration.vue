<template>
  <div class="flex h-full text-[0.95vw]">
    <!-- Contenedor de tu card -->
    <div class="flex flex-col justify-center p-2.5 border-2 grow rounded-xl">
      <div class="text-[0.95vw] grid grid-cols-2 gap-2.5">
        <div class="flex items-center justify-between space-y-2">
          <span class="w-[9vw]">Vertical Position</span>
          <numberInput 
            v-model="verticalStore.vertical_position_v" 
          />
        </div>
        <div class="flex items-center justify-between space-y-2">
          <span class="w-[9vw]">Window Height</span>
          <numberInput 
            v-model="verticalStore.window_height_v" 
          />
        </div>
        <div class="flex items-center justify-between space-y-2">
          <span class="w-[9vw]">Window Width</span>
          <numberInput 
            v-model="verticalStore.window_width" 
          />
        </div>
        <div class="flex items-center justify-between space-y-2">
          <span class="w-[9vw]">Fit Threshold</span>
          <numberInput 
            v-model="verticalStore.fit_threshold_v" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useVerticalStore } from '../store/verticalStore';

const verticalStore = useVerticalStore();
</script>
