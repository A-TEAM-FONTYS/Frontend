<template>
  <div class="card flex justify-center">
    <div
      class="m-8 flex flex-col justify-center items-center text-white rounded-full relative"
    >
      <DoughnutChart :height="180" :width="180" :chart-data="datasetsfull" />
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/usage/DoughnutChartComponent'

export default {
  props: ['chartData'],
  components: {
    DoughnutChart
  },
  computed: {
    datasetsfull() {
      return {
        labels: this.chartData.map(i => i.appName),
        datasets: [
          {
            data: this.chartData.map(i => i.timeUsed),
            backgroundColor: [
              '#D6D4AF',
              '#B6B99C',
              '#969E88',
              '#778475',
              '#576961',
              '#475B58',
              '#B6B99C',
              '#969E88',
              '#778475',
              '#576961',
              '#475B58'
            ],
            borderColor: '#374E4E',
            borderWidth: 0
          }
        ]
      }
    }
  }
}
</script>
