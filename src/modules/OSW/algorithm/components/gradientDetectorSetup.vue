<template>
    <div class="flex flex-col p-3  rounded-xl border-2 justify-center grow">
        <div class="font-bold text-[0.95vw] pb-2">Gradient Detector Setup</div>

        <div class=" text-[0.85vw] grid grid-cols-2 gap-4 ">
            <div class="flex justify-between items-center">
                <titleSelects :title="'Source'" :value="algorithmStore.grd_source" :options="gradientSourceOptions"
                    @update:value="val => algorithmStore.grd_source = val" />
            </div>
            <div class="flex justify-between items-center">
                <titleSelects :title="'Type'" :value="algorithmStore.grd_type" :options="gradientTypeOptions"
                    @update:value="val => algorithmStore.grd_type = val" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Group Filter Level</span>
                <numberInput v-model="algorithmStore.grd_filter" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Width</span>
                <numberInput v-model="algorithmStore.grd_width" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Height</span>
                <numberInput v-model="algorithmStore.grd_height" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Light Comp.</span>
                <numberInput v-model="algorithmStore.grd_light_comp" />
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
