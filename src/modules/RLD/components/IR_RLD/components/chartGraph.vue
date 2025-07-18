<template>
  <Line ref="chartRef" :data="chartData" :options="options" />
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
import { ref, onMounted } from 'vue'
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

// Access store
const irStore = useIRStore()
const { irArray, compArray, avgArray, irTotArray } = storeToRefs(irStore)

// Chart reference
const chartRef = ref()

// Data object
const chartData = ref({
  labels: [] as string[],
  datasets: [
    {
      label: 'IR',
      data: [] as number[],
      borderColor: '#FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      tension: 0.3
    },
    {
      label: 'COMP',
      data: [] as number[],
      borderColor: '#F87171',
      backgroundColor: 'rgba(248, 113, 113, 0.1)',
      tension: 0.3
    },
    {
      label: 'Average',
      data: [] as number[],
      borderColor: '#60A5FA',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      tension: 0.3
    },
    {
      label: 'IR Total',
      data: [] as number[],
      borderColor: '#34D399',
      backgroundColor: 'rgba(52, 211, 153, 0.1)',
      tension: 0.3
    },
    {
      label: 'Threshold',
      data: [] as number[],
      borderColor: '#FBBF24',
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      borderDash: [5, 5],
      tension: 0.3
    }
  ]
})

const MAX_POINTS = 60

// Opciones de la gráfica
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#FFFFFF',
        font: { size: 16 }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Tiempo',
        color: '#FFFFFF',
        font: { size: 16, weight: 'bold' as const }
      },
      ticks: {
        color: '#FFFFFF',
        font: { size: 14 }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Valor',
        color: '#FFFFFF',
        font: { size: 16, weight: 'bold' as const }
      },
      ticks: {
        color: '#FFFFFF',
        font: { size: 14 }
      }
    }
  }
}

// Actualización en tiempo real
onMounted(() => {
  setInterval(() => {
    const chart = chartRef.value?.chart
    if (!chart) return

    const ir = irArray.value[0]
    const comp = compArray.value[0]
    const avg = avgArray.value[0]
    const irTot = irTotArray.value[0]
    const now = new Date().toLocaleTimeString()

    // push → nuevo dato a la derecha
    chartData.value.labels.push(now)
    chartData.value.datasets[0].data.push(ir)
    chartData.value.datasets[1].data.push(comp)
    chartData.value.datasets[2].data.push(avg)
    chartData.value.datasets[3].data.push(irTot)
    chartData.value.datasets[4].data.push(10)

    if (chartData.value.labels.length > MAX_POINTS) {
      chartData.value.labels.shift()
      chartData.value.datasets.forEach(ds => ds.data.shift())
    }

    chart.update('none') // sin animación
  }, 300)
})
</script>
