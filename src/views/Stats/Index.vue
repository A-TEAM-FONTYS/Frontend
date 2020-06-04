<template>
  <div class="py-6 px-6 text-pampas font-serif">
    <h1 class="text-2xl">App usage</h1>
    <div class="flex flex-col">
      <div class="flex justify-center">
        <Picker @updatePicker="test" class="mt-4" />
      </div>
      <div class="flex justify-center">
        <Chart />
      </div>
      <div class="flex justify-between mx-16">
        <Card name="Unlocks" :amount="25" />
        <Card name="Notifications" :amount="48" />
      </div>
    </div>
  </div>
</template>

<script>
import Picker from '@/components/stats/PickerComponent'
import Chart from '@/components/Usage/UsageChartComponent'
import Card from '@/components/Usage/StatCardComponent'

export default {
  components: {
    Picker,
    Chart,
    Card
  },
  methods: {
    test(active) {
      console.log(active)
    }
  }
}
</script>

<style>
</style>