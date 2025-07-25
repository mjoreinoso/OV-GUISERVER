<template>
    <div v-if="data" class="flex flex-col space-y-4 text-white border-2 rounded-xl p-3 text-[1.2vw]">
        <!-- Global Brightness -->
        <div class="flex items-center space-x-3 justify-between border-b-2 pb-2 text-[1.4vw]">
            <label for="global_brightness">Global Brightness:</label>
            <numberInput :name="'global_brightness'" v-model="data.global_brightness" :min="0" :max="4"
                :readonlyButtonsOnly="true" :readonlyIncrementLock="globalBrightnessLocked"
                @update:modelValue="updateGlobalBrightness" />
        </div>

        <!-- POTs + States -->
        <div class="w-full max-h-[77.5vh] overflow-y-auto pr-2">
            <div class="flex flex-col gap-3">
                <div v-for="i in 16" :key="i"
                    class="flex items-center justify-between px-2 py-1 border-b border-white/20">
                    <label class="min-w-[80px] text-left">POT {{ i }}</label>

                    <div class="flex items-center space-x-4">
                        <LED :name="`state_${i}`" :initialState="data[`state_${i}`]" :alert="data[`pot_${i}`] === 255"
                            @update-state="(name, newVal) => updateLEDState(name, newVal)" />

                        <numberInput :name="`pot_${i}`" v-model="data[`pot_${i}`]" :min="0" :max="255"
                            :disabled="!data[`state_${i}`]" @update:modelValue="(val) => updatePotValue(i, val)" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="text-white">Loading strobe data...</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStrobeStore } from "../store/strobeStore";
import numberInput from "../../../../assets/vueComponents/inputs/numberInput.vue";
import LED from "../../../../assets/vueComponents/inputs/led.vue";

const strobeStore = useStrobeStore();
const data = computed(() => strobeStore.strobeData[0]);
const lastKnownPotValues = ref<{ [key: string]: number }>({});

onMounted(async () => {
    await strobeStore.fetchStrobeData();
    if (data.value as any) {
        for (let i = 0; i < 16; i++) {
            lastKnownPotValues.value[`pot_${i}`] = (data.value as any)[`pot_${i}`];
        }
    }
});

function emitChange() {
    strobeStore.emitStrobeData();
}

const globalBrightnessLocked = computed(() => {
    if (!data.value) return false;

    for (let i = 0; i < 16; i++) {
        const pot = (data.value as any)[`pot_${i}`];
        const state = (data.value as any)[`state_${i}`];
        if (state && pot === 255) {
            return true;
        }
    }
    return false;
});


function updateGlobalBrightness(newVal: number) {
    if (!(data.value as any)) return;

    (data.value as any).global_brightness = newVal;

    for (let i = 0; i < 16; i++) {
        const potKey = `pot_${i}`;
        const stateKey = `state_${i}`;

        if ((data.value as any)[stateKey]) {
            (data.value as any)[potKey] = Math.round(
                (lastKnownPotValues.value[potKey] ?? 0) * newVal
            );
        }
    }

    emitChange();
}

function updatePotValue(index: number, newVal: number) {
    if (!(data.value as any)) return;

    const potKey = `pot_${index}`;
    (data.value as any)[potKey] = newVal;

    // Se rompe la relación → reset de brillo
    (data.value as any).global_brightness = 1;

    // Guardamos nuevo valor base
    lastKnownPotValues.value[potKey] = newVal;

    emitChange();
}

function updateLEDState(name: string, newVal: boolean) {
    if (data.value as any) {
        (data.value as any as any)[name] = newVal;

        // Extra: si apagamos el LED, reiniciar pot asociado
        const index = Number(name.split("_")[1]);
        const potKey = `pot_${index}`;
        if (!newVal) {
            (data.value as any as any)[potKey] = 0;
        }

        emitChange();
    }
}
</script>
