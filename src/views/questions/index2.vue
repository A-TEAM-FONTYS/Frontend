<template>
  <div id="app" class="bg-gray-200 w-full h-screen bg-outer-space">
    <NavBar />
    <div class="pt-5 pl-5">
      <div class="text-pampas text-2xl">
        Let's start with
        <br />some questions!
      </div>
      <div class="row-span-2">
        <div class="flex justify-end">
          <img src="@/assets/Boom.png" class="w-24 h-24" />
        </div>
      </div>
    </div>

    <div class="p-10">
      <div class="rounded-lg p-10 mt-5 mb-5 bg-limed-spruce text-pampas text-center">
        <div class="flex justify-center">
          <div class="bg-pampas -mt-20 w-20 h-20 rounded-full border-8 border-outer-space"></div>
        </div>How are you?
        <br />Become aware of you app usage.
      </div>

      <input class="border w-full bg-transparent rounded-lg p-10 mt-5 mb-5 text-pampas" />

      <div
        class="rounded-lg p-10 mt-5 mb-5 bg-limed-spruce text-pampas text-center"
      >At what age did you start using social media?</div>
      <input
        type="number"
        name
        id
        min="0"
        max="90"
        class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2 w-16"
      />
    </div>
  </div>
</template>


<script>
import NavBar from '@/components/base/NavBarComponent'

export default {
  components: {
    NavBar
  }
}

// var app = new Vue({
//   el: '#app'
// })
//
</script>

<style lang="scss"></style>
