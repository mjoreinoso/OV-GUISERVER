<template>
    <div class="flex flex-col p-2 border-2 rounded-xl">
        <div class="grid grid-cols-2 gap-2">
            <titleInputs title="Brightness" placeholder="Enter brightness value" value="2"
                @update:value="value => console.log(value)" :min="0" :max="4" />
            <titleInputs title="Sensitivity" placeholder="Enter zoom value" value="1.0"
                @update:value="value => console.log(value)" :min="0" :max="4" />
        </div>
        <div class="grid grid-cols-2 gap-2">

            <titleInputs title="Detection Threshold" placeholder="Enter zoom value" value="1.0"
                @update:value="value => console.log(value)" />
            <titleSelects title="Reject Type" value="Auto" @update:value="value => console.log(value)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import titleInputs from '../../../../../assets/vueComponents/titleInputs.vue';
import titleSelects from '../../../../../assets/vueComponents/titleSelects.vue';

</script>