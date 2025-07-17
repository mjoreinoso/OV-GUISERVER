<template>
  <div class="flex flex-col justify-center h-full text-[1.2vw] border-y-2">
    <!-- Inner IR Row -->
    <div class="grid grid-cols-2 gap-x-2 h-fit">
      <div class="flex flex-row justify-between p-2">
        <div class="flex flex-col justify-between">
          <div class="text-[1.2vw] text-[1.2vw] font-bold text-start w-[44mm]">LED Strobe</div>
          <div class="flex items-center h-[15mm] text-[1.2vw]">Inner IR LED Ring</div>
          <div class="flex items-center h-[15mm] text-[1.2vw]">Outer IR LED Ring</div>
          <div class="flex items-center h-[15mm] text-[1.2vw]">Gain</div>
        </div>
        <div class="space-y-5">
          <div class="text-[1.2vw] text-[1.2vw] font-bold text-center">Compensation</div>
          <numberInput />
          <numberInput />
          <numberInput />
        </div>
      </div>
      <div class="flex flex-col items-end space-y-5 p-2">
        <div class="text-[1.2vw] text-[1.2vw] font-bold text-center w-[44mm]">IR</div>
        <numberInput />
        <numberInput />
        <numberInput />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import numberInput from "../../../../../assets/vueComponents/inputs/numberInput.vue";
</script>
