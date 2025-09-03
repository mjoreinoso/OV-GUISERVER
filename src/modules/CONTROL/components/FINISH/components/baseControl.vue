<template>
  <div class="flex h-full">
    <div class="flex flex-col p-4 border-2 rounded-xl grow">
      
      <!-- Header -->
      <div class="sticky top-0 z-20 text-sm bg-primary">
        <h2 class="mb-2 text-base font-bold">Status & Sensitivity</h2>
      </div>

      <!-- Contenedor con scroll -->
      <div class="pr-1 overflow-y-auto max-h-[70vh] space-y-8">
        
        <!-- Tabla Sensitivity -->
        <GridTable
          :headers="['Finish Reject Enable', 'Sensitivity', 'Detection']"
          :rows="rows"
          type="sensitivity"
          v-model:enabled="enabled"
        />

        <!-- Tabla Limits -->
        <GridTable
          :headers="['', 'Lower Limit', 'Upper Limit', 'Detection']"
          :rows="limitRows"
          type="limits"
          v-model:enabled="enabled"
        />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GridTable from "./GridTables.vue";

const enabled = ref(false);

interface Row {
  name: string;
  label: string;
  toggle: boolean;
  sensitivity?: number;
  lowerLimit?: number;
  upperLimit?: number;
  light?: number;
  current?: number;
  last?: number;
  currentAlert?: boolean;
  lastAlert?: boolean;
}

const rows = ref<Row[]>([
  { name: "trackerLocator", label: "Tracker Locator", toggle: true, sensitivity: 110, light: 133, current: 504, last: 504 },
  { name: "trackingMinLength", label: "Tracking Minimum Length", toggle: false, sensitivity: 50 },
  { name: "laneAInspection", label: "Lane A Inspection", toggle: false, sensitivity: 110 },
  { name: "laneBInspection", label: "Lane B Inspection", toggle: true, sensitivity: 90, light: 132, current: 77, last: 77 },
  { name: "laneCInspection", label: "Lane C Inspection", toggle: false, sensitivity: 100 },
  { name: "laneDInspection", label: "Lane D Inspection", toggle: true, sensitivity: 100 },
  { name: "laneEInspection", label: "Lane E Inspection", toggle: false, current: 131, last: 131 },
]);

// Límites
const limitRows = ref<Row[]>([
  { name: "lightLevel", label: "Light level", toggle: true, lowerLimit: 500, upperLimit: 4000 }
]);
</script>
