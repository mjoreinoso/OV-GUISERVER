<template>
    <div class="flex flex-row w-full h-full space-x-2.5">
        <!-- Parte superior -->
        <div class="flex flex-col w-[40%] h-full space-y-2.5">
            <RegistrationDisplay />
            <RejectControl />
        </div>

        <div class="flex flex-col items-stretch w-[60%] gap-2.5">
            <!-- Columna izquierda -->
            <div class="">
                <HorizontalRegistrarion />
            </div>

            <!-- Columna derecha -->
            <div class="h-full">
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
import RegistrationDisplay from "./components/registrationDisplay.vue";

const algorithmStore = useAlgorithmStore();

onMounted(() => {
    algorithmStore.fetchAlgorithmConfig(0, 0);
});


</script>
