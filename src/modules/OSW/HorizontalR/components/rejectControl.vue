<template>
    <div class="h-full flex flex-col p-2.5 border-2 rounded-xl text-[0.95vw] space-y-3">
        <!-- Encabezados -->
        <div class="grid grid-cols-4 gap-4 pb-2 border-b-2">
            <div></div>
            <div class="font-bold text-center">Phase 1</div>
            <div class="font-bold text-center">Phase 2</div>
            <div class="font-bold text-center">Phase 3</div>
        </div>
        <div class="flex flex-col space-y-2 h-full">
            <!-- View 1 -->
            <div class="grid grid-cols-4 gap-4 items-center">
                <div class="flex flex-col">
                    <div class="font-bold text-start">Scan Start</div>
                </div>
                <div class="flex flex-row">
                    <NumberInput v-model="horizontalStore.phase_1" />
                </div>
                <div class="flex flex-row">
                    <NumberInput v-model="horizontalStore.phase_2" />
                </div>
                <div class="flex flex-row">
                    <NumberInput v-model="horizontalStore.phase_3" />
                </div>
            </div>
            <div class="flex flex-col space-y-2 justify-between h-full">
                <!-- View 1 -->
                <view1 />
                <!-- View 2 -->
                <view2 />
                <!-- View 3 -->
                <view3 />
                <!-- View 4 -->
                <view4 />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NumberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useHorizontalStore } from '../store/horizontalStore';
import view1 from './views/view1.vue';
import view2 from './views/view2.vue';
import view3 from './views/view3.vue';
import view4 from './views/view4.vue';

const horizontalStore = useHorizontalStore();
</script>
