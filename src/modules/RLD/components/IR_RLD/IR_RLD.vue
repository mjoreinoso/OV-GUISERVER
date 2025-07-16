<template>
    <div class="space-y-3">
        <div class="text-2xl font-bold">IR RLD</div>
        <div class="flex flex-col space-y-2 p-2 border-2 rounded-xl">
            <div class="grid grid-cols-2 gap-2">
                <titleInputs title="Brightness" placeholder="Enter brightness value" value="100"
                    @update:value="value => console.log(value)" />
            </div>
            <TitleSelects title="Reject Type" value="Auto" @update:value="value => console.log(value)" />
            <div class="grid grid-cols-2 gap-2">
                <titleInputs title="Sensitivity" placeholder="Enter zoom value" value="1.0"
                    @update:value="value => console.log(value)" />
                <titleInputs title="Detection Threshold" placeholder="Enter zoom value" value="1.0"
                    @update:value="value => console.log(value)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import titleInputs from '@/assets/vueComponents/titleInputs.vue';
import TitleSelects from '@/assets/vueComponents/titleSelects.vue';

</script>