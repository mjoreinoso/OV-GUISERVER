<template>
    <div class="flex flex-col grow p-2.5  rounded-xl border-2 justify-center grow">
        <div class="font-bold text-[0.95vw] pb-2">Background Normalization</div>
        <div class=" text-[0.95vw] grid grid-cols-2 gap-2 ">
            <div class="flex space-x-3 justify-between items-center col-span-2">
                <div>Source</div>
                <titleSelects :value="algorithmStore.bck_source" :options="backgroundSourceOptions"
                    @update:value="val => { algorithmStore.bck_source = val; algorithmStore.emitAlgorithmConfig(); }" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Detect Sensitivity</span>
                <numberInput v-model="algorithmStore.bck_sensitivity" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Reg. Kernel Width</span>
                <numberInput v-model="algorithmStore.bck_kernel_width" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Reg. Kernel Height</span>
                <numberInput v-model="algorithmStore.bck_kernel_height" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Offset Strength</span>
                <numberInput v-model="algorithmStore.bck_kernel_offset" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import titleSelects from '../../../../assets/vueComponents/titleSelects.vue';
import { useAlgorithmStore } from '../store/algorithmStore';
import { backgroundSourceOptions } from '../store/algorithmSelectOptions';

const algorithmStore = useAlgorithmStore();
</script>
