<template>
  <div class="flex justify-center">
    <div class="bg-limed-spruce rounded-lg mt-8">
      <button
        type="button"
        class="py-1 px-4 w-20 rounded-l-lg"
        :class="{active: activeBtn === 'daily' }"
        @click.prevent="setPicker"
      >Daily</button>
      <button
        type="button"
        class="py-1 px-4 w-20 rounded-r-lg"
        :class="{active: activeBtn === 'weekly' }"
        @click.prevent="setPicker"
      >Weekly</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 'daily'
    }
  },
  methods: {
    setPicker() {
      if (this.activeBtn == 'daily') {
        this.activeBtn = 'weekly'
      } else {
        this.activeBtn = 'daily'
      }
      this.updatePicker(this.activeBtn)
    },
    updatePicker(active) {
      this.$emit('updatePicker', active)
    }
  }
}
</script>

<style>
.active {
  background-color: #f3f1eb;
  color: #273a3a;
}
</style>