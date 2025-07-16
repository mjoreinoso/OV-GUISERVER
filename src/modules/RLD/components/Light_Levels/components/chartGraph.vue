<template>
  <Line :data="data" :options="options" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  LineElement, PointElement,
  LinearScale, CategoryScale,
  Tooltip, Legend,
  Title
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Title)

const data = {
  labels: ['0', '1', '2', '3'],
  datasets: [
    {
      label: 'IR',
      data: [5, 10, 8, 15],
      borderColor: '#FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      tension: 0.3
    },
    {
      label: 'COMP',
      data: [4, 9, 7, 12],
      borderColor: '#F87171', // rojo claro
      backgroundColor: 'rgba(248, 113, 113, 0.1)',
      tension: 0.3
    },
    {
      label: 'Average',
      data: [6, 8, 8, 14],
      borderColor: '#60A5FA', // azul claro
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      tension: 0.3
    },
    {
      label: 'IR Total',
      data: [9, 11, 10, 17],
      borderColor: '#34D399', // verde
      backgroundColor: 'rgba(52, 211, 153, 0.1)',
      tension: 0.3
    },
    {
      label: 'Threshold',
      data: [10, 10, 10, 10],
      borderColor: '#FBBF24', // amarillo
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      borderDash: [5, 5],
      tension: 0.3
    }
  ]
}

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
          weight: 'bold'
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
          weight: 'bold'
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
