<template>
  <div class="flex flex-row text-[1.8vw] h-[9mm]">
    <!-- Botón de decremento -->
    <div
      class="bg-secondary text-[1.2vw] w-[2vw] rounded-l-lg text-white flex items-center justify-center cursor-pointer font-bold select-none"
      @mousedown="startDecrement" @mouseup="stopAction" @mouseleave="stopAction" @touchstart.prevent="startDecrement"
      @touchend="stopAction" :class="{ 'opacity-50 cursor-not-allowed': disabled }">
      <span>-</span>
    </div>

    <!-- Input que abre el numpad -->
    <input readonly
      class="bg-white w-[3.5vw] text-black text-center outline-none text-[1.05vw] border-2 transition-all duration-200"
      :class="{
        'cursor-not-allowed opacity-50': disabled,
        'cursor-default': readonlyButtonsOnly,
        'border-yellow-400 bg-yellow-200 shadow-xs shadow-yellow-400': confirmOnEnter && hasPendingChange,
        'border-transparent': !confirmOnEnter || !hasPendingChange
      }" :value="formattedValue" @focus="openNumpad" :disabled="disabled" />


    <!-- Botón de incremento -->
    <div class="bg-secondary text-[1.2vw] w-[2vw] rounded-r-lg text-white flex items-center justify-center font-bold select-none"
      :class="{
        'opacity-50 cursor-not-allowed': props.disabled || props.readonlyIncrementLock,
        'cursor-pointer': !props.disabled && !props.readonlyIncrementLock
      }" @mousedown="startIncrement" @mouseup="stopAction" @mouseleave="stopAction"
      @touchstart.prevent="startIncrement" @touchend="stopAction">
      <span>+</span>
    </div>


    <!-- Numpad Modal -->
    <numpad v-model:modelValue="internalValue" v-model:visible="showNumpad" :min="min" :max="max" :name="name" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import numpad from '../numpad.vue'

type NumOrUndefined = number | undefined

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  min: { type: Number as () => NumOrUndefined, default: undefined },
  max: { type: Number as () => NumOrUndefined, default: undefined },
  name: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  confirmOnEnter: { type: Boolean, default: false },
  readonlyButtonsOnly: { type: Boolean, default: false },
  readonlyIncrementLock: { type: Boolean, default: false },

  step: { type: Number, default: 1 },           // 🔢 define el paso (1 por defecto)
  precision: { type: Number, default: 0 },      // ✨ cuántos decimales mostrar (0 = entero)
})


const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)
const hasPendingChange = ref(false)
const showNumpad = ref(false)

watch(() => props.modelValue, newVal => {
  internalValue.value = newVal
  hasPendingChange.value = false
})

// Emitir al cambiar el valor con Numpad
watch(internalValue, val => {
  emit('update:modelValue', clamp(val))
})

function clamp(value: number) {
  let v = value
  if (props.min != null) v = Math.max(props.min, v)
  if (props.max != null) v = Math.min(props.max, v)
  return v
}

function openNumpad() {
  if (!props.disabled && !props.readonlyButtonsOnly) {
    showNumpad.value = true;
  }
}


const dynamicPrecision = computed(() => {
  // Si el usuario especifica precision, usarlo
  if (typeof props.precision === 'number' && props.precision >= 0) {
    return props.precision;
  }
  // Si no, modo automático
  const val = internalValue.value;
  return Number.isInteger(val) ? 0 : 2;
});

const formattedValue = computed(() => {
  return internalValue.value.toFixed(dynamicPrecision.value);
});


// Increment/Decrement
let currentTimeout: number | null = null
function startAction(action: () => void) {
  if (props.disabled) return
  action()
  let delay = 300
  const repeat = () => {
    if (!props.disabled) {
      action()
      delay = Math.max(50, delay - 50)
      currentTimeout = window.setTimeout(repeat, delay)
    }
  }
  currentTimeout = window.setTimeout(repeat, delay)
}
function stopAction() {
  if (currentTimeout !== null) {
    clearTimeout(currentTimeout)
    currentTimeout = null
  }
}
function increment() {
  if (props.disabled || props.readonlyIncrementLock) return;
  internalValue.value = clamp(Number((internalValue.value + props.step).toFixed(dynamicPrecision.value)));
}

function decrement() {
  if (props.disabled) return;
  internalValue.value = clamp(Number((internalValue.value - props.step).toFixed(dynamicPrecision.value)));
}


const startIncrement = () => startAction(increment)
const startDecrement = () => startAction(decrement)


</script>
