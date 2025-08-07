<template>
    <div class="p-3 text-[0.85vw] grid grid-cols-2 gap-4 rounded-xl border-2 w-[40%]">
        <div class="flex justify-between items-center">
            <titleSelects :title="'Reject Type'" :value="imageStore.bottle_images"
                @update:value="val => imageStore.bottle_images = val" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Rejection</span>
            <Toggle v-model="booleanRef" />
        </div>
        <div class="flex justify-between items-center">
            <titleSelects :title="'Reject When'" :value="imageStore.bottle_images"
                @update:value="val => imageStore.bottle_images = val" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Threshold</span>
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
