<template>
    <div class="p-3 text-[1.1vw] grid grid-cols-2 gap-4 w-[50%] rounded-xl border-2">
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Window</span>
            <numberInput v-model="imageStore.trigger_offset" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Inspection</span>
            <Toggle v-model="booleanRef" />
        </div>
        <div class="flex justify-between items-center">
            <titleSelects :title="'Inspection'" :value="imageStore.bottle_images"
                @update:value="val => imageStore.bottle_images = val" />
        </div>
        <div class="flex justify-between items-center">
            <div>
                Algorithm 1
                <input type="checkbox" v-model="imageStore.bottle_images" />
            </div>
            <div>
                Algorithm 2
                <input type="checkbox" v-model="imageStore.bottle_images" />
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
