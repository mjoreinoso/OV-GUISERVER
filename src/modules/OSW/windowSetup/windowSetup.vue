<template>
    <div class="flex flex-col h-full space-y-2.5">
        <div class="flex flex-row space-x-2.5">
            <div class="flex flex-row w-[40%] space-x-2.5">
                <InspectionControl />
                <InspectedDisplay />
            </div>
            <WindowControl class="w-[60%]" />
        </div>
        <div class="flex flex-row h-full space-x-2.5">
            <div class="w-[40%] rounded-xl grow flex flex-col space-y-2.5">
                <rejectControl />
            </div>
            <div class="w-[60%]">
                <LiveFeed :enabledItems="{
                    bottle: true,
                    resolution: false,
                    groupBottle: true,
                    freeze: true,
                    seconds: true,
                    save: true
                }" bottleType="OSW" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import rejectControl from './components/rejectControl.vue';
import LiveFeed from "@/assets/vueComponents/camera/liveFeed.vue";
import { useWindowStore } from './store/windowStore';
import WindowControl from './components/windowControl.vue';
import InspectedDisplay from './components/inspectedDisplay.vue';
import InspectionControl from './components/inspectionControl.vue';

const windowStore = useWindowStore();

onMounted(() => {
    windowStore.fetchWindowSetup(0);
});

</script>
