<template>
    <div class="p-3  grow flex flex-col rounded-xl border-2 justify-center space-y-3 grow">
        <div class="font-bold text-[0.95vw]">Detect Filter</div>

        <div class="text-[0.85vw] space-y-3">
            <div class="flex justify-between items-center">
                <span class="w-[5vw]">Enable</span>
                <Toggle v-model="booleanRef" />
            </div>


            <div class="grid grid-cols-2 gap-4">
                <div class="flex justify-between items-center">
                    <span class="w-[7vw]">Kernel Size</span>
                    <numberInput v-model="imageStore.trigger_offset" />
                </div>
                <div class="flex justify-between items-center">
                    <span class="w-[7vw]">Threshold</span>
                    <numberInput v-model="imageStore.trigger_offset" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import numberInput from "../../../../assets/vueComponents/inputs/numberInput.vue";
import Toggle from "../../../../assets/vueComponents/inputs/toggle.vue";
import { useImageStore } from "../../image/store/imageStore";
import { ref } from "vue";
const imageStore = useImageStore();

const booleanRef = ref(false);
</script>
