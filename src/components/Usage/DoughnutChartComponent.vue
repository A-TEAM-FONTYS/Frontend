<script>
import { Doughnut } from 'vue-chartjs'

import { mapActions, mapState } from 'vuex'

export default {
  extends: Doughnut,
  props: {},
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
          data: [1, 2, 5, 6, 3, 4],
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
      return [1, 2, 3, 4, 5, 6]
    }
  },
  methods: {
    ...mapActions('usage', ['getUsageData'])
  }
}
</script>
