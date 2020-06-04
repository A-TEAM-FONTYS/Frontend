<script>
import { Doughnut } from 'vue-chartjs'
import { mapState, mapGetters } from 'vuex'

export default {
  extends: Doughnut,
  data() {
    return {
      chartData: {
        datasets: [],
        labels: [
          'Facebook',
          'Whatsapp',
          'Snapchat',
          'Youtube',
          'Twitter',
          'Overig'
        ]
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
          //data: this.apps.map(app => this.getAppTotalUsageById(app.id)),
          data: [12, 19, 3, 5, 2, 3],
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
      return this.apps.map(app => app.name)
    },
    ...mapState('app', ['apps']),
    ...mapGetters('app', ['getAppTotalUsageById'])
  }
}
</script>
