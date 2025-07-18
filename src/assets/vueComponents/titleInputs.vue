<template>
  <div class="flex flex-row grow justify-between items-center p-2">
    <div class="text-[1.2vw]">{{ title }}</div>
    <div>
      <numberInput
        v-model="inputValue"
        :placeholder="placeholder"
        :name="title"
        :disabled="false"
        :min="min"
        :max="max"
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
}>();

const emit = defineEmits<{
  (e: 'update:value', value: number): void;
}>();

const inputValue = computed({
  get: () => props.value,
  set: (val) => emit('update:value', val),
});
</script>
