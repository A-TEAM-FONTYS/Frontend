<template>
  <div class="py-10 px-6 text-pampas font-serif">
    <h1 class="text-2xl">App usage</h1>
    <div class="flex justify-center">
      <Picker @updatePicker="test" class="mt-4" />
    </div>
  </div>
</template>

<script>
import Picker from '@/components/stats/PickerComponent'
export default {
  components: {
    Picker
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