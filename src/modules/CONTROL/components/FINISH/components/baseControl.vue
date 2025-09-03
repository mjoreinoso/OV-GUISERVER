<template>
  <div class="flex h-full">
    <div class="flex flex-col p-4 border-2 rounded-xl grow">

      <!-- Header con título y toggle en una sola columna -->
      <div class="sticky top-0 z-20 grid grid-cols-1 text-sm bg-primary">
        <!-- Columna única -->
        <div class="flex flex-col items-start gap-2">
          <!-- Título -->
          <h2 class="mb-2 text-base font-bold">Status & Sensitivity</h2>
        </div>
      </div>

      <!-- Contenedor con scroll -->
      <div class="pr-1 overflow-y-auto max-h-[70vh]">
        <!-- Grid con encabezados -->
        <div class="grid grid-cols-[1.5fr_1fr_0.8fr] gap-2 text-[0.8vw] min-w-[40vw]
          sticky top-0 z-10 border-b mb-3 bg-primary font-bold justify-center items-center text-center">
                    <!-- Toggle debajo -->
          <div class="flex items-center gap-1 mb-2">
            <Toggle v-model="enabled" />
            <span>Finish Reject Enable</span>
          </div>
          <span>Sensitivity</span>
          <span>Detection</span>
        </div>

        <!-- Grid con filas dinámicas -->
        <div class="grid grid-cols-[1.5fr_1fr_0.8fr] gap-2 text-[0.8vw] min-w-[40vw] mb-2">
          <template v-for="row in rows" :key="row.name">
            <!-- Columna 1: toggle + label -->
            <div class="flex items-center gap-1">
              <Toggle v-model="row.toggle" :name="row.name" />
              <span>{{ row.label }}</span>
            </div>

            <!-- Columna 2: sensibilidad (alineada con título) -->
            <div class="flex justify-center">
              <NumberInput v-model="row.sensitivity" />
            </div>

            <!-- Columna 3: Detection (alineada con título y siempre con LED) -->
            <div class="flex items-center justify-center gap-1">
              <div class="flex items-center gap-1">
                <ValueViewer />
              </div>
            </div>
          </template>
        </div>

        <!-- Grid 2 con filas dinámicas -->
        <div class="pt-8 border-t">
          <!-- Grid con encabezados -->
          <div class="grid grid-cols-[0.8fr_0.9fr_1.2fr_0.95fr] gap-2 text-[0.8vw] min-w-[40vw]
      sticky top-0 z-10 border-b mb-4 bg-primary font-bold items-center text-center">
            <!-- Columna 1: header vacío pero con espacio reservado -->
            <div class="flex items-center justify-center mb-2">
              <span></span>
            </div>

            <!-- Columna 2 -->
            <div class="flex items-center justify-center mb-2">
              <span>Lower Limit</span>
            </div>

            <!-- Columna 3 -->
            <div class="flex items-center justify-center mb-2">
              <span>Upper Limit</span>
            </div>

            <!-- Columna 4 -->
            <div class="flex items-center justify-center mb-2">
              <span>Detection</span>
            </div>
          </div>

          <!-- Grid con la fila -->
          <div class="grid grid-cols-[0.8fr_0.9fr_1.2fr_0.95fr] gap-2 text-[0.8vw] min-w-[40vw]">
            <!-- Columna 1 -->
            <div class="flex items-center gap-1">
              <Toggle v-model="enabled" />
              <span>Light level</span>
            </div>

            <!-- Columna 2 -->
            <div class="flex items-center justify-center">
              <NumberInput v-model="lowerLimit" />
            </div>

            <!-- Columna 3 -->
            <div class="flex items-center justify-center">
              <NumberInput v-model="upperLimit" />
            </div>

            <!-- Columna 4 -->
            <div class="flex items-center justify-center">
              <ValueViewer />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import NumberInput from "../../../../../assets/vueComponents/inputs/numberInput.vue";
import Toggle from "../../../../../assets/vueComponents/inputs/toggle.vue";
import ValueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue';
const enabled = ref(false);

interface Row {
  name: string;
  label: string;
  toggle: boolean;
  sensitivity?: number;
  light?: number;
  current?: number;
  last?: number;
  currentAlert?: boolean;
  lastAlert?: boolean;
}

const rows = ref<Row[]>([
  { name: "trackerLocator", label: "Tracker Locator", toggle: true, sensitivity: 110, light: 133, current: 504, last: 504 },
  { name: "trackingMinLength", label: "Tracking Minimum Length", toggle: false, sensitivity: 50, light: 0, current: 0, last: 0 },
  { name: "laneAInspection", label: "Lane A Inspection", toggle: false, sensitivity: 110, light: 0, current: 0, last: 0 },
  { name: "laneBInspection", label: "Lane B Inspection", toggle: true, sensitivity: 90, light: 132, current: 77, last: 77 },
  { name: "laneCInspection", label: "Lane C Inspection", toggle: false, sensitivity: 100, light: 128, current: 0, last: 0 },
  { name: "laneDInspection", label: "Lane D Inspection", toggle: true, sensitivity: 100, light: 132, current: 0, last: 0 },
  { name: "laneEInspection", label: "Lane E Inspection", toggle: false, sensitivity: undefined, light: undefined, current: 131, last: 131 },
]);

// Límites
const lowerLimit = ref<number | undefined>(500);
const upperLimit = ref<number | undefined>(4000);
</script>
