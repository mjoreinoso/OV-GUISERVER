<template>
  <div class="flex items-center text-[9mm]">
    <input
      readonly
      :value="displayValue"
      class="bg-white text-black w-full h-[5vh] text-center text-[6.5mm] rounded-lg pointer-events-none select-none"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: number | string | null;
}>();

const displayValue = computed(() => {
  return typeof value === 'number' ? value.toFixed(2) : value ?? '';
});
</script>
