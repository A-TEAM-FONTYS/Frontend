<template>
  <div>
    <div
      v-if="loaded"
      class="py-6 px-6 text-pampas font-serif w-full sm:w-2/3 sm:mx-auto"
    >
      <h1 class="text-2xl">App usage</h1>
      <div class="flex flex-col mt-8">
        <div class="flex justify-center">
          <Picker @updatePicker="test" class="mt-4" />
        </div>
        <div class="flex justify-center">
          <Chart :chart-data="allData" />
        </div>
        <div class="flex justify-between mx-16">
          <Card name="Unlocks" :amount="0" />
          <Card name="Notifications" :amount="0" />
        </div>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto mt-8">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-limed-spruce text-left text-xs font-semibold uppercase tracking-wider"
                >
                  App
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-limed-spruce text-left text-xs font-semibold uppercase tracking-wider"
                >
                  Time used
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="appData in allData" :key="appData.id">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <Icon
                        class="w-full h-full rounded-full text-limed-spruce"
                        name="smartphone"
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ appData.appName.replace(/./, m => m.toUpperCase()) }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ appData.timeUsed }} minutes
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- 
    <div class="flex justify-center mt-8">
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="px-4 py-2">App</th>
            <th class="px-4 py-2">Time used</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appData in allData" :key="appData.id">
            <td class="border px-4 py-2">{{ appData.appName }}</td>
            <td class="border px-4 py-2">{{ appData.timeUsed }} minutes</td>
          </tr>
        </tbody>
      </table>
    </div> -->

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
import Icon from '@/components/base/IconComponent'
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
    Card,
    Icon
  },
  created() {
    this.getUsageData().then(() => {
      this.loaded = true
    })
  },
  computed: {
    ...mapGetters('usage', ['allData', 'error']),
    capitalizeFirstLetter(string) {
      return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }
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
