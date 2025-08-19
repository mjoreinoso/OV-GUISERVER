<template>
  <div class="bg-primary h-full w-full rounded-b-xl p-2.5">
    <component :is="currentComponent" v-if="currentComponent" />
    <div v-else class="mt-10 text-xl text-center text-white">Select a screen from the sidebar</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSidebarStore } from './sidebar/store/sidebarStore'
import type { Component } from 'vue'

import IR_RLD from '@/modules/RLD/components/IR_RLD/IR_RLD.vue'
import StrobeSetup from '../modules/OSW/strobeSetup/strobeSetup.vue'
import maskSetup from '../modules/OSW/masks/maskSetup.vue'
import imageSetup from '../modules/OSW/image/imageSetup.vue'
import algorithmSetup from '../modules/OSW/algorithm/algorithmSetup.vue'
import RF_RLD from '@/modules/RLD/components/RF_RLD/RF_RLD.vue'
import Vertical_R  from '../modules/OSW/VerticalR/algorithmSetup.vue'
const sidebarStore = useSidebarStore()

const screenMap: Record<string, Component> = {
  ir: IR_RLD,
  image: imageSetup,
  strobeSetup: StrobeSetup,
  masks: maskSetup,
  algorithm: algorithmSetup,
  rf: RF_RLD,
  vr: Vertical_R,
}

const currentComponent = computed(() => screenMap[sidebarStore.currentScreen] || null)

</script>
