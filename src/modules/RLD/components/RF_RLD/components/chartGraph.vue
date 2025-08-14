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
import { useRFStore } from '../store/RFStore'
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

const rfStore = useRFStore()
const { RF, Average } = storeToRefs(rfStore)

const labels = computed(() =>
  [...Array(RF.value.length).keys()] // [0, 1, 2, ..., 19]
)

const data = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      label: 'RF',
      data: RF.value,
      borderColor: '#F87171',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      tension: 0.3
    },
    {
      label: 'Average',
      data: Average.value,
      borderColor: '#34D399',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      tension: 0.3
    },
    {
      label: 'Threshold',
      data: Array(labels.value.length).fill(rfStore.currentThreshold),
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
          size: 12
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
          size: 12,
          weight: 'bold' as const
        }
      },
      ticks: {
        color: '#FFFFFF',
        font: {
          size: 10
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
          size: 12,
          weight: 'bold' as const
        }
      },
      ticks: {
        color: '#FFFFFF',
        font: {
          size: 10
        }
      }
    }
  }
}
</script>
