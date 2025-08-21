<template>
    <!-- Columna 1 -->
    <div class="flex flex-col space-y-2.5 text-[0.95vw] border-2 p-2.5 rounded-xl">
        <div class="flex items-center justify-between">
            <span>Registration Window Outline Display</span>
            <Toggle v-model="verticalStore.registration_v_display" />
        </div>
        <div class="flex items-center justify-between"> <span>Suppress Rejects on Registration
                Failure</span>
            <Toggle v-model="verticalStore.supress_reject_v" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Toggle from "../../../../assets/vueComponents/inputs/toggle.vue";
import { useVerticalStore } from "../store/verticalStore";

const verticalStore = useVerticalStore();
</script>