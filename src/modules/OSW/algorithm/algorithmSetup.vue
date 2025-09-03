<template>
    <div class="flex flex-row w-full h-full space-x-2.5">
        <div class="w-[15%] flex flex-col space-y-2.5 p-2 border-2 rounded-xl">
            <phase1 />
            <phase2 />
            <phase3 />

        </div>
        <div class="flex flex-col w-[83%] space-y-2.5">
            <div class="flex flex-row space-x-2.5">
                <temporaryRejects class="w-[16%]" />
                <windowControl />
                <rejectControl />
            </div>
            <div class="flex flex-row justify-between w-full gap-x-2.5 grow">
                <div class="flex flex-col items-center justify-centerl w-[60%]">
                    <LiveFeed bottleType="OSW" :enabledItems="{
                        bottle: true,
                        resolution: false,
                        groupBottle: true,
                        freeze: true,
                        seconds: true,
                        save: true
                    }" />
                </div>
                <div class="w-[40%] flex flex-col space-y-2.5 grow">
                    <gradientDetectorSetup />
                    <backgroundNormalization />
                    <detectFilter />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import windowControl from "./components/windowControl.vue";
import rejectControl from "./components/rejectControl.vue";
import gradientDetectorSetup from "./components/gradientDetectorSetup.vue";
import backgroundNormalization from "./components/backgroundNormalization.vue";
import detectFilter from "./components/detectFilter.vue";
import phase1 from "./components/viewRejects/phase1.vue";
import phase2 from "./components/viewRejects/phase2.vue";
import phase3 from "./components/viewRejects/phase3.vue";
import temporaryRejects from "./components/temporaryRejects.vue";
import { useAlgorithmStore } from './store/algorithmStore';
import { onMounted } from 'vue';
import LiveFeed from "@/assets/vueComponents/camera/liveFeed.vue";

const algorithmStore = useAlgorithmStore();

onMounted(() => {
  algorithmStore.fetchAlgorithmConfig(0, 0);
});


</script>
