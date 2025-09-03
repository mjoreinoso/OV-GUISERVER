<template>
  <button
    :class="[
      'w-[10mm] h-[10mm] rounded-full border-2-secondary flex items-center justify-center transition-all duration-150',
      isChecked ? 'bg-green-600 border-green-600' : 'bg-white border-green-600',
    ]"
    @click="toggle"
    type="button"
    role="radio"
    :aria-checked="isChecked"
  >
    <span v-if="isChecked" class="w-4 h-4 rounded-full bg-white flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" fill="white" />
        <circle cx="8" cy="8" r="5" fill="#16a34a" />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number, Boolean], required: true },
  value: { type: [String, Number, Boolean], required: true }
});
const emit = defineEmits(['update:modelValue', 'change']);

const isChecked = computed(() => props.modelValue === props.value);

function toggle() {
  if (!isChecked.value) {
    emit('update:modelValue', props.value);
    emit('change', props.value);
  }
}
</script>

<style scoped>
</style>
