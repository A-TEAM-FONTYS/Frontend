<template>
  <div
    class="font-serif bg-outer-space h-screen w-screen p-6 text-pampas w-full sm:w-2/3 sm:mx-auto"
  >
    <div class="grid grid-rows-3 grid-flow-col gap-10">
      <div class="row-span-2">
        <div class="h-full flex items-center">
          <div>
            <span class="block w-full text-2xl">Welcome back,</span>
            <span class="font-medium text-xl">NickyBouwmans12</span>
          </div>
        </div>
      </div>
      <div class="row-span-2">
        <div class="flex justify-end">
          <img src="@/assets/treeArt.png" class="sm:w-24 sm:h-24" />
        </div>
      </div>
    </div>
    <div class="w-full -mt-16 overflow-hidden">
      <div class="flex justify-center">
        <div class="bg-pampas w-20 h-20 rounded-full border-8 border-outer-space">
          <Icon name="pen-tool" :width="32" :height="32" class="text-limed-spruce m-4" />
        </div>
      </div>
      <div class="-mt-8 w-full pb-4 bg-limed-spruce rounded-md text-center overflow-hidden">
        <div class="relative z-10">
          <img
            src="@/assets/circlesArt.png"
            class="absolute -top-8 -left-8 transform rotate-45 -z-1"
          />
          <img
            src="@/assets/circlesArt.png"
            class="absolute -bottom-16 -right-16 transform rotate-45 -z-1"
          />
          <div class="inline-block align-bottom">
            <h3 class="text-2xl mt-12">Continue your daily quiz</h3>
            <p class="text-sm">Become aware of your app usage</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full h-24 mt-6 overflow-hidden">
      <div class="flex-1 h-full pr-3">
        <div class="h-full bg-limed-spruce rounded-md p-3 overflow-hidden">
          <div class="relative z-10">
            <img
              src="@/assets/linesArt.png"
              class="absolute -bottom-4 -right-16 transform rotate-45 -z-1"
            />
            <h4 class="text-green-mist text-xs uppercase tracking-widest">Day Streak</h4>
            <div class="mt-2">
              <div class="flex items-end h-16 table-cell">
                <span class="text-4xl text-form-green leading-10">12</span>
                <span class="text-xs ml-2 leading-10 tracking-wide">days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 h-full pl-3">
        <div class="h-full bg-limed-spruce rounded-md p-3 overflow-hidden">
          <div class="relative z-10">
            <img
              src="@/assets/dotsArt.png"
              class="absolute -bottom-4 -right-24 transform rotate-90 -z-1"
            />
            <h4 class="text-green-mist text-xs uppercase tracking-widest">Sessions</h4>
            <div class="mt-2">
              <div class="flex items-end h-16 table-cell">
                <span class="text-4xl leading-10">6</span>
                <span class="text-xs ml-2 leading-10 tracking-wide">completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/base/IconComponent'

export default {
  name: 'Home',
  components: {
    Icon
  }
}
</script>

<style></style>
