<template>
  <div class="flex flex-row grow justify-between items-center">
    <div class="text-[0.95vw]">{{ title }}</div>
    <div>
      <numberInput
        v-model="inputValue"
        :placeholder="placeholder"
        :name="title"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="step"
        :precision="precision"
        :readonlyButtonsOnly="readonlyButtonsOnly"
        :readonlyIncrementLock="readonlyIncrementLock"
        :confirmOnEnter="confirmOnEnter"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import numberInput from './inputs/numberInput.vue';

const props = defineProps<{
  title: string;
  placeholder: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  disabled?: boolean;
  readonlyButtonsOnly?: boolean;
  readonlyIncrementLock?: boolean;
  confirmOnEnter?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: number): void;
}>();

const inputValue = computed({
  get: () => props.value,
  set: (val) => emit('update:value', val),
});
</script>
