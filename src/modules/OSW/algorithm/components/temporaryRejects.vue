<template>
    <div class=" flex flex-col items-center justify-center space-y-2 rounded-xl border-2 p-2.5 ">
        <div class="font-bold text-[0.95vw]">Temp. Total Rejects</div>
        <div class="flex flex-row space-x-3">
            <div class="text-[1.4vw]">1000</div>
        </div>
        <clickButton :label="'Reset Counter'" />
    </div>
</template>

<script setup lang="ts">
import clickButton from '../../../../assets/vueComponents/inputs/clickButton.vue';
</script>