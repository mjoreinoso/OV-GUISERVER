<template>
  <div class="flex flex-col p-2 border-2 rounded-xl">
    <div class="grid grid-cols-2 gap-2">
      <titleInputs title="Brightness" placeholder="Enter brightness value" :value="data.brightness"
        @update:value="val => data.brightness = val" :min="0" :max="4" :step="0.1" :precision="1"
        :readonlyIncrementLock="isAnyIrPotAtMax" />
      <titleInputs title="Sensitivity" placeholder="Enter sensitivity value" :value="data.sensitivity"
        @update:value="val => data.sensitivity = val" :min="0" :max="4" :step="0.1" :precision="1"
        :readonlyIncrementLock="isAnyGainAtMax" />
    </div>
    <div class="grid grid-cols-2 gap-2">
      <titleInputs title="Detection Threshold" placeholder="Enter threshold" :value="data.threshold"
        @update:value="val => data.threshold = val" :min="0" :max="1023" />
      <titleSelects title="Reject Type" :value="data.recject_type" :options="rejectTypeOptions"
        @update:value="val => data.recject_type = val" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue';
// Opciones dummy para Reject Type
const rejectTypeOptions = ref([
  { label: 'VR1', value: 0 },
  { label: 'VR4', value: 1 },
]);
import titleInputs from '../../../../../assets/vueComponents/titleInputs.vue';
import titleSelects from '../../../../../assets/vueComponents/titleSelects.vue';
import { useIRStore } from '../store/IRStore';
import { toast } from 'vue3-toastify'



const irStore = useIRStore();
const data = computed(() => irStore.irData[0] || {});

// Computed para verificar si algún ir_pot está en su valor máximo
const isAnyIrPotAtMax = computed(() => {
  return data.value.ir_pot_0 * data.value.brightness >= 255 ||
    data.value.ir_pot_1 * data.value.brightness >= 255 ||
    data.value.ir_pot_2 * data.value.brightness >= 255 ||
    data.value.ir_pot_3 * data.value.brightness >= 255;
});

const isAnyGainAtMax = computed(() => {
  return data.value.gain_a * data.value.sensitivity >= 255 ||
    data.value.gain_b * data.value.sensitivity >= 255;
});

watch(isAnyIrPotAtMax, (val) => {
  if (val) {
    toast.warning("IR pot reached maximum!")
  }
})

watch(isAnyGainAtMax, (val) => {
  if (val) {
    toast.warning("Gain reached maximum!")
  }
})

</script>
