<template>
    <div class="p-3 text-[1.1vw] flex flex-col justify-between rounded-xl border-2 space-y-4">

        <div class="flex justify-between items-center">
            <span class="w-[5vw]">Enable</span>
            <Toggle v-model="booleanRef" />
        </div>

        <div class="flex justify-between items-center">
            <span class="w-[7vw]">Kernel Size</span>
            <numberInput v-model="imageStore.trigger_offset" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[7vw]">Threshold</span>
            <numberInput v-model="imageStore.trigger_offset" />
        </div>

    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import Toggle from '../../../../assets/vueComponents/inputs/toggle.vue';
import titleSelects from '../../../../assets/vueComponents/titleSelects.vue';
import { useImageStore } from '../../image/store/imageStore';
import { ref } from 'vue';
const imageStore = useImageStore();

const booleanRef = ref(false);

</script>
