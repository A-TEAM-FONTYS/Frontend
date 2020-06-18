<template>
  <div class="w-full h-full p-5 bg-outer-space justify-center">
    <div class="text-white text-base m-4 mb-12">
      <div class="text-xl">
        Question 7
        <a class="float-right text-sunglow">X</a>
      </div>
    </div>
    <div class="w-fit-content text-black rounded-full p-3 mx-auto mb-4 bg-white shadow-xl">
      <Icon name="pen-tool" width="30px" height="30px" />
    </div>
    <div class="mb-10">
      <div
        class="text-lg text-white text-center mx-6 mt-2"
      >List 4 main activities on your smartphone you like to use.</div>
    </div>
    <div class="flex">
      <textarea
        class="text-white bg-kindagreen text-sm w-full p-1 border-solid border border-white rounded-lg"
        type="text"
        placeholder="Click to start typing..."
        rows="9"
      />
    </div>
        <div class="left-0 bottom-0 w-full fixed p-6 bg-outer-space">
      <div class="button-group">
        <button
          class="w-24 p-2 float-left bg-limed-spruce text-kindagold rounded-md"
          type="back"
        >Back</button>
        <button
          class="w-24 p-2 float-right bg-kindagold text-limed-spruce rounded-md"
          type="submit"
        >Next</button>
      </div>
    </div>
  </div>
</template>





<style scoped>
</style>





<script>
import Icon from '@/components/base/IconComponent'

export default {
  components: {
    Icon
  }
}
</script>