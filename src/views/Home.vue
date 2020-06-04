<template>
  <div class="bg-outer-space h-screen w-screen p-6 text-white">
    <div class="grid grid-rows-3 grid-flow-col gap-10">
      <div class="row-span-2">
        <div class="h-full flex items-center">
          <div>
            <span class="block w-full font-bold text-2xl">Welcome back,</span>
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
    <div class="w-full h-40 -mt-16 overflow-hidden">
      <div class="flex justify-center">
        <img
          class="object-none object-center w-16 h-16 rounded-full bg-white border-8 border-outer-space"
          src="@/assets/pen-tool.png"
        />
      </div>
      <div class="-mt-8 w-full h-32 bg-limed-spruce rounded-md text-center">
        <div class="inline-block align-bottom">
          <h3 class="text-xl font-bold mt-12">Continue your daily quiz</h3>
          <p class="text-sm font-light">Become aware of your app usage</p>
        </div>
      </div>
    </div>
    <div class="flex w-full h-24 mt-6 overflow-hidden">
      <div class="flex-1 h-full pr-3">
        <div class="h-full bg-limed-spruce rounded-md p-3">
          <h4 class="text-green-mist text-xs uppercase tracking-widest font-semibold">Day Streak</h4>
          <div class="mt-2">
            <div class="flex items-end h-16 table-cell">
              <span class="text-4xl text-form-green leading-10">12</span>
              <span class="text-xs ml-2 leading-10 tracking-wide">Days</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 h-full pl-3">
        <div class="h-full bg-limed-spruce rounded-md p-3">
          <h4 class="text-green-mist text-xs uppercase tracking-widest font-semibold">Sessions</h4>
          <div class="mt-2">
            <div class="flex items-end h-16 table-cell">
              <span class="text-4xl leading-10">6</span>
              <span class="text-xs ml-2 leading-10 tracking-wide">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>

<style>
</style>
