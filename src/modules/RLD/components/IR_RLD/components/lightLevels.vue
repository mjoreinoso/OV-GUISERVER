<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
import { useIRStore } from '../store/IRStore';
import { storeToRefs } from 'pinia';

const irStore = useIRStore();
const { compArray, irArray, irTotArray, avgArray } = storeToRefs(irStore);
</script>

<template>
  <div
    class="grid gap-x-2 grow text-white text-[1.2vw] p-3 border-2 rounded-xl"
    style="grid-template-columns: minmax(5vw, 8vw) repeat(4, minmax(0, 20vw));"
  >
    <!-- Encabezado -->
    <div></div>
    <div class="font-bold text-center">IR</div>
    <div class="font-bold text-center">COMP</div>
    <div class="font-bold text-center">Average</div>
    <div class="font-bold text-center">IR Total</div>

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
    <div class="flex justify-center">
      <valueViewer :value="irTotArray[0] ?? null" />
    </div>
  </div>
</template>
