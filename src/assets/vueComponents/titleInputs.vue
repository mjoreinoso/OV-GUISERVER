<template>
  <div class="flex flex-row grow justify-between items-center p-2">
    <div class="text-[1.2vw]">{{ props.title }}</div>
    <div>
      <numberInput v-model="inputValue" :placeholder="props.placeholder"
        @update:modelValue="emit('update:value', $event)" :name="props.title" :disabled="false" :min="props.min"
        :max="props.max" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import numberInput from './inputs/numberInput.vue';

const props = defineProps<{
  title: string;
  placeholder: string;
  value: string;
  min?: number;
  max?: number;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: string): void;
}>();

const inputValue = computed({
  get: () => Number(props.value), // 🔧 convierte string -> number
  set: (val: number) => emit('update:value', val.toString()), // 🔁 vuelve a string si el padre espera string
})

</script>
