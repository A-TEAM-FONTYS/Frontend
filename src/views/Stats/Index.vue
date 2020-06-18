<template>
  <div>
    <div
      v-if="loaded"
      class="py-6 px-6 text-pampas font-serif w-full sm:w-2/3 sm:mx-auto"
    >
      <h1 class="text-2xl">App usage</h1>
      <div class="flex flex-col">
        <div class="flex justify-center">
          <Picker @updatePicker="test" class="mt-4" />
        </div>
        <div class="flex justify-center">
          <Chart :chart-data="allData" />
        </div>
        <div class="flex justify-between mx-16">
          <Card name="Unlocks" :amount="25" />
          <Card name="Notifications" :amount="48" />
        </div>
      </div>
      <div class="mt-4">
        <div
          v-for="appData in allData"
          :key="appData.id"
          class="flex justify-between"
        >
          <div>{{ appData.appName }}</div>
          <div>{{ appData.timeUsed }}</div>
        </div>
      </div>
    </div>

    <div
      v-else-if="error"
      class="py-6 px-6 text-pampas font-serif flex flex-col justify-center items-center min-h-(screen-16)"
    >
      <h1 class="text-2xl">App usage</h1>
      <div class="mt-4 text-xl">
        <h1>Nothing to show yet!</h1>
      </div>
      <img
        class="mt-12"
        src="https://i.ya-webdesign.com/images/confused-travolta-png-gif-1.gif"
        width="200"
      />
    </div>
  </div>
</template>

<script>
import Picker from '@/components/stats/PickerComponent'
import Chart from '@/components/usage/UsageChartComponent'
import Card from '@/components/usage/StatCardComponent'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      loaded: false
    }
  },
  components: {
    Picker,
    Chart,
    Card
  },
  created() {
    this.getUsageData().then(() => {
      this.loaded = true
    })
  },
  computed: {
    ...mapGetters('usage', ['allData', 'error'])
  },
  methods: {
    ...mapActions('usage', ['getUsageData']),
    test(active) {
      console.log(active)
    }
  }
}
</script>

<style></style>
