<template>
    <div class="flex flex-col p-3  rounded-xl border-2 justify-center grow">
        <div class="font-bold text-[0.95vw] pb-2">Gradient Detector Setup</div>

        <div class=" text-[0.95vw] grid grid-cols-2 gap-2">
            <div class="flex space-x-3 justify-between items-center">
                <div>Source</div>
                <titleSelects :value="algorithmStore.grd_source" :options="gradientSourceOptions"
                    @update:value="val => { algorithmStore.grd_source = val; algorithmStore.emitAlgorithmConfig(); }" />
            </div>
            <div class="flex space-x-3 justify-between items-center">
                <div>Type</div>
                <titleSelects :value="algorithmStore.grd_type" :options="gradientTypeOptions"
                    @update:value="val => { algorithmStore.grd_type = val; algorithmStore.emitAlgorithmConfig(); }" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Group Filter Level</span>
                <numberInput v-model="algorithmStore.grd_filter" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Width</span>
                <numberInput v-model="algorithmStore.grd_width" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Height</span>
                <numberInput v-model="algorithmStore.grd_height" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Light Comp.</span>
                <numberInput v-model="algorithmStore.grd_light_comp" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import titleSelects from '../../../../assets/vueComponents/titleSelects.vue';
import { useAlgorithmStore } from '../store/algorithmStore';
import { gradientSourceOptions, gradientTypeOptions } from '../store/algorithmSelectOptions';

const algorithmStore = useAlgorithmStore();
</script>
