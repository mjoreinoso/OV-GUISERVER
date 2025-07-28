<template>
  <div class="flex items-center text-[9mm]">
    <input
      readonly
      :value="displayValue"
      class="w-full h-[6vh] text-center text-[6.5mm] rounded-lg pointer-events-none select-none transition-all duration-200"
      :class="[
        'text-black',
        backgroundColor
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value?: number | string | null;
  highlight?: 'danger' | 'default' | 'none';
}>();

const displayValue = computed(() => {
  return typeof props.value === 'number' ? props.value.toFixed(2) : props.value ?? '';
});

const backgroundColor = computed(() => {
  if (props.highlight === 'danger') return 'bg-red-500';
  if (props.highlight === 'none') return 'bg-white';
  return 'bg-white';
});
</script>
