<template>
  <div class="card flex justify-center">
    <div class="m-8 flex flex-col justify-center items-center text-white rounded-full relative">
      <div v-if="data">
        <DoughnutChart :height="180" :width="180" />
      </div>
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
    ...mapState('usage', ['data'])
  }
}
</script>