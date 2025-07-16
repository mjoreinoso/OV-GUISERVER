<template>
  <div class="flex flex-col h-full text-lg border-y-2">
    <div class="grid grid-cols-2 gap-4 p-2">
      <!-- Inner IR Row -->
      <div class="flex flex-row justify-between">
        <div class="flex flex-col justify-between">
          <div class="text-xl font-bold text-start">LED Strobe Timing</div>
          <div class="flex items-center h-[15mm]">Inner IR LED Ring</div>
          <div class="flex items-center h-[15mm]">Outer IR LED Ring</div>
        </div>

        <div class="space-y-3">
          <div class="text-xl font-bold text-center">Delay</div>
            <numberInput />
            <numberInput />
        </div>
      </div>

      <!-- Outer IR Row -->

      <div class="flex flex-col items-end space-y-3">
        <div class="text-xl font-bold text-center w-[44mm]">On Time</div>
          <numberInput />
          <numberInput />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import numberInput from "../../../../../assets/vueComponents/inputs/numberInput.vue";
</script>
