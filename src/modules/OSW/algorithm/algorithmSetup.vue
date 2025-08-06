<template>
    <div class="flex flex-col w-full h-full space-y-3">
        <div class="w-full flex flex-row space-x-3">
            <windowControl />
            <rejectControl />
        </div>
        <div class="flex flex-row w-full justify-between">
            <div class="max-h-[73.5vh] overflow-y-auto scroll-left w-[25%]">
                <phase1 />
                <phase2 />
                <phase3 />
            </div>
            <div class="w-[75%]">
                <div class="flex flex-row space-x-3">
                    <gradientDetectorSetup />
                    <backgroundNormalization />
                    <detectFilter />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import windowControl from './components/windowControl.vue';
import rejectControl from './components/rejectControl.vue';
import gradientDetectorSetup from './components/gradientDetectorSetup.vue';
import backgroundNormalization from './components/backgroundNormalization.vue';
import detectFilter from './components/detectFilter.vue';
import phase1 from './components/viewRejects/phase1.vue';
import phase2 from './components/viewRejects/phase2.vue';
import phase3 from './components/viewRejects/phase3.vue';
</script>
