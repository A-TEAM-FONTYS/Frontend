<template>
  <li class="pb-3">
    <div
      :class="checked ? 'bg-kindagold' : 'bg-transparent'"
      class="text-sm border-solid border border-white rounded-lg p-1"
    >
      <div class="text-center">{{ suggestion }}</div>
    </div>
  </li>
</template>

<style scoped>
</style>

<script>
export default {
  props: ['checked', 'suggestion']
}
</script>