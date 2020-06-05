<template>
  <div>{{ test }}</div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'

import { mapActions, mapState } from 'vuex'

export default {
  extends: Doughnut,
  props: {
    test: []
  },
  data() {
    return {
      chartData: {
        datasets: [],
        labels: []
      },
      chartOptions: {
        legend: {
          display: false
        },
        cutoutPercentage: 60
      }
    }
  },
  created() {
    this.getUsageData()
    this.chartData.datasets = this.datasets
    this.chartData.labels = this.labels
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  },
  computed: {
    ...mapState('usage', ['usageData']),
    datasets() {
      return [
        {
          data: this.usageData.map(data => data.timeUsed),
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
    },
    lables() {
      return this.usageData.map(data => data.appName)
    }
  },
  methods: {
    ...mapActions('usage', ['getUsageData'])
  }
}
</script>
