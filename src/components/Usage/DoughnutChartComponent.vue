<script>
import { Doughnut } from 'vue-chartjs'
import { mapState, mapGetters } from 'vuex'

export default {
  extends: Doughnut,
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
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  },
  computed: {
    datasets() {
      return [
        {
          data: this.apps.map(app => this.getAppTotalUsageById(app.id)),
          backgroundColor: '#ffffff', //give color list
          borderColor: '#374E4E',
          borderWidth: 1
        }
      ]
    },
    labels() {
      return this.apps.map(app => app.name)
    },
    ...mapState('app', ['apps']),
    ...mapGetters('app', ['getAppTotalUsageById'])
  }
}
</script>
