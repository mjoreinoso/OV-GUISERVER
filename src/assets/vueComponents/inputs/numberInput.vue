<template>
  <div class="flex flex-row text-[9mm] h-[5vh]">
    <!-- Botón de decremento -->
    <div
      class="bg-secondary  w-[2.5vw] rounded-l-lg text-white flex items-center justify-center cursor-pointer font-bold select-none"
      @mousedown="startDecrement"
      @mouseup="stopAction"
      @mouseleave="stopAction"
      @touchstart.prevent="startDecrement"
      @touchend="stopAction"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    >
      <span>-</span>
    </div>

    <!-- Input que abre el numpad -->
    <input
      readonly
      class="bg-white w-[5vw] text-black text-center outline-none text-[6.5mm]  border-2 transition-all duration-200 cursor-pointer"
      :class="{
        'cursor-not-allowed opacity-50': disabled,
        'border-yellow-400 bg-yellow-200 shadow-xs shadow-yellow-400': confirmOnEnter && hasPendingChange,
        'border-transparent': !confirmOnEnter || !hasPendingChange
      }"
      :value="internalValue"
      @focus="openNumpad"
      :disabled="disabled"
    />

    <!-- Botón de incremento -->
    <div
      class="bg-secondary  w-[2.5vw] rounded-r-lg text-white flex items-center justify-center cursor-pointer font-bold select-none"
      @mousedown="startIncrement"
      @mouseup="stopAction"
      @mouseleave="stopAction"
      @touchstart.prevent="startIncrement"
      @touchend="stopAction"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    >
      <span>+</span>
    </div>

    <!-- Numpad Modal -->
    <numpad
      v-model:modelValue="internalValue"
      v-model:visible="showNumpad"
      :min="min"
      :max="max"
      :name="name"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import numpad from '../numpad.vue'

type NumOrUndefined = number | undefined

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  min: { type: Number as () => NumOrUndefined, default: undefined },
  max: { type: Number as () => NumOrUndefined, default: undefined },
  name: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  confirmOnEnter: { type: Boolean, default: false },
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
  if (!props.disabled) {
    showNumpad.value = true
  }
}

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
  if (props.disabled) return
  internalValue.value = clamp(internalValue.value + 1)
}
function decrement() {
  if (props.disabled) return
  internalValue.value = clamp(internalValue.value - 1)
}

const startIncrement = () => startAction(increment)
const startDecrement = () => startAction(decrement)
</script>
