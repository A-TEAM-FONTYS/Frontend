<template>
  <div class="question-container w-full h-full p-5 bg-outer-space">
    <div class="text-white text-base m-5">
      <div class="title">
        Preparation Question B
        <a class="float-right text-sunglow">X</a>
      </div>
    </div>
    <div class="content-holder p-5 mt-3 ml-1">
      <div
        class="w-fit-content text-black rounded-full p-5 left-0 bottom-0 right-0 top-0 mx-auto bg-white shadow-xl"
      >
        <Icon name="instagram" />
      </div>
      <div class="text-lg text-white text-center mt-1">Short term - Advantages</div>
      <div class="app-content p-5 mt-5 left-0 bottom-0 right-0 top-0 mx-auto">
        <ul class="text-xl text-white">
          <li class="pb-5">
            <label class="block text-sm block">
              <input class="w-6 h-6 align-bottom relative" type="checkbox" /> Some suggestion here...
            </label>
          </li>
          <li>
            <div class="flex">
              <a class>
                <img class="bg-white p-1 w-6 max-w-xs" src="@/assets/plus.png" />
              </a>
              <input
                class="ml-1 text-white bg-transparent text-sm w-full"
                type="text"
                style="border-bottom: 1px solid #fff;"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <footer class="left-0 bottom-0 w-full fixed p-6 bg-outer-space">
      <div class="button-group">
        <button class="w-24 p-1 float-left bg-limed-spruce text-sunglow rounded-md">Previous</button>
        <button class="w-24 p-1 float-right bg-sunglow text-limed-spruce rounded-md">Next</button>
      </div>
    </footer>
  </div>
</template>


<style scoped>
.custom-suggestion {
}
</style>


<script>
import Icon from '@/components/base/IconComponent'

export default {
  components: {
    Icon
  }
}
</script>