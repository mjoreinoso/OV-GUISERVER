<template>
  <Line :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
} from 'chart.js'
import { ref, watch, computed } from 'vue'
import { useIRStore } from '../store/IRStore'

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
)

// Pinia store
const irStore = useIRStore()

// Datos reactivos locales
const irData = ref<number[]>([])
const compData = ref<number[]>([])
const avgData = ref<number[]>([])
const irTotData = ref<number[]>([])
const labels = ref<string[]>([])
let time = 0

// Lógica de actualización con debounce y comparación
let lastValues = {
  ir: null as number | null,
  comp: null as number | null,
  avg: null as number | null,
  irTot: null as number | null
}

let timeout: ReturnType<typeof setTimeout> | null = null

watch(
  () => irStore.irArray,
  () => {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      const ir = irStore.irArray[0]
      const comp = irStore.compArray[0]
      const avg = irStore.avgArray[0]
      const irTot = irStore.irTotArray[0]

      if (
        ir !== lastValues.ir ||
        comp !== lastValues.comp ||
        avg !== lastValues.avg ||
        irTot !== lastValues.irTot
      ) {
        irData.value.push(ir)
        compData.value.push(comp)
        avgData.value.push(avg)
        irTotData.value.push(irTot)
        labels.value.push(`${time++}s`)

        lastValues = { ir, comp, avg, irTot }

        const MAX = 60
        if (irData.value.length > MAX) {
          irData.value.shift()
          compData.value.shift()
          avgData.value.shift()
          irTotData.value.shift()
          labels.value.shift()
        }
      }
    }, 50)
  },
  { flush: 'post' }
)

// Datos para la gráfica
const data = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      label: 'IR',
      data: irData.value,
      borderColor: '#FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      tension: 0.3
    },
    {
      label: 'COMP',
      data: compData.value,
      borderColor: '#F87171',
      backgroundColor: 'rgba(248, 113, 113, 0.1)',
      tension: 0.3
    },
    {
      label: 'Average',
      data: avgData.value,
      borderColor: '#60A5FA',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      tension: 0.3
    },
    {
      label: 'IR Total',
      data: irTotData.value,
      borderColor: '#34D399',
      backgroundColor: 'rgba(52, 211, 153, 0.1)',
      tension: 0.3
    },
    {
      label: 'Threshold',
      data: Array(labels.value.length).fill(10), // puedes ajustar según lógica
      borderColor: '#FBBF24',
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      borderDash: [5, 5],
      tension: 0.3
    }
  ]
}))

// Opciones de la gráfica
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#FFFFFF',
        font: {
          size: 16
        }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Time (s)',
        color: '#FFFFFF',
        font: {
          size: 16,
          weight: 'bold' as const
        }
      },
      ticks: {
        color: '#FFFFFF',
        font: {
          size: 14
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Value',
        color: '#FFFFFF',
        font: {
          size: 16,
          weight: 'bold' as const
        }
      },
      ticks: {
        color: '#FFFFFF',
        font: {
          size: 14
        }
      }
    }
  }
}
</script>
