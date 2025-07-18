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
import { ref, computed, onMounted } from 'vue'
import { useIRStore } from '../store/IRStore'
import { storeToRefs } from 'pinia'

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title
)

const irStore = useIRStore()
const { irArray, compArray, avgArray, irTotArray } = storeToRefs(irStore)

// Buffers locales para simular desplazamiento continuo
const irBuffer = ref<number[]>([])
const compBuffer = ref<number[]>([])
const avgBuffer = ref<number[]>([])
const irTotBuffer = ref<number[]>([])
const labelsBuffer = ref<string[]>([])
let counter = 0
const MAX_POINTS = 60

// Cada 300ms, agregar un punto nuevo desde irArray[0]
onMounted(() => {
  setInterval(() => {
    const ir = irArray.value[0]
    const comp = compArray.value[0]
    const avg = avgArray.value[0]
    const irTot = irTotArray.value[0]

    // Evitar agregar valores vacíos
    if (
      ir === undefined || comp === undefined ||
      avg === undefined || irTot === undefined
    ) return

    // Agregamos al final
    irBuffer.value.push(ir)
    compBuffer.value.push(comp)
    avgBuffer.value.push(avg)
    irTotBuffer.value.push(irTot)
    labelsBuffer.value.push(`${counter++}`)

    // Limitamos tamaño de buffers
    if (irBuffer.value.length > MAX_POINTS) {
      irBuffer.value.shift()
      compBuffer.value.shift()
      avgBuffer.value.shift()
      irTotBuffer.value.shift()
      labelsBuffer.value.shift()
    }
  }, 300)
})

// Computed para la gráfica
const data = computed(() => ({
  labels: labelsBuffer.value,
  datasets: [
    {
      label: 'IR',
      data: irBuffer.value,
      borderColor: '#FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      tension: 0.3
    },
    {
      label: 'COMP',
      data: compBuffer.value,
      borderColor: '#F87171',
      backgroundColor: 'rgba(248, 113, 113, 0.1)',
      tension: 0.3
    },
    {
      label: 'Average',
      data: avgBuffer.value,
      borderColor: '#60A5FA',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      tension: 0.3
    },
    {
      label: 'IR Total',
      data: irTotBuffer.value,
      borderColor: '#34D399',
      backgroundColor: 'rgba(52, 211, 153, 0.1)',
      tension: 0.3
    },
    {
      label: 'Threshold',
      data: Array(irBuffer.value.length).fill(10),
      borderColor: '#FBBF24',
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      borderDash: [5, 5],
      tension: 0.3
    }
  ]
}))

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
        text: 'Tiempo',
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
        text: 'Valor',
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
