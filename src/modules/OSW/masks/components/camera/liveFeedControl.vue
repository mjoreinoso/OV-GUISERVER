<template>
    <div class="flex items-center justify-center space-x-3 rounded-xl">
        <div class="flex items-center justify-center w-16 h-16 bg-secondary rounded-xl">
            <img :src="bottleIcon" class="scale-75" alt="Bottle Icon">
        </div>
        <div class="flex items-center justify-center w-16 h-16 bg-secondary rounded-xl">
            <img :src="resolutionIcon" class="scale-75" alt="Resolution Icon">
        </div>
        <div class="flex flex-col items-center justify-center w-16 h-16 cursor-pointer bg-secondary rounded-xl"
            @click="updateBottleCount">
            <img :src="bottleImage" class="transition duration-300 scale-75" alt="Bottle Icon" />
            <span class="mt-1 font-semibold">{{ bottleCount }}</span>
        </div>
        <div class="flex items-center justify-center w-16 h-16 bg-secondary rounded-xl">
            <img :src="freezeIcon" class="scale-75" alt="Freeze Icon">
        </div>
        <div class="w-16 h-16 font-semibold text-[1.6vw] bg-secondary rounded-xl flex items-center justify-center cursor-pointer"
            @click="updateSeconds">
            {{ seconds }}
        </div>
        <div class="flex items-center justify-center w-16 h-16 bg-secondary rounded-xl">
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
import GroupBottle from '../../../../../assets/screenIcons/liveFeedIcons/groupBottle.svg';
import GroupBottle1 from '../../../../../assets/screenIcons/liveFeedIcons/groupBottle_fr1.svg';
import GroupBottle2 from '../../../../../assets/screenIcons/liveFeedIcons/groupBottle_fr2.svg';
import GroupBottle3 from '../../../../../assets/screenIcons/liveFeedIcons/groupBottle_fr3.svg';
import GroupBottle4 from '../../../../../assets/screenIcons/liveFeedIcons/groupBottle_fr4.svg';

const seconds = ref(0);
const bottleCount = ref(1);

function updateBottleCount() {
    bottleCount.value = bottleCount.value < 4 ? bottleCount.value + 1 : 1;
}

function updateSeconds() {
    seconds.value += 10;
    if (seconds.value >= 60) {
        seconds.value = 0;
    }
}

import { computed as vueComputed } from 'vue';

function computed(getter: () => string) {
    return vueComputed(getter);
}

const bottleImage = computed(() => {
    switch (bottleCount.value) {
        case 1:
            return GroupBottle1;
        case 2:
            return GroupBottle2;
        case 3:
            return GroupBottle3;
        case 4:
            return GroupBottle4;
        default:
            return GroupBottle1;
    }
});

</script>