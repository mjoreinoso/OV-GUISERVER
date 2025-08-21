<template>
    <div class="flex flex-col w-full h-full space-x-3">
        <!-- Parte superior -->
        <div class="flex flex-col w-[100%] space-x-3 mb-2">
            <!-- Ocupa 30% -->
            <div>
                <HorizontalRegistrarion />
            </div>
        </div>
        <div class="flex flex-row items-stretch w-full gap-2">
            <!-- Columna izquierda -->
            <div class="flex-[4] h-full">
                <RejectControl />
            </div>

            <!-- Columna derecha -->
            <div class="flex-[6] h-full">
                <LiveFeed bottleType="OSW" :enabledItems="{
                    bottle: true,
                    resolution: false,
                    groupBottle: true,
                    freeze: true,
                    seconds: true,
                    save: true
                }" />
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import HorizontalRegistrarion from "./components/horizontalRegistration.vue";
import { useAlgorithmStore } from './store/algorithmStore';
import { onMounted } from 'vue';
import RejectControl from "./components/rejectControl.vue";
import LiveFeed from "@/assets/vueComponents/camera/liveFeed.vue";

const algorithmStore = useAlgorithmStore();

onMounted(() => {
  algorithmStore.fetchAlgorithmConfig(0, 0);
});


</script>
