<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
import { useRFStore } from '../store/RFStore';
import { storeToRefs } from 'pinia';

const rfStore = useRFStore();
const { RF, Average, LastRjtdRFArray } = storeToRefs(rfStore);

</script>

<template>
  <div class="grid grid-cols-[0.5fr_1fr_1fr_1fr] gap-x-2 grow text-white text-[0.95vw] p-3 border-2 rounded-xl">
    <!-- Encabezado -->
    <div></div>
    <div class="font-bold text-center">RF</div>
    <div class="font-bold text-center">Average</div>
    <div class="font-bold text-center">Last Reject</div>

    <!-- RF RLD Sensor -->
    <div class="flex items-center">RF RLD Sensor</div>
    <div class="flex w-full">
      <valueViewer :value="RF[0] ?? null" class="w-full" />
    </div>
    <div class="flex w-full">
      <valueViewer :value="Average[0] ?? null" class="w-full" />
    </div>
    <div class="flex w-full">
      <valueViewer :value="LastRjtdRFArray?.[0] ?? null" class="w-full" />
    </div>
  </div>
</template>
