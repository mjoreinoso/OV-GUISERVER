<template>
    <select
      class="bg-white h-[10mm] text-[0.95vw] pl-2 grow rounded-lg text-black"
      :value="props.value"
      @change="emit('update:value', castValue(($event.target as HTMLSelectElement).value))"
    >
      <option disabled value="">Please Select One</option>
      <option v-for="opt in props.options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>
</template>

<script setup lang="ts">

const props = defineProps<{
  value: number | string;
  options: { label: string; value: number | string }[];
}>();

const emit = defineEmits<{
  (e: 'update:value', value: number): void;
}>();

function castValue(val: string): number {
  return Number(val);
}
</script>
