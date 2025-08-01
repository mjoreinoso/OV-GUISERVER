<template>
  <div class="flex flex-row grow justify-between items-center p-2 space-x-3">
    <div class="text-[1.1vw]">{{ props.title }}</div>
    <select
      class="bg-white h-[5vh] grow rounded-lg px-2 text-black"
      :value="props.value"
      @change="emit('update:value', castValue(($event.target as HTMLSelectElement).value))"
    >
      <option disabled value="">Please Select One</option>
      <option :value="0">Auto</option>
      <option :value="1">Manual</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  value: number | string;
}>();

const emit = defineEmits<{
  (e: 'update:value', value: number): void;
}>();

function castValue(val: string): number {
  return Number(val);
}
</script>
