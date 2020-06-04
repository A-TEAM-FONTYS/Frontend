<template>
  <div class="flex flex-col text-center">
    <span class="text-pampas text-lg">{{ amount }}</span>
    <label class="text-green-mist text-sm">{{ name }}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    amount: Number
  }
}
</script>

<style>
</style>