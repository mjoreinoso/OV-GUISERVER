<template>
    <div class="p-3 text-[0.85vw] grid grid-cols-2 gap-4 rounded-xl border-2 w-[40%]">
        <div class="flex justify-between items-center">
            <titleSelects :title="'Reject Type'" :value="algorithmStore.rejection_type" :options="rejectTypeOptions"
                @update:value="val => algorithmStore.rejection_type = val" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Rejection</span>
            <Toggle v-model="algorithmStore.rejection_enable" />
        </div>
        <div class="flex justify-between items-center">
            <titleSelects :title="'Reject When'" :value="algorithmStore.rejection_when" :options="rejectWhenOptions"
                @update:value="val => algorithmStore.rejection_when = val" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Threshold</span>
            <numberInput v-model="algorithmStore.threshold" />
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import Toggle from '../../../../assets/vueComponents/inputs/toggle.vue';
import titleSelects from '../../../../assets/vueComponents/titleSelects.vue';
import { useAlgorithmStore } from '../store/algorithmStore';
import { rejectTypeOptions, rejectWhenOptions } from '../store/algorithmSelectOptions';

const algorithmStore = useAlgorithmStore();
</script>
