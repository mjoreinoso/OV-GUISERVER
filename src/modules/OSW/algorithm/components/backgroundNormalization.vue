<template>
    <div class="flex flex-col w-[35%] p-3  rounded-xl border-2 justify-between">
        <div class=" text-[1.1vw] grid grid-cols-2 gap-4 ">
            <div class="flex justify-between items-center col-span-2">
                <titleSelects :title="'Reject Type'" :value="imageStore.bottle_images"
                    @update:value="val => imageStore.bottle_images = val" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Detect Sensitivity</span>
                <numberInput v-model="imageStore.trigger_offset" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Reg. Kernel Width</span>
                <numberInput v-model="imageStore.trigger_offset" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Reg. Kernel Height</span>
                <numberInput v-model="imageStore.trigger_offset" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Offset Strength</span>
                <numberInput v-model="imageStore.trigger_offset" />
            </div>
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
