<template>
    <div class="flex flex-row w-full h-full space-x-3">
        <div class="w-[20%] flex flex-col space-y-3">
            <div class="space-y-2">
                <phase1 />
                <phase2 />
                <phase3 />
            </div>

        </div>
        <div class="w-[80%] space-y-3">
            <div class=" flex flex-row space-x-3">
                <div class="flex flex-row space-x-3">
                    <temporaryRejects class="w-[18%]" />
                    <windowControl />
                    <rejectControl />

                </div>
            </div>
            <div class="flex flex-row w-full justify-between gap-x-3">
                <div class="flex items-center justify-center border-2 rounded-xl w-[60%]">
                    Live Feed
                </div>
                <div class="w-[40%]">
                    <div class="flex flex-col space-y-3 grow">
                        <gradientDetectorSetup />
                        <backgroundNormalization />
                        <detectFilter />
                    </div>
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
</script>
