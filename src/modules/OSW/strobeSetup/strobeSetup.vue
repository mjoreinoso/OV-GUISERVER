<template>
    <div class="flex flex-row h-full space-x-3">
        <ledStrobes class="w-[35%]" />
        <LiveFeed :enabledItems="{
          bottle: true,
          resolution: false,
          groupBottle: true,
          freeze: true,
          seconds: true,
          save: true
          }" bottleType="OSW" />
    </div>
</template>

<script setup lang="ts">
import LiveFeed from "@/assets/vueComponents/camera/liveFeed.vue";
import ledStrobes from './components/ledStrobes.vue';
import { useStrobeStore } from './store/strobeStore';
import { onMounted } from 'vue';

const strobeStore = useStrobeStore();

onMounted(async () => {
  await strobeStore.fetchStrobeData();
  
});
</script>