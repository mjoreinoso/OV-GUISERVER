<template>
    <div class="flex flex-col w-full h-full p-4 overflow-y-auto border-2 rounded-xl">
        <!-- Header con título y botón -->
        <div class="flex items-center justify-between mb-4">
            <div class="font-bold text-start">Overall Statistics</div>

            <button class="px-3 py-1 font-semibold text-white rounded shadow text-md bg-secondary hover:bg-blue-300">
                Reset Counters
            </button>
        </div>

        <!-- Contenedor grid que ocupa todo el espacio disponible -->
        <div class="grid flex-grow text-[0.8vw] gap-x-2"
            :style="`grid-template-columns: 0.6fr repeat(${items.length}, 1fr); grid-auto-rows: 1fr;`">

            <!-- Celda vacía en esquina superior izquierda -->
            <div></div>

            <!-- Encabezados horizontales -->
            <div v-for="item in items" :key="item" class="flex items-center justify-center font-bold text-start">
                {{ item }}
            </div>

            <!-- Filas -->
            <div v-for="header in headers" :key="header" class="contents">
                <!-- Header lateral -->
                <div class="flex items-center justify-start font-bold text-center">
                    {{ header }}
                </div>

                <!-- Valores dinámicos -->
                <valueViewer v-for="item in items" :key="`${header}-${item}`"
                    class="flex items-center justify-center" />
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
    'Base Rejects',
    'Center',
    'Inner Rim',
    'Inner Mid Rim',
    'Middle Rim',
    'Outer Mid Rim',
    'Outer Rim',
    'Plug/Color'
]

// Lista de headers verticales (Y)
const headers = ['Temporary', 'Period', '%']
</script>
