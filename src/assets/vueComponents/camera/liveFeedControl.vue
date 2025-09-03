<template>
  <div class="flex items-center justify-center space-x-3 rounded-xl">
    <div v-if="enabledItems.bottle" class="flex items-center justify-center w-[3.5vw] h-[3.5vw] bg-secondary rounded-xl">
      <img :src="bottleIcon" class="scale-75" alt="Bottle Icon" />
    </div>

    <div v-if="enabledItems.resolution" class="flex items-center justify-center w-[3.5vw] h-[3.5vw] bg-secondary rounded-xl">
      <img :src="resolutionIcon" class="scale-75" alt="Resolution Icon" />
    </div>

    <div
      v-if="enabledItems.groupBottle"
      class="flex flex-col items-center justify-center w-[3.5vw] h-[3.5vw] cursor-pointer bg-secondary rounded-xl"
      @click="updateBottleCount"
    >
      <img :src="bottleImage" class="transition duration-300 scale-90" alt="Bottle Icon" />
      <span class="font-semibold ">{{ displayBottleCount }}</span>
    </div>

    <div v-if="enabledItems.freeze" class="flex items-center justify-center w-[3.5vw] h-[3.5vw] bg-secondary rounded-xl">
      <img :src="freezeIcon" class="scale-75" alt="Freeze Icon" />
    </div>

    <div
      v-if="enabledItems.seconds"
      class="w-[3.5vw] h-[3.5vw] font-semibold text-[1.6vw] bg-secondary rounded-xl flex items-center justify-center cursor-pointer"
      @click="updateSeconds"
    >
      {{ seconds }}
    </div>

    <div v-if="enabledItems.save" class="flex items-center justify-center w-[3.5vw] h-[3.5vw] bg-secondary rounded-xl">
      <img :src="saveIcon" class="scale-75" alt="Save Icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import bottleIconIR from '../../screenIcons/liveFeedIcons/IR_Residual_Detection.svg';
import bottleIconRF from '../../screenIcons/liveFeedIcons/RF_Residual_Detection.svg';
import bottleIconOSW from '../../screenIcons/liveFeedIcons/OSW.svg';
import bottleIconBase from '../../screenIcons/liveFeedIcons/Base.svg';
import bottleIconFinish from '../../screenIcons/liveFeedIcons/Finish.svg';

import resolutionIcon from '../../screenIcons/liveFeedIcons/resolution.svg';
import saveIcon from '../../screenIcons/liveFeedIcons/save.svg';
import freezeIcon from '../../screenIcons/liveFeedIcons/freeze.svg';
import GroupBottle1 from '../../screenIcons/liveFeedIcons/GroupBottle1_fr.svg';
import GroupBottle2 from '../../screenIcons/liveFeedIcons/GroupBottle2_fr.svg';
import GroupBottle3 from '../../screenIcons/liveFeedIcons/GroupBottle3_fr.svg';
import GroupBottle4 from '../../screenIcons/liveFeedIcons/GroupBottle4_fr.svg';

const seconds = ref(0);
const bottleCount = ref(1);

function updateBottleCount() {
  bottleCount.value = bottleCount.value < 4 ? bottleCount.value + 1 : 1;
}

const displayBottleCount = computed(() => {
  return bottleCount.value === 4 ? "1, 2, 3" : bottleCount.value.toString();
});

const steps = [0, 2, 10, 120];
let index = 0;

function updateSeconds() {
  index = (index + 1) % steps.length; // avanza en la lista y vuelve al inicio
  seconds.value = steps[index];
}

const bottleImage = computed(() => {
  switch (bottleCount.value) {
    case 1: return GroupBottle1;
    case 2: return GroupBottle2;
    case 3: return GroupBottle3;
    case 4: return GroupBottle4;
    default: return GroupBottle1;
  }
});

const props = withDefaults(defineProps<{
  enabledItems?: {
    bottle?: boolean;
    resolution?: boolean;
    groupBottle?: boolean;
    freeze?: boolean;
    seconds?: boolean;
    save?: boolean;
  };
  bottleType?: 'IR' | 'RF' | 'OSW' | 'VR' | 'BASE' | 'FN';
}>(), {
  enabledItems: () => ({
    bottle: true,
    resolution: true,
    groupBottle: true,
    freeze: true,
    seconds: true,
    save: true
  }),
  bottleType: 'OSW'
});

const bottleIcon = computed(() => {
  switch (props.bottleType) {
    case 'IR': return bottleIconIR;
    case 'RF': return bottleIconRF;
    case 'BASE': return bottleIconBase;
    case 'FN': return bottleIconFinish;
    default: return bottleIconOSW;
  }
});

const { enabledItems } = props;
</script>