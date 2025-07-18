<template>
  <div class="flex flex-col justify-center text-[1.2vw] border-2 p-3 grow rounded-xl space-y-4">
    <!-- Encabezado -->
    <div class="grid gap-x-3 font-bold"
         style="grid-template-columns: minmax(100px, 160px) repeat(2, minmax(0, 1fr));">
      <div class="text-start">LED Strobe</div>
      <div class="text-center">Compensation</div>
      <div class="text-center">IR</div>
    </div>

    <!-- Filas -->
    <div class="grid gap-x-3 gap-y-4"
         style="grid-template-columns: minmax(100px, 160px) repeat(2, minmax(0, 1fr));">
      <!-- Fila 1: Inner Ring -->
      <div class="text-start">Inner Ring</div>
      <div class="flex justify-center">
        <numberInput v-model="data.ir_pot_2" />
      </div>
      <div class="flex justify-center">
        <numberInput v-model="data.ir_pot_0" />
      </div>

      <!-- Fila 2: Outer Ring -->
      <div class="text-start">Outer Ring</div>
      <div class="flex justify-center">
        <numberInput v-model="data.ir_pot_3" />
      </div>
      <div class="flex justify-center">
        <numberInput v-model="data.ir_pot_1" />
      </div>

      <!-- Fila 3: Gain -->
      <div class="text-start">Gain</div>
      <div class="flex justify-center">
        <numberInput v-model="data.gain_a" />
      </div>
      <div class="flex justify-center">
        <numberInput v-model="data.gain_b" />
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
