<template>
    <div class="border-2 p-2.5 rounded-xl text-[0.95vw] grid grid-cols-3 gap-x-4 gap-y-2">
        <div class="flex justify-between items-center space-x-3">
            <span>Window Number</span>
            <numberInput v-model="windowIdDisplay" />
        </div>
        <div class="flex justify-between items-center space-x-3">
            <span>Horizontal Offset</span>
            <numberInput v-model="windowStore.horizontal_offset" @update:model-value="windowStore.emitWindowConfig()" />
        </div>
        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Vertical Position</span>
            <numberInput v-model="windowStore.vertical_position" @update:model-value="windowStore.emitWindowConfig()" />
        </div>
        <div class="flex justify-between items-center space-x-3">
            <span>Window Height</span>
            <numberInput v-model="windowStore.window_height" @update:model-value="windowStore.emitWindowConfig()" />
        </div>
        <div class="flex justify-between items-center space-x-3">
            <span>Top Width</span>
            <numberInput v-model="windowStore.top_width" @update:model-value="windowStore.emitWindowConfig()" />
        </div>
        <!-- Window ID -->


        <div class="flex justify-between items-center">
            <span class="w-[9vw]">Bottom Width</span>
            <numberInput v-model="windowStore.bottom_width" @update:model-value="windowStore.emitWindowConfig()" />
        </div>
    </div>
</template>

<script setup lang="ts">
import numberInput from '../../../../assets/vueComponents/inputs/numberInput.vue';
import { useWindowStore } from '../store/windowStore';
import { computed, watch } from 'vue';

const windowStore = useWindowStore();

const windowIdDisplay = computed({
    get: () => windowStore.window_id + 1,
    set: (val: number) => {
        windowStore.window_id = Math.max(0, Math.min(14, val - 1));
    }
});

watch(
    () => [windowStore.window_id],
    ([newWindowId]) => {
        if (newWindowId !== null && newWindowId !== undefined) {
            windowStore.fetchWindowSetup(newWindowId);
        }
    }
);

</script>