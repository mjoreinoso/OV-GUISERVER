<template>
    <teleport to="body">
        <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center">
            <!-- Fondo oscuro -->
            <div class="absolute inset-0 bg-black/70"></div>

            <!-- Modal -->
            <div class="relative z-10 bg-[#120f10] rounded-2xl p-4 w-fit h-fit space-y-2 text-white">
                <!-- Título -->
                <div class="text-center text-[1.1vw]">
                    <p class="font-semibold text-[1.4vw]">Enter the value for</p>
                    <p class="italic text-blue-400">{{ name }}</p>
                </div>

                <!-- Rango permitido -->
                <div class="text-center text-[1.1vw] text-gray-300">
                    From <span class="font-bold">{{ min }}</span> to
                    <span class="font-bold">{{ max }}</span>
                </div>

                <!-- Display del valor -->
                <div class="flex flex-row items-center justify-between gap-3 pb-4">
                    <div :class="valueBoxClass">
                        {{ displayValue !== "" ? displayValue : "-" }}
                    </div>
                    <div class="bg-[#14377B] w-24 h-16 rounded-lg flex items-center justify-center active:bg-[#16233e]"
                        @click="onBackspace">
                        <img :src="backspace" alt="Backspace" class="w-24" />
                    </div>
                </div>

                <!-- Numpad + Flechas -->
                <div class="flex flex-row gap-3">
                    <!-- Numpad -->
                    <div class="grid grid-cols-3 gap-4 flex-grow">
                        <div v-for="key in keys" :key="key" @click="onKey(key)"
                            class="bg-[#14377B] rounded-lg w-24 h-24 flex items-center justify-center text-4xl font-bold active:bg-[#16233e] cursor-pointer">
                            {{ key }}
                        </div>
                    </div>

                    <!-- Flechas -->
                    <div class="flex flex-col justify-between">
                        <div class="bg-[#14377B] w-24 h-24 rounded-lg flex items-center justify-center active:bg-[#16233e]"
                            @click="increment">
                            <img :src="arrow" alt="Up" class="w-8 h-8 rotate-180" />
                        </div>
                        <div class="bg-[#14377B] w-24 h-24 rounded-lg flex items-center justify-center active:bg-[#16233e]"
                            @click="decrement">
                            <img :src="arrow" alt="Down" class="w-8 h-8" />
                        </div>
                        <div class="bg-[#14377B] w-24 h-24 rounded-lg flex items-center justify-center active:bg-[#16233e]"
                            @click="cancel">
                            <img :src="returnIcon" alt="Cancel" class="w-10 h-10" />
                        </div>
                        <div class="bg-[#14377B] w-24 h-24 rounded-lg flex items-center justify-center active:bg-[#16233e]"
                            @click="confirm">
                            <img :src="enter" alt="Enter" class="w-8 h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import arrow from "@/assets/numpadIcons/arrow.svg";
import backspace from "@/assets/numpadIcons/backspace.svg";
import enter from "@/assets/numpadIcons/enter.svg";
import returnIcon from "@/assets/numpadIcons/return.svg";

type Props = {
    modelValue: number;
    visible: boolean;
    min?: number;
    max?: number;
    name?: string;
};

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: "update:modelValue", value: number): void;
    (e: "update:visible", visible: boolean): void;
}>();

const displayValue = ref(props.modelValue.toString());
const allowedKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "0",
    ".",
];
const keys = allowedKeys;

const parsedValue = computed(() => parseFloat(displayValue.value));
const clearedOnce = ref(false);

const isOutOfRange = computed(() => {
    const val = parsedValue.value;
    return (
        !isNaN(val) &&
        ((props.min != null && val < props.min) ||
            (props.max != null && val > props.max))
    );
});

const valueBoxClass = computed(() => [
    "rounded-lg p-2 text-right text-5xl font-bold flex-grow h-[6vh]",
    isOutOfRange.value
        ? "bg-red-700 text-white"
        : "bg-[#171315] bg-opacity-60 text-white",
]);

watch(
    () => props.modelValue,
    (val) => {
        displayValue.value = val.toString();
    }
);

watch(
    () => props.visible,
    (vis) => {
        if (vis) {
            displayValue.value = props.modelValue.toString();
            clearedOnce.value = false; // reset flag
        }
    }
);

function onKey(key: string) {
    if (!allowedKeys.includes(key)) return;
    if (key === "." && displayValue.value.includes(".")) return;
    if (key === "-" && displayValue.value.includes("-")) return;

    // Borra el valor actual la primera vez que se escribe
    if (!clearedOnce.value) {
        displayValue.value = "";
        clearedOnce.value = true;
    }

    displayValue.value += key;
}

function onBackspace() {
    displayValue.value = displayValue.value.slice(0, -1);
}

function increment() {
    if (isNaN(parsedValue.value)) return;
    const val = Math.min(props.max ?? Infinity, parsedValue.value + 1);
    displayValue.value = val.toString();
}

function decrement() {
    if (isNaN(parsedValue.value)) return;
    const val = Math.max(props.min ?? -Infinity, parsedValue.value - 1);
    displayValue.value = val.toString();
}

function emitValue() {
    if (isNaN(parsedValue.value)) return;
    let val = parsedValue.value;
    if (props.min != null) val = Math.max(props.min, val);
    if (props.max != null) val = Math.min(props.max, val);
    emit("update:modelValue", val);
}

function confirm() {
    emitValue();
    emit("update:visible", false);
}

function cancel() {
    emit("update:visible", false);
}
</script>
