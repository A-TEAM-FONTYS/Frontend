
<script>
import { Doughnut } from 'vue-chartjs'

import { mapGetters } from 'vuex'

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
    this.chartData.datasets = this.datasets
    this.chartData.labels = this.labels
    //this.renderChart(this.chartData, this.chartOptions)
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  },
  computed: {
    ...mapGetters('usage', ['allAppData']),
    datasets() {
      return [
        {
          data: this.allAppData.map(i => i.timeUsed),
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
    labels() {
      return this.allAppData.map(i => i.appName)
    }
  },
  methods: {}
}
</script>
