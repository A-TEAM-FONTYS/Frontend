<template>
  <div class="flex justify-between">
    <div class="flex">
      <div class="bg-green-mist h-14 w-14 rounded-xlg justify-center items-center flex">
        <div class="flex justify-center items-center relative w-full h-full">
          <Icon name="calendar" :height="30" :width="30" class="text-outer-space absolute" />
          <span class="text-outer-space absolute pt-2 text-xs">1</span>
        </div>
      </div>
      <div class="ml-4 flex flex-col">
        <span class="text-xl">Title</span>
        <span class="text-sm opacity-50">sub Title</span>
      </div>
    </div>

    <div class="flex items-center">
      <Icon name="chevron-right" :height="30" :width="30" class="text-pampas opacity-50" />
    </div>
  </div>
</template>

<script>
import Icon from '@/components/base/IconComponent'

export default {
  components: {
    Icon
  }
}
</script>

<style>
</style>