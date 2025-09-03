<template>
  <div class="flex h-full">
    <div class="flex flex-col p-4 border-2 rounded-xl grow">

      <!-- Header con título y toggle en una sola columna -->
      <div class="sticky top-0 z-20 grid grid-cols-1 mb-2 text-sm bg-primary">
        <!-- Columna única -->
        <div class="flex flex-col items-start gap-2">
          <!-- Título -->
          <h2 class="mb-2 text-base font-bold">Status & Sensitivity</h2>
        </div>
      </div>

      <!-- Contenedor con scroll -->
      <div class="pr-1 max-h-[70vh] mt-8">
        <!-- Grid con encabezados -->
        <div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-2 text-[0.8vw] min-w-[40vw]
          sticky top-0 z-10 border-b mb-4 bg-primary font-bold justify-center items-center text-center">
          <!-- Toggle debajo -->
          <div class="flex items-center gap-1 mb-2">
            <Toggle v-model="enabled" />
            <span>Reject Enable</span>
          </div>
          <span>Sensitivity</span>
          <span>Light</span>
          <span>Detection</span>
          <span>Last</span>
        </div>

        <!-- Grid con filas dinámicas -->
        <div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-2 text-[0.8vw] min-w-[40vw] pb-4">
          <template v-for="row in rows" :key="row.name">
            <!-- Columna 1: toggle + label -->
            <div class="flex items-center gap-1">
              <Toggle v-model="row.toggle" :name="row.name" />
              <span class="truncate">{{ row.label }}</span>
            </div>

            <!-- Columna 2: sensibilidad -->
            <div class="flex justify-center">
              <NumberInput v-model="row.sensitivity" />
            </div>

            <!-- Columna 3: Light Level -->
            <div class="flex justify-center">
              <ValueViewer :value="row.light" />
            </div>

            <!-- Columna 4: Detection Level Current -->
            <div class="flex justify-center">
              <ValueViewer :value="row.current" />
            </div>

            <!-- Columna 5: Last Detected -->
            <div class="flex justify-center">
              <ValueViewer :value="row.last" />
            </div>
          </template>
        </div>

        <!-- Grid 2 con filas dinámicas -->
        <div class="pt-8 border-t">
          <!-- Grid con encabezados -->
          <div class="mt-4 grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-2 text-[0.8vw] min-w-[40vw]
            sticky top-0 z-10 border-b mb-3 bg-primary font-bold justify-center items-center text-center">
            <span></span>
            <span className="mb-2">Lower Limit</span>
            <span className="mb-2">Upper Limit</span>
            <span className="mb-2">Detection</span>
            <span className="mb-2">Last</span>
          </div>

          <!-- Grid con la fila -->
          <div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-2 text-[0.8vw] min-w-[40vw]">
            <!-- Columna 1: toggle + label -->
            <div class="flex items-center gap-1">
              <Toggle v-model="enabled" />
              <span>Plug/Color</span>
            </div>

            <!-- Columna 2: Lower Limit -->
            <div class="flex items-center gap-1">
              <NumberInput v-model="lowerLimit" />
            </div>

            <!-- Columna 3: Upper Limit -->
            <div class="flex items-center gap-1">
              <NumberInput v-model="upperLimit" />
            </div>

            <!-- Columna 4: Detection Level Current -->
            <div class="flex items-center gap-1">
              <ValueViewer />
            </div>

            <!-- Columna 5: Last Detected -->
            <div class="flex items-center gap-1">
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
  { name: "center", label: "Center", toggle: true, sensitivity: 110 },
  { name: "innerRim", label: "Inner Rim", toggle: false, sensitivity: 50, },
  { name: "innerMidRim", label: "Inner Mid Rim", toggle: false, sensitivity: 110, },
  { name: "middleRim", label: "Middle Rim", toggle: true, sensitivity: 90 },
  { name: "outerMidRim", label: "Outer Mid Rim", toggle: false, sensitivity: 100,  },
  { name: "outerRim", label: "Outer Rim", toggle: true, sensitivity: 100,  },
]);

// Límites
const lowerLimit = ref<number | undefined>(500);
const upperLimit = ref<number | undefined>(4000);
</script>
