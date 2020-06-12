<template>
  <div class="card flex justify-center">
    <div
      class="m-8 flex flex-col justify-center items-center text-white rounded-full relative"
    >
      <DoughnutChart
        :height="180"
        :width="180"
        v-if="data"
        :chartData="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/usage/DoughnutChartComponent'
import { mapState } from 'vuex'

export default {
  components: {
    DoughnutChart
  },
  computed: {
    ...mapState('usage', ['data']),
    chartData() {
      if (this.data) {
        const chartdata = {
          labels: this.data.map(i => i.appName),
          datasets: [
            {
              data: this.data.map(i => i.timeUsed),
              backgroundColor: [
                '#D6D4AF',
                '#B6B99C',
                '#969E88',
                '#778475',
                '#576961',
                '#475B58'
              ], //give color list
              borderColor: '#374E4E',
              borderWidth: 0
            }
          ]
        }
        return chartdata
      }
      return null
    },
    chartOptions() {
      const options = {
        legend: {
          display: false
        },
        cutoutPercentage: 60
      }
      return options
    }
  }
}
</script>
