<template>
    <div class="flex flex-row rounded-xl bg-accent">
        <div class="flex justify-center items-center bg-secondary rounded-l-xl p-2 font-bold">P2</div>
        <div class="rounded-xl text-[1.1vw] grid grid-cols-2 gap-4 p-3">
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">View 1</span>
                <valueViewer />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">View 2</span>
                <valueViewer />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">View 3</span>
                <valueViewer />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">View 4</span>
                <valueViewer />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
</script>
