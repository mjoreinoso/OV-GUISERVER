<template>
  <div class="bg-primary h-full w-full rounded-b-xl p-3">
    <component :is="currentComponent" v-if="currentComponent" />
    <div v-else class="text-white text-center mt-10 text-xl">Select a screen from the sidebar</div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSidebarStore } from './sidebar/store/sidebarStore'
import type { Component } from 'vue'

import IR_RLD from '@/modules/RLD/components/IR_RLD/IR_RLD.vue'
import StrobeSetup from '../modules/OSW/strobeSetuo/strobeSetup.vue'
import maskSetup from '../modules/OSW/masks/maskSetup.vue'
import imageSetup from '../modules/OSW/image/imageSetup.vue'

const sidebarStore = useSidebarStore()

const screenMap: Record<string, Component> = {
  ir: IR_RLD,
  image: imageSetup,
  strobeSetup: StrobeSetup,
  masks: maskSetup
}

const currentComponent = computed(() => screenMap[sidebarStore.currentScreen] || null)

</script>
