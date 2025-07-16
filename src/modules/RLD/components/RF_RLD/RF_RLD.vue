<template>
    <div class="space-y-3">
        <div class="text-[1.7vw] font-bold">RF RLD (Caustic)</div>
        <div class="flex flex-col space-y-2 p-2 border-2 rounded-xl">
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <titleInputs title="Inspection Window" placeholder="Enter brightness value" value="100"
                        @update:value="value => console.log(value)" />
                    <titleInputs title="Gain" placeholder="Enter zoom value" value="1.0"
                        @update:value="value => console.log(value)" />
                    <titleInputs title="Detection Threshold" placeholder="Enter zoom value" value="1.0"
                        @update:value="value => console.log(value)" />
                </div>
                <div>

                    <titleInputs title="Trigger Offset" placeholder="Enter zoom value" value="1.0"
                        @update:value="value => console.log(value)" />
                    <titleInputs title="Bottle Delay" placeholder="Enter zoom value" value="1.0"
                        @update:value="value => console.log(value)" />
                    <TitleSelects title="Reject Type" value="Auto" @update:value="value => console.log(value)" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import titleInputs from '@/assets/vueComponents/titleInputs.vue';
import TitleSelects from '@/assets/vueComponents/titleSelects.vue';

</script>