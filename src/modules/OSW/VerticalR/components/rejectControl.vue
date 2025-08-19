<template>
    <div class="p-4 border-2 rounded-xl">
        <!-- Encabezados -->
        <div class="grid grid-cols-4 gap-4">
            <div></div>
            <div class="font-bold text-center">Phase 1</div>
            <div class="font-bold text-center">Phase 2</div>
            <div class="font-bold text-center">Phase 3</div>
        </div>
        <!-- Línea separadora -->
        <div class="w-full h-[1px] bg-white my-2"></div>
        <!-- Encabezados -->
        <div class="grid grid-cols-4 gap-4 mb-4">
            <div class="font-bold text-start">View 1</div>
        </div>

        <!-- View 1 -->
        <div class="grid grid-cols-4 gap-4 mb-6">
            <div class="flex flex-col space-y-6">
                <div>True Threshold</div>
                <div>Correlation Fit</div>
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="484" />
                <valueViewer value="2004" />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="485" />
                <valueViewer value="914" />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="485" />
                <valueViewer value="863" />
            </div>
        </div>

        <!-- Línea separadora -->
        <div class="w-full h-[1px] bg-white my-2"></div>

        <!-- Encabezados -->
        <div class="grid grid-cols-4 gap-4 mb-4">
            <div class="font-bold text-start">View 2</div>
        </div>

        <!-- View 2 -->
        <div class="grid grid-cols-4 gap-4 mb-6">
            <div class="flex flex-col space-y-6">
                <div>True Threshold</div>
                <div>Correlation Fit</div>
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="507" />
                <valueViewer value="2423" />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="505" />
                <valueViewer value="2231" />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="507" />
                <valueViewer value="1834" />
            </div>
        </div>

        <!-- Línea separadora -->
<div class="w-full h-[1px] bg-white my-2"></div>
        <!-- Encabezados -->
        <div class="grid grid-cols-4 gap-4 mb-4">
            <div class="font-bold text-start">View 3</div>
        </div>
        <!-- View 3 -->
        <div class="grid grid-cols-4 gap-4 mb-6">
            <div class="flex flex-col space-y-6">
                <div>True Threshold</div>
                <div>Correlation Fit</div>
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="484" />
                <valueViewer value="2252" />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="480" />
                <valueViewer value="650" />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="478" />
                <valueViewer value="2393" />
            </div>
        </div>

        <!-- Línea separadora -->
<div class="w-full h-[1px] bg-white my-2"></div>
        <!-- Encabezados -->
        <div class="grid grid-cols-4 gap-4 mb-4">
            <div class="font-bold text-start">View 4</div>
        </div>
        <!-- View 4 -->
        <div class="grid grid-cols-4 gap-4">
            <div class="flex flex-col space-y-6">
                <div>True Threshold</div>
                <div>Correlation Fit</div>
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="505" />
                <valueViewer value="2440" />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="500" />
                <valueViewer value="1964" />
            </div>
            <div class="flex flex-col space-y-2">
                <valueViewer value="496" />
                <valueViewer value="2457" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import valueViewer from '../../../../assets/vueComponents/inputs/valueViewer.vue';
</script>
