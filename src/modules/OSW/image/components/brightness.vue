<template>
        <div class="border-2 p-3 rounded-xl text-[1.1vw] grid grid-cols-2 gap-4">
            <div class="flex justify-between items-center space-x-3">
                <span>Gain</span>
                <numberInput v-model="imageStore.gain" />
            </div>
            <div class="flex justify-between items-center space-x-3">
                <span>Exposure</span>
                <numberInput v-model="imageStore.exposure" />
            </div>
            <div class="flex justify-between items-center space-x-3">
                <span>Debounce</span>
                <numberInput v-model="imageStore.debounce" />
            </div>
            <div class="flex justify-between items-center space-x-3">
                <span>Elevator Height</span>
                <numberInput />
            </div>
        </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useImageStore } from '../store/imageStore';

const imageStore = useImageStore();

</script>