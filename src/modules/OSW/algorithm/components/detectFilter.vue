<template>
    <div class="p-2.5 grow flex flex-col rounded-xl border-2 justify-between space-y-3 grow">
        <div class="font-bold text-[0.95vw]">Detect Filter</div>

        <div class="text-[0.95vw] space-y-2">
            <div class="flex justify-between items-center">
                <span class="w-[5vw]">Enable</span>
                <Toggle v-model="algorithmStore.filter_enable" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
            </div>


            <div class="grid grid-cols-2 gap-2">
                <div class="flex justify-between items-center">
                    <span class="w-[7vw]">Kernel Size</span>
                    <numberInput v-model="algorithmStore.filter_kernel" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
                </div>
                <div class="flex justify-between items-center">
                    <span class="w-[7vw]">Threshold</span>
                    <numberInput v-model="algorithmStore.filter_threshold" @update:model-value="algorithmStore.emitAlgorithmConfig()" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import numberInput from "../../../../assets/vueComponents/inputs/numberInput.vue";
import Toggle from "../../../../assets/vueComponents/inputs/toggle.vue";
import { useAlgorithmStore } from '../store/algorithmStore';
const algorithmStore = useAlgorithmStore();

</script>
