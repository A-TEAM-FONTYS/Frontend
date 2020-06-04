<template>
  <div class="py-10 px-6 text-pampas font-serif">
    <h1 class="text-2xl">App usage</h1>
    <div class="flex flex-col">
      <div class="flex justify-center">
        <Picker @updatePicker="test" class="mt-4" />
      </div>
      <div class="flex justify-center">
        <Chart />
      </div>
      <div class="flex justify-between mx-16">
        <div class="flex flex-col text-center">
          <span class="text-pampas text-lg">23</span>
          <label class="text-green-mist text-sm">Unlocks</label>
        </div>
        <div class="flex flex-col text-center">
          <span class="text-pampas text-lg">45</span>
          <label class="text-green-mist text-sm">Notifications</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Picker from '@/components/stats/PickerComponent'
import Chart from '@/components/Usage/UsageChartComponent'

export default {
  components: {
    Picker,
    Chart
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