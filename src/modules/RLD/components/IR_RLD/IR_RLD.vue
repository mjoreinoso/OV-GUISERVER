<template>
    <div class="space-y-3 w-[55%] h-full flex flex-col">
        <div class="text-2xl font-bold">IR RLD</div>
        <div class="flex flex-col space-y-5 p-2 border-2 flex-1 rounded-xl">
            <div class="grid grid-cols-2 gap-2">
                <titleInputs title="Brightness" placeholder="Enter brightness value" value="100"
                    @update:value="value => console.log(value)" />
                <titleInputs title="Sensitivity" placeholder="Enter zoom value" value="1.0"
                    @update:value="value => console.log(value)" />
            </div>

            <LED_Strobe_Timing/>

            <div class="grid grid-cols-2 gap-2">

                <titleInputs title="Detection Threshold" placeholder="Enter zoom value" value="1.0"
                    @update:value="value => console.log(value)" />
                <TitleSelects title="Reject Type" value="Auto" @update:value="value => console.log(value)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import titleInputs from '@/assets/vueComponents/titleInputs.vue';
import TitleSelects from '@/assets/vueComponents/titleSelects.vue';
import LED_Strobe_Timing from './components/LED_Strobe_Timing.vue';

</script>