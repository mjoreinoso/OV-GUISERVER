<template>
    <div class="p-3 text-[1.1vw] grid grid-cols-2 gap-4">
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Trigger Offset</span>
            <numberInput v-model="imageStore.trigger_offset" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Reject Delay</span>
            <numberInput v-model="imageStore.reject_delay" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Bottles Per Image</span>
            <numberInput v-model="imageStore.bottle_images" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Number Of Views</span>
            <numberInput v-model="imageStore.views" />
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useImageStore } from '../store/imageStore';

const imageStore = useImageStore();
</script>
