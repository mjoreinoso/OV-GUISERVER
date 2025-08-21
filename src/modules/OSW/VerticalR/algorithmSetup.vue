<template>
    <div class="flex flex-row w-full h-full space-x-2.5">
        <!-- Columna izquierda (40%) -->
        <div class="flex flex-col h-full w-[40%] space-y-2.5">

            <RegistrationDisplay />


            <RejectControl />

        </div>
        <!-- Columna derecha (60%) -->
        <div class="flex flex-col w-[60%] space-y-2.5">
            <div class="flex-[3]">
                <VerticalRegistrarion />
            </div>
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
</template>


<script setup lang="ts">
import VerticalRegistrarion from "./components/verticalRegistration.vue";
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
