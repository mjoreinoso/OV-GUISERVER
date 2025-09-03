<template>
    <div class="p-2.5 w-[65%] text-[0.95vw] grid grid-cols-1 gap-2 grow rounded-xl border-2">
        <!-- Window Type -->
        <div class="flex space-x-3 justify-between items-center">
            <div>Type</div>
            <titleSelects :value="windowStore.type" :options="windowTypeOptions"
                @update:value="val => { windowStore.type = val; windowStore.emitWindowConfig(); }" />
        </div>
        <!-- Algorithm ID Radio Buttons -->
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <radioToggle :modelValue="windowStore.algorithm" :value="0" @update:modelValue="windowStore.algorithm = 0; windowStore.putWindowAlgorithm()" />
                    <span>Algorithm 1</span>
                </div>
                <div class="flex items-center space-x-2">
                    <radioToggle :modelValue="windowStore.algorithm" :value="1" @update:modelValue="windowStore.algorithm = 1; windowStore.putWindowAlgorithm()" />
                    <span>Algorithm 2</span>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import titleSelects from '../../../../assets/vueComponents/titleSelects.vue';
import { windowTypeOptions } from '../store/windowSelectOptions';
import radioToggle from '../../../../assets/vueComponents/inputs/radioToggle.vue';
import { useWindowStore } from '../store/windowStore';

const windowStore = useWindowStore();
</script>
