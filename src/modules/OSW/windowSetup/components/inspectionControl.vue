<template>
    <div class="p-2.5 text-[0.95vw] grid grid-cols-2 gap-2 grow rounded-xl border-2">
        <!-- Window ID -->
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Vertical Position</span>
            <numberInput v-model="windowStore.vertical_position" @update:model-value="windowStore.emitWindowConfig()" />
        </div>

        <!-- Window Type -->
        <div class="flex space-x-3 justify-between items-center">
            <div>Type</div>
            <titleSelects :value="windowStore.type" :options="windowTypeOptions"
                @update:value="val => { windowStore.type = val; windowStore.emitWindowConfig(); }" />
        </div>

        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Bottom Width</span>
            <numberInput v-model="windowStore.bottom_width" @update:model-value="windowStore.emitWindowConfig()"/>
        </div>

        <!-- Algorithm ID Radio Buttons -->
        <div class="flex justify-between items-center">
            <div class="flex items-center space-x-1">
                <input @change="windowStore.putWindowAlgorithm" type="radio" name="algorithm" :value="0" v-model="windowStore.algorithm" />
                <span>Alg 1</span>
            </div>
            <div class="flex items-center space-x-1">
                <input @change="windowStore.putWindowAlgorithm" type="radio" name="algorithm" :value="1" v-model="windowStore.algorithm" />
                <span>Alg 2</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import titleSelects from '../../../../assets/vueComponents/titleSelects.vue';
import { windowTypeOptions } from '../store/windowSelectOptions';
import { useWindowStore } from '../store/windowStore';

const windowStore = useWindowStore();
</script>
