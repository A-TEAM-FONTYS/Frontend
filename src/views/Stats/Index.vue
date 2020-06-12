<template>
  <div class="py-6 px-6 text-pampas font-serif w-full sm:w-2/3 sm:mx-auto">
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
    <div class="mt-4">
      <div
        v-for="appData in allAppData"
        :key="appData.id"
        class="flex justify-between"
      >
        <div>{{ appData.appName }}</div>
        <div>{{ appData.timeUsed }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Picker from '@/components/stats/PickerComponent'
import Chart from '@/components/usage/UsageChartComponent'
import Card from '@/components/usage/StatCardComponent'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Picker,
    Chart,
    Card
  },
  methods: {
    ...mapActions('usage', ['getUsageData']),

    test(active) {
      console.log(active)
    }
  },
  computed: {
    ...mapGetters('usage', ['allAppData'])
  },
  created() {
    this.getUsageData()
  }
}
</script>

<style></style>
