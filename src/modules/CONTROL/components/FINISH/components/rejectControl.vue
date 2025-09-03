<template>
    <div class="flex flex-col w-full h-full p-2 overflow-y-auto border-2 rounded-xl">
        <!-- Título + botón -->
        <div class="flex items-center justify-between px-4 mt-2 mb-6">
            <div class="font-bold text-center">Overall Statistics</div>

            <button class="px-2 py-1 text-sm font-semibold text-white rounded shadow bg-secondary hover:bg-blue-300">
                Reset Counters
            </button>
        </div>

        <!-- Grid -->
        <div class="grid flex-grow gap-x-[2px] gap-y-1 text-[0.8vw]"
            :style="`grid-template-columns: minmax(70px, auto) repeat(${items.length}, minmax(70px, 1fr)); grid-auto-rows: minmax(32px, auto);`">
            <!-- Celda vacía esquina superior izquierda -->
            <div></div>

            <!-- Encabezados -->
            <div v-for="item in items" :key="item" class="flex items-center justify-center px-1 font-bold text-center">
                {{ item }}
            </div>

            <!-- Filas -->
            <div v-for="header in headers" :key="header" class="contents">
                <!-- Header lateral -->
                <div class="flex items-center justify-center px-1 font-bold text-center">
                    {{ header }}
                </div>

                <!-- Valores dinámicos -->
                <valueViewer v-for="item in items" :key="`${header}-${item}`"
                    class="flex items-center justify-center px-1" />
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import valueViewer from '../../../../../assets/vueComponents/inputs/valueViewer.vue'

// Lista dinámica de labels horizontales (X)
const items = [
    'Total Bottles',
    'Good Bottles',
    'Finish Rejects',
    'Locator',
    'Tracking',
    'Lane A',
    'Lane B',
    'Lane C',
    'Lane D',
    'Lane E',
    'Light Level'
];

// Lista de headers verticales (Y)
const headers = ['Temporary', 'Period', '%']
</script>
