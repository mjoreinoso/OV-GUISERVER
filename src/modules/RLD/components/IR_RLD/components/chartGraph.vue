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

// Lógica de actualización progresiva
watch(
  () => irStore.irArray,
  (newIR) => {
    if (!newIR.length) return

    const ir = newIR[0]?.[0]
    const comp = irStore.compArray[0]?.[0]
    const avg = irStore.avgArray[0]?.[0]
    const irTot = irStore.irTotArray[0]?.[0]

    if (
      ir !== undefined &&
      comp !== undefined &&
      avg !== undefined &&
      irTot !== undefined
    ) {
      const lastIndex = irData.value.length - 1
      const shouldAdd =
        irData.value[lastIndex] !== ir ||
        compData.value[lastIndex] !== comp ||
        avgData.value[lastIndex] !== avg ||
        irTotData.value[lastIndex] !== irTot

      if (shouldAdd) {
        irData.value.push(ir)
        compData.value.push(comp)
        avgData.value.push(avg)
        irTotData.value.push(irTot)
        labels.value.push(`${time++}s`)

        // Limitar longitud máxima si se desea
        const MAX_POINTS = 60
        if (irData.value.length > MAX_POINTS) {
          irData.value.shift()
          compData.value.shift()
          avgData.value.shift()
          irTotData.value.shift()
          labels.value.shift()
        }
      }
    }
  },
  { deep: true }
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
