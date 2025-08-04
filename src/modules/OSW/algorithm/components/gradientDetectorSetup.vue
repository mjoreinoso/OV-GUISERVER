<template>
    <div class="flex flex-col p-3  rounded-xl border-2 justify-between">

        <div class=" text-[1.1vw] grid grid-cols-2 gap-4 ">
            <div class="flex justify-between items-center">
                <titleSelects :title="'Source'" :value="imageStore.bottle_images"
                    @update:value="val => imageStore.bottle_images = val" />
            </div>
            <div class="flex justify-between items-center">
                <titleSelects :title="'Type'" :value="imageStore.bottle_images"
                    @update:value="val => imageStore.bottle_images = val" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Group Filter Level</span>
                <numberInput v-model="imageStore.trigger_offset" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Width</span>
                <numberInput v-model="imageStore.trigger_offset" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Height</span>
                <numberInput v-model="imageStore.trigger_offset" />
            </div>
            <div class="flex justify-between items-center">
                <span class="w-[9vw]">Light Comp.</span>
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
