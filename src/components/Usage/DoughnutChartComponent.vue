<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: ['chartData'],
  data() {
    return {
      chartOptions: {
        legend: {
          display: false
        },
        cutoutPercentage: 60
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>
