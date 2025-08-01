<template>
    <div class="space-y-1">
        <div class="text-[1.1vw] font-bold">Top Diagonal Mask</div>
        <div class="border-2 p-3 rounded-xl flex flex-col text-[1.1vw] space-y-2">
            <div class="flex items-center space-x-2 justify-between">
                Enable
                <toggle v-model="maskStore.mask_top_enable" />
            </div>
            <div class="flex items-center space-x-2 justify-between">
                Left Edge Vertical Position
                <numberInput v-model="maskStore.left_top_position" />
            </div>
            <div class="flex items-center space-x-2 justify-between">
                Right Edge Vertical Position
                <numberInput v-model="maskStore.right_top_position" />
            </div>
            <div class="flex items-center space-x-2 justify-between">
                Width
                <numberInput v-model="maskStore.top_width" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useMaskStore } from '../store/maskStore';
import toggle from '../../../../assets/vueComponents/inputs/toggle.vue';

const maskStore = useMaskStore();
</script>