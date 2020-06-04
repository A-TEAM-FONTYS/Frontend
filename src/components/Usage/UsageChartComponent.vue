<template>
  <div class="card flex justify-center">
    <div class="m-8 flex flex-col justify-center items-center text-white rounded-full relative">
      <DoughnutChart :height="180" :width="180" />
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/Usage/DoughnutChartComponent'

export default {
  components: {
    DoughnutChart
  }
}
</script>