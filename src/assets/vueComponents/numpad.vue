<template>
    <teleport to="body">
        <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center">
            <!-- Fondo oscuro -->
            <div class="absolute inset-0 bg-black/70"></div>

            <!-- Modal -->
            <div class="relative z-10 bg-[#120f10] rounded-2xl p-4 w-fit h-[50vh] max-w-full space-y-2 text-white">

                <!-- Título -->
                <div class="text-center text-xl">
                    <p class="font-semibold text-2xl">Enter the value for</p>
                    <p class="italic text-blue-400">{{ name }}</p>
                </div>

                <!-- Rango permitido -->
                <div class="text-center text-xl text-gray-300">
                    From <span class="font-bold">{{ min }}</span> to <span class="font-bold">{{ max }}</span>
                </div>

                <div class="flex flex-row items-center justify-between gap-3 pb-4">
                    <div
                        :class="['rounded-lg p-2 text-right text-5xl font-bold flex-grow h-[6vh]', isOutOfRange ? 'bg-red-700 text-white' : 'bg-[#171315] bg-opacity-60 text-white']">
                        {{ displayValue || '0' }}
                    </div>
                    <div class="bg-[#14377B] h-[6vh] w-[6vw] rounded-lg flex items-center justify-center active:bg-[#16233e]"
                        @click="onBackspace">
                        <img :src="backspace" alt="" class="w-24">
                    </div>
                </div>


                <!-- Numpad + Flechas -->
                <div class="flex flex-row gap-3">
                    <!-- Numpad -->
                    <div class="grid grid-cols-3 gap-4 flex-grow">
                        <div v-for="key in keys" :key="key" @click="onKey(key)"
                            class="bg-[#14377B] rounded-lg w-[6vw] h-[6vh] flex items-center justify-center text-4xl font-bold active:bg-[#16233e] cursor-pointer">
                            {{ key }}
                        </div>
                    </div>

                    <!-- Flechas -->
                    <div class="flex flex-col justify-between">
                        <div class="bg-[#14377B] w-[6vw] h-[6vh] rounded flex items-center justify-center text-xl font-bold active:bg-[#16233e]"
                            @click="increment">
                            <img :src="arrow" alt="" class="w-8 h-8 rotate-180">
                        </div>
                        <div class="bg-[#14377B] w-[6vw] h-[6vh] rounded flex items-center justify-center text-xl font-bold active:bg-[#16233e]"
                            @click="decrement">
                            <img :src="arrow" alt="" class="w-8 h-8">
                        </div>
                        <div class="bg-[#14377B] w-[6vw] h-[6vh] rounded flex items-center justify-center text-xl font-bold active:bg-[#16233e]"
                            @click="cancel">
                            <img :src="returnIcon" alt="" class="w-10 h-10">
                        </div>
                        <div class="bg-[#14377B] w-[6vw] h-[6vh] rounded flex items-center justify-center text-xl font-bold active:bg-[#16233e]"
                            @click="confirm">
                            <img :src="enter" alt="" class="w-8 h-8">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import arrow from '@/assets/numpadIcons/arrow.svg'
import backspace from '@/assets/numpadIcons/backspace.svg'
import enter from '@/assets/numpadIcons/enter.svg'
import returnIcon from '@/assets/numpadIcons/return.svg'

type Props = {
    modelValue: number
    visible: boolean
    min?: number
    max?: number
    name?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void
    (e: 'update:visible', visible: boolean): void
}>()

const displayValue = ref(props.modelValue.toString())

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', '.']

const isOutOfRange = computed(() => {
    const val = parseInt(displayValue.value)
    return (
        !isNaN(val) &&
        ((props.min !== undefined && val < props.min) ||
            (props.max !== undefined && val > props.max))
    )
})

watch(() => props.modelValue, val => {
    displayValue.value = val.toString()
})

watch(() => props.visible, vis => {
    if (vis) {
        displayValue.value = props.modelValue.toString()
    }
})

function onKey(key: string) {
    const allowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '.']
    if (!allowed.includes(key)) return

    if (key === '.' && displayValue.value.includes('.')) return
    if (key === '-' && displayValue.value.includes('-')) return

    displayValue.value += key
}


function increment() {
    let num = parseInt(displayValue.value || '0', 10)
    if (!isNaN(num)) {
        num = Math.min(props.max ?? Infinity, num + 1)
        displayValue.value = num.toString()
    }
}

function decrement() {
    let num = parseInt(displayValue.value || '0', 10)
    if (!isNaN(num)) {
        num = Math.max(props.min ?? -Infinity, num - 1)
        displayValue.value = num.toString()
    }
}

function onBackspace() {
    displayValue.value = displayValue.value.slice(0, -1)
}


function confirm() {
    let num = parseInt(displayValue.value || '0', 10)
    if (!isNaN(num)) {
        if (props.min != null) num = Math.max(props.min, num)
        if (props.max != null) num = Math.min(props.max, num)
        emit('update:modelValue', num)
    }
    emit('update:visible', false)
}

function cancel() {
    emit('update:visible', false)
}
</script>