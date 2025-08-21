<template>
        <div class="flex flex-col border-2 p-2.5 rounded-xl text-[0.95vw] justify-between">
            <div class="flex justify-between items-center space-x-3">
                <span >Outline</span>
                <Toggle v-model="imageStore.outline_display" />
            </div>
            <div class="flex justify-between items-center space-x-3">
                <span>Detection Point</span>
                <Toggle v-model="imageStore.point_display" />
            </div>
        </div>

</template>

<script setup lang="ts">
import Toggle from '../../../../assets/vueComponents/inputs/toggle.vue';
import { useImageStore } from '../store/imageStore';

const imageStore = useImageStore();

</script>