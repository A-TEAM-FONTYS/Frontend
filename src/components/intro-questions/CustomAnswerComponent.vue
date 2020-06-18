<template>
  <div>
    <div class="flex">
      <textarea
        class="text-white bg-kindagreen text-sm w-full p-1 border-solid border border-white rounded-lg"
        type="text"
        :placeholder="placeholder"
        rows="9"
      />
    </div>
    <div class="flex">
      <input
        v-if="inputType === 'text'"
        class="text-white bg-kindagreen text-sm w-full p-1 border-solid border border-white rounded-lg"
        type="text"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  props: ['question', 'placeholder', 'inputType'],
  data() {
    return {
      type: ['textarea', 'text']
    }
  }
}
</script>