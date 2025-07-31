<template>
    <div class="space-y-1">
        <div class="text-[1.35vw] font-bold">Spot Masking</div>
        <div class="border-2 p-3 rounded-xl flex flex-col text-[1.2vw] space-y-2">
            <div class="flex items-center space-x-2 justify-between">
                Enable
                <toggle v-model="maskStore.spot_mask_enable" />
            </div>
            <div class="flex items-center space-x-2 justify-between">
                Spot Detection Threshold
                <numberInput v-model="maskStore.spot_threshold" />
            </div>
            <div>Clear Spot Masks</div>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useMaskStore } from '../store/maskStore';
import toggle from '../../../../assets/vueComponents/inputs/toggle.vue';

const maskStore = useMaskStore();
</script>