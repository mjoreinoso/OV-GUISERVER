<template>
  <div class="flex flex-col p-2 border-2 rounded-xl w-[55%]">
    <div class="grid grid-cols-2 gap-3">
      <titleInputs title="Inspection Window" placeholder="Enter threshold value" :value="data.threshold"
        @update:value="val => data.threshold = val" :min="0" :max="255" :step="1" :precision="0" />
      <titleInputs title="Detection Threshold" placeholder="Enter threshold value" :value="data.threshold"
        @update:value="val => data.threshold = val" :min="0" :max="255" :step="1" :precision="0" />
      <titleInputs title="Gain A" placeholder="Enter gain A value" :value="data.gain_a"
        @update:value="val => data.gain_a = val" :min="0" :max="255" :step="1" :precision="0"
        :readonlyIncrementLock="isGainAtMax" />
      <div class="col-span-1 flex items-center">
        <titleSelects title="Reject Type" :value="data.reject_type" :options="rejectTypeOptions"
          @update:value="val => data.reject_type = val" />
      </div>
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
import { useRFStore } from '../store/FNStore';
import { toast } from 'vue3-toastify'

const rfStore = useRFStore();
const data = computed(() => rfStore.rfData[0] || {});

// Computed para verificar si gain_a está en su valor máximo
const isGainAtMax = computed(() => {
  return data.value.gain_a >= 255;
});

watch(isGainAtMax, (val) => {
  if (val) {
    toast.warning("RF Gain reached maximum!")
  }
})

</script>
