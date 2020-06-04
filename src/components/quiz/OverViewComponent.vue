<template>
  <div class="flex">
    <div class="flex">
      <div class="bg-green-mist h-14 w-14 rounded-xlg justify-center items-center flex">
        <div class>
          <Icon name="calendar" :height="30" :width="30" class="text-outer-space" />
          <span class="text-outer-space">1</span>
        </div>
      </div>
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