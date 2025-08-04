<template>
  <button
    @click="handleClick"
    class="w-full p-3 bg-secondary active:bg-[#1B4AA8] active:scale-95 text-white text-[1.2vw] font-bold rounded-2xl shadow-xl transition-all duration-150 ease-out flex items-center justify-center select-none"
  >
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("🟢 Botón presionado");
};

const props = defineProps<{
  label?: string;
}>();
</script>
