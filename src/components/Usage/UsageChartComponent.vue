<template>
  <div class="card flex justify-center">
    <div class="m-8 flex flex-col justify-center items-center text-white rounded-full relative">
      <DoughnutChart :height="180" :width="180" />
      <div v-for="data in allData" :key="data.id">id: {{ data.id }}</div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/usage/DoughnutChartComponent'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    DoughnutChart
  },
  methods: {
    ...mapActions('usage', ['getUsageData'])
  },
  created() {
    this.getUsageData()
  },
  computed: mapGetters('usage', ['allData'])
}
</script>