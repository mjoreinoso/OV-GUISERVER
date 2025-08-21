<template>
    <!-- Columna 1 -->
    <div class="flex flex-row space-x-2.5 text-[0.95vw] border-2 p-2.5 rounded-xl">
        <div class="flex items-center justify-between">
            <span>Registration Window Outline Display</span>
            <Toggle v-model="localToggle" />
        </div>
        <div class="flex items-center justify-between"> <span>Suppress Rejects on Registration
                Failure</span>
            <Toggle v-model="localToggle" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Toggle from "../../../../assets/vueComponents/inputs/toggle.vue";

const localToggle = ref(false);
</script>