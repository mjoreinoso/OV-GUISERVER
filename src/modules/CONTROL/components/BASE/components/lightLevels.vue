<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
import { useBASEStore } from '../store/BASEStore';
import { storeToRefs } from 'pinia';

const irStore = useBASEStore();
const { compArray, irArray, irTotArray, avgArray, lastRjtd, result } = storeToRefs(irStore);


</script>

<template>
  <div class="grid gap-x-2 grow text-white text-[0.95vw] p-3 border-2 rounded-xl"
    style="grid-template-columns: minmax(5vw, 8vw) repeat(5, minmax(0, 20vw));">
    <!-- Encabezado -->
    <div></div>
    <div class="font-bold text-center">IR</div>
    <div class="font-bold text-center">COMP</div>
    <div class="font-bold text-center">Average</div>
    <div class="font-bold text-center">IR Total</div>
    <div class="font-bold text-center">Last Reject</div>

    <!-- IR RLD Sensor -->
    <div class="flex items-center">IR RLD Sensor</div>
    <div class="flex justify-center">
      <valueViewer :value="irArray[0] ?? null" />
    </div>
    <div class="flex justify-center">
      <valueViewer :value="compArray[0] ?? null" />
    </div>
    <div class="flex justify-center">
      <valueViewer :value="avgArray[0] ?? null" />
    </div>
    <valueViewer :value="irTotArray[0] ?? null"
      :highlight="result[0] === 1 ? 'danger' : result[0] === 0 ? 'none' : 'default'" />

    <div class="flex justify-center">
      <valueViewer :value="lastRjtd[0] ?? null" />
    </div>
  </div>
</template>
