<template>
    <div class="flex flex-col p-2 border-2 rounded-xl">
        <div class="grid grid-cols-2 gap-2">
            <titleInputs title="Brightness" placeholder="Enter brightness value" :value="data.brightness"
                @update:value="val => data.brightness = val" :min="0" :max="4" />
            <titleInputs title="Sensitivity" placeholder="Enter sensitivity value" :value="data.sensitivity"
                @update:value="val => data.sensitivity = val" :min="0" :max="4" />
        </div>
        <div class="grid grid-cols-2 gap-2">
            <titleInputs title="Detection Threshold" placeholder="Enter threshold" :value="data.threshold"
                @update:value="val => data.threshold = val" />
            <titleSelects title="Reject Type" :value="data.recject_type"
                @update:value="val => data.recject_type = val" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed} from 'vue';
import titleInputs from '../../../../../assets/vueComponents/titleInputs.vue';
import titleSelects from '../../../../../assets/vueComponents/titleSelects.vue';
import { useIRStore } from '../store/IRStore';

const irStore = useIRStore();
const data = computed(() => irStore.irData[0] || {});
</script>
