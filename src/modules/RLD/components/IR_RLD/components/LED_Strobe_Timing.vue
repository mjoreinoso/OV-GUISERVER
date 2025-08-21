<template>
  <div class="flex flex-col justify-center text-[0.95vw] border-2 p-2.5 rounded-xl space-y-4 grow">
    <!-- Encabezado -->
    <div class="grid gap-x-3 font-bold"
         style="grid-template-columns: minmax(5vw, 8vw) repeat(2, minmax(0, 25vw));">
      <div class="text-start">LED Strobe</div>
      <div class="text-center">Compensation</div>
      <div class="text-center">IR</div>
    </div>

    <!-- Filas -->
    <div class="grid gap-x-3 gap-y-4"
         style="grid-template-columns: minmax(5vw, 8vw) repeat(2, minmax(0, 25vw));">
      <!-- Fila 1: Inner Ring -->
      <div class="text-start aling-">Inner Ring</div>
      <div class="flex justify-center">
        <numberInput v-model="data.ir_pot_2" :min="0" :max="255" :step="1" />
      </div>
      <div class="flex justify-center">
        <numberInput v-model="data.ir_pot_0" :min="0" :max="255" :step="1" />
      </div>

      <!-- Fila 2: Outer Ring -->
      <div class="text-start">Outer Ring</div>
      <div class="flex justify-center">
        <numberInput v-model="data.ir_pot_3" :min="0" :max="255" :step="1" />
      </div>
      <div class="flex justify-center">
        <numberInput v-model="data.ir_pot_1" :min="0" :max="255" :step="1" />
      </div>

      <!-- Fila 3: Gain -->
      <div class="text-start">Gain</div>
      <div class="flex justify-center">
        <numberInput v-model="data.gain_a" :min="0" :max="255" :step="1" />
      </div>
      <div class="flex justify-center">
        <numberInput v-model="data.gain_b" :min="0" :max="255" :step="1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import numberInput from "../../../../../assets/vueComponents/inputs/numberInput.vue";
import { useIRStore } from "../store/IRStore";
import { computed } from "vue";

const irStore = useIRStore();
const data = computed(() => irStore.irData[0] || {});
</script>
