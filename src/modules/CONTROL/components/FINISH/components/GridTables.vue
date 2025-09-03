<template>
  <div>
    <!-- Encabezados -->
    <div
      class="grid gap-2 text-[0.8vw] min-w-[40vw] sticky top-0 z-10 border-b mb-3 bg-primary font-bold text-center items-center"
      :class="gridCols"
    >
      <template v-for="(header, index) in headers" :key="index">
        <span>{{ header }}</span>
      </template>
    </div>

    <!-- Filas -->
    <div
      v-for="row in rows"
      :key="row.name"
      class="grid gap-2 text-[0.8vw] min-w-[40vw] mb-2 items-center"
      :class="gridCols"
    >
      <!-- Sensitivity -->
      <template v-if="type === 'sensitivity'">
        <div class="flex items-center gap-1">
          <Toggle v-model="row.toggle" :name="row.name" />
          <span>{{ row.label }}</span>
        </div>
        <div class="flex justify-center">
          <NumberInput v-model="row.sensitivity" />
        </div>
        <div class="flex justify-center">
          <ValueViewer />
        </div>
      </template>

      <!-- Limits -->
      <template v-else-if="type === 'limits'">
        <div class="flex items-center gap-1">
          <Toggle v-model="enabled" :name="row.name" />
          <span>{{ row.label }}</span>
        </div>
        <div class="flex justify-center">
          <NumberInput v-model="row.lowerLimit" />
        </div>
        <div class="flex justify-center">
          <NumberInput v-model="row.upperLimit" />
        </div>
        <div class="flex justify-center">
          <ValueViewer />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import NumberInput from "../../../../../assets/vueComponents/inputs/numberInput.vue";
import Toggle from "../../../../../assets/vueComponents/inputs/toggle.vue";
import ValueViewer from "../../../../../assets/vueComponents/inputs/valueViewer.vue";

interface Row {
  name: string;
  label: string;
  toggle: boolean;
  sensitivity?: number;
  lowerLimit?: number;
  upperLimit?: number;
}

const props = defineProps<{
  headers: string[];
  rows: Row[];
  type: "sensitivity" | "limits";
  enabled?: boolean;
}>();

const emit = defineEmits(["update:enabled"]);

const enabled = computed({
  get: () => props.enabled,
  set: (val) => emit("update:enabled", val),
});

const gridCols = computed(() => {
  return props.type === "sensitivity"
    ? "grid-cols-[1.5fr_1fr_0.8fr]"
    : "grid-cols-[0.8fr_0.9fr_1.2fr_0.95fr]";
});
</script>