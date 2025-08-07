<template>
    <div class="p-3 text-[0.85vw] grid grid-cols-2 gap-4 w-[41%] rounded-xl border-2">
        <!-- Window ID -->
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Window</span>
            <numberInput v-model="windowIdDisplay" :min="1" :max="15" />
        </div>

        <!-- Inspection Enable -->
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Inspection Display</span>
            <Toggle v-model="algorithmStore.inspection_enable" />
        </div>

        <!-- Inspection Type -->
        <div class="flex justify-between items-center">
            <titleSelects :title="'Inspection'" :value="algorithmStore.inspection" :options="inspectionOptions"
                @update:value="val => algorithmStore.inspection = val" />
        </div>

        <!-- Algorithm ID Radio Buttons -->
        <div class="flex justify-between items-center">
        <div class="flex items-center space-x-1">
                <input type="radio" name="algorithm" :value="0" v-model="algorithmStore.algorithm_id" />
                <span>Alg 1</span>
            </div>
            <div class="flex items-center space-x-1">
                <input type="radio" name="algorithm" :value="1" v-model="algorithmStore.algorithm_id" />
                <span>Alg 2</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import Toggle from '../../../../assets/vueComponents/inputs/toggle.vue';
import titleSelects from '../../../../assets/vueComponents/titleSelects.vue';
import { inspectionOptions } from '../store/algorithmSelectOptions';
import { useAlgorithmStore } from '../store/algorithmStore';
import { watch, computed } from 'vue';

const algorithmStore = useAlgorithmStore();

// Computed para mostrar window_id de 1-15 pero guardar 0-14
const windowIdDisplay = computed({
    get: () => algorithmStore.window_id + 1,
    set: (val: number) => {
        algorithmStore.window_id = Math.max(0, Math.min(14, val - 1));
    }
});

// Watch changes in both window_id and algorithm_id to fetch new config
watch(
    () => [algorithmStore.window_id, algorithmStore.algorithm_id],
    ([newWindowId, newAlgorithmId]) => {
        if (newWindowId !== null && newWindowId !== undefined && newAlgorithmId !== null && newAlgorithmId !== undefined) {
            algorithmStore.fetchAlgorithmConfig(newWindowId, newAlgorithmId);
        }
    }
);
</script>
