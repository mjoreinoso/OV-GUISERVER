<script setup lang="ts">
import { ref, watch } from 'vue';

// LEDProps actualizadas
interface LEDProps {
  name: string;
  initialState: boolean;
  alert?: boolean;
}

const props = defineProps<LEDProps>();


const emits = defineEmits<{
  (event: 'update-state', ledName: string, newState: boolean): void;
}>();

// Estado local inicializado con la prop
const ledState = ref<boolean>(props.initialState);

// Sincronizar el estado interno cuando la prop cambie
watch(() => props.initialState, (newVal) => {
  ledState.value = newVal;
});

const toggleLED = () => {
  ledState.value = !ledState.value;
  emits('update-state', props.name, ledState.value);
  console.log(`LED ${props.name} cambiado a: ${ledState.value ? 'ON' : 'OFF'}`);
};
</script>


<template>
  <div class="flex flex-col items-center w-[50px]">
    <!-- LED Visual -->
    <div class="relative group cursor-pointer transition-all duration-300 w-[50px] h-[50px]" @click="toggleLED">
      <div class="bg-[#a49f9f] w-full h-full rounded-md shadow-xl"></div>
      <!-- LED central -->
      <div class="w-[80%] h-[80%] rounded-full absolute top-[10%] left-[10%] shadow-xl transition-all duration-300"
        :class="{
          'bg-yellow-300 shadow-yellow-500/50': ledState && !props.alert,
          'bg-red-700 shadow-red-800/70': ledState && props.alert,
          'bg-gray-500 shadow-gray-600/50': !ledState
        }" />

      <!-- LED interno -->
      <div class="w-[70%] h-[70%] rounded-full absolute top-[15%] left-[15%] shadow-md transition-all duration-300"
        :class="{
          'bg-yellow-200 shadow-yellow-400/50': ledState && !props.alert,
          'bg-red-500 shadow-red-500/70': ledState && props.alert,
          'bg-gray-400 shadow-gray-500/50': !ledState
        }" />

    </div>
  </div>
</template>
