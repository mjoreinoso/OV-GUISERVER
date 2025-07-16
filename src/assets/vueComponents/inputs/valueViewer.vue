<template>
  <div class="relative flex items-center text-[9mm] ">
    <input
      readonly
      :value="modelValue"
      class="bg-white text-black w-[44mm] h-[15mm] text-center text-[6.5mm] rounded-lg pointer-events-none select-none"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: number | string
}>()
</script>
