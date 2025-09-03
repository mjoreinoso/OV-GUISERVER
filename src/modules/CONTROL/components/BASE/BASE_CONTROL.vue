<template>
  <div class="flex flex-col w-full h-full gap-4">
    <!-- Parte superior (70% alto) -->
    <div class="flex w-full h-[70%] gap-4">
      <!-- Columna izquierda (50% ancho) -->
      <div class="w-[50%] h-full">
        <BaseControl />
      </div>

      <!-- Columna derecha (50% ancho) -->
      <div class="flex flex-col w-[50%] h-full gap-2">
        <!-- Superior (LiveFeed) -->
        <div class="flex-1">
          <LiveFeed
            bottleType="BASE"
            :enabledItems="{
              bottle: true,
              resolution: false,
              groupBottle: false,
              freeze: true,
              seconds: true,
              save: true
            }"
          />
        </div>
      </div>
    </div>

    <!-- Parte inferior (OverallStatistics, 30% alto) -->
    <div class="w-full h-[30%]">
      <RejectControl />
    </div>
  </div>
</template>



<script setup lang="ts">
import LiveFeed from "@/assets/vueComponents/camera/liveFeed.vue";
import RejectControl from "./components/rejectControl.vue";
import BaseControl from "./components/baseControl.vue";

</script>
