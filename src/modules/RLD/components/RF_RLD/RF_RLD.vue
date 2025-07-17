<template>
    <div class="space-y-3 w-[55%] flex flex-col">
        <div class="text-[1.4vw] font-bold">RF RLD (Caustic)</div>
        <div class="flex flex-col space-y-2 p-2 border-2 rounded-xl">
            <div class="grid grid-cols-2 gap-2">
                <div class="space-y-3">
                    <titleInputs title="Inspection Window" placeholder="Enter brightness value" value="100"
                        @update:value="value => console.log(value)" />
                    <titleInputs title="Gain" placeholder="Enter zoom value" value="1.0"
                        @update:value="value => console.log(value)" />
                    <titleInputs title="Detection Threshold" placeholder="Enter zoom value" value="1.0"
                        @update:value="value => console.log(value)" />
                </div>
                <div  class="space-y-3">

                    <titleInputs title="Trigger Offset" placeholder="Enter zoom value" value="1.0"
                        @update:value="value => console.log(value)" />
                    <titleInputs title="Bottle Delay" placeholder="Enter zoom value" value="1.0"
                        @update:value="value => console.log(value)" />
                    <titleSelects title="Reject Type" value="Auto" @update:value="value => console.log(value)" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import titleSelects from '../../../../assets/vueComponents/titleSelects.vue';
import titleInputs from '../../../../assets/vueComponents/titleInputs.vue';

</script>