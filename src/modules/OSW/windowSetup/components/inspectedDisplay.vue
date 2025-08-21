<template>
        <div class="flex flex-col border-2 p-2.5 rounded-xl text-[0.95vw] justify-between">
            <div class="flex justify-between items-center space-x-3">
                <span >Inspected</span>
                <Toggle v-model="windowStore.inspected_enable" @update:model-value="windowStore.emitWindowConfig()"/>
            </div>
            <div class="flex justify-between items-center space-x-3">
                <span>Displayed</span>
                <Toggle v-model="windowStore.displayed_enable" @update:model-value="windowStore.emitWindowConfig()"/>
            </div>
        </div>

</template>

<script setup lang="ts">
import Toggle from '../../../../assets/vueComponents/inputs/toggle.vue';
import { useWindowStore } from '../store/windowStore';

const windowStore = useWindowStore();

</script>