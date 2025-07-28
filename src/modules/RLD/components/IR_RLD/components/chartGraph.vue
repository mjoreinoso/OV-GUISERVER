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
import { computed } from 'vue'
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

const labels = computed(() =>
  [...Array(irArray.value.length).keys()] // [0, 1, 2, ..., 19]
)

const data = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      label: 'IR',
      data: irArray.value,
      borderColor: '#F87171',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      tension: 0.3
    },
    {
      label: 'COMP',
      data: compArray.value,
      borderColor: '#60A5FA',
      backgroundColor: 'rgba(248, 113, 113, 0.1)',
      tension: 0.3
    },
    {
      label: 'Average',
      data: avgArray.value,
      borderColor: '#34D399',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      tension: 0.3
    },
    {
      label: 'IR Total',
      data: irTotArray.value,
      borderColor: '#FF00FF',
      backgroundColor: 'rgba(52, 211, 153, 0.1)',
      tension: 0.3
    },
    {
      label: 'Threshold',
      data: Array(labels.value.length).fill(irStore.currentThreshold),
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
        text: 'Index',
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
      min: 0,
      max: 1023,
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
