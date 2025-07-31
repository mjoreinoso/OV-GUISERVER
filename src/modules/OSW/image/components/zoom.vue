<template>
    <div class="border-2 p-3 rounded-xl text-[1.1vw] grid grid-cols-2 gap-4">
        <div class="flex justify-between items-center">
            <span class="w-[5vw]">X</span>
            <numberInput v-model="imageStore.x_image" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[5vw]">Y</span>
            <numberInput v-model="imageStore.y_image" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[5vw]">Width</span>
            <numberInput v-model="imageStore.width_image" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[5vw]">Height</span>
            <numberInput v-model="imageStore.height_image" />
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useImageStore } from '../store/imageStore';

const imageStore = useImageStore();
</script>
