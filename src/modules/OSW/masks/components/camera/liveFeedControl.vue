<template>
    <div class="rounded-xl flex items-center justify-center space-x-3">
        <div class="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
            <img :src="bottleIcon" class="scale-75" alt="Bottle Icon">
        </div>
        <div class="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
            <img :src="resolutionIcon" class="scale-75" alt="Resolution Icon">
        </div>
        <div class="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
            3
        </div>
        <div class="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
            <img :src="freezeIcon" class="scale-75" alt="Freeze Icon">
        </div>
        <div class="w-16 h-16 font-semibold text-[1.6vw] bg-secondary rounded-xl flex items-center justify-center cursor-pointer" @click="updateSeconds">
            {{ seconds }}
        </div>
        <div class="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
            <img :src="saveIcon" class="scale-75" alt="Save Icon">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import bottleIcon from '../../../../../assets/screenIcons/liveFeedIcons/bottle.svg';
import resolutionIcon from '../../../../../assets/screenIcons/liveFeedIcons/resolution.svg';
import saveIcon from '../../../../../assets/screenIcons/liveFeedIcons/save.svg';
import freezeIcon from '../../../../../assets/screenIcons/liveFeedIcons/freeze.svg';

const seconds = ref(0);

function updateSeconds() {
    seconds.value += 10;
    if (seconds.value >= 60) {
        seconds.value = 0;
    }
}

</script>