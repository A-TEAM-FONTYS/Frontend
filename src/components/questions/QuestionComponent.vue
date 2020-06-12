<template>
  <div class="">
    <div class="flex justify-center">
      <div class="bg-pampas w-16 h-16 rounded-full shadow-2xl ">
        <Icon
          name="unlock"
          :width="32"
          :height="32"
          class="text-limed-spruce m-4"
        />
      </div>
    </div>
    <div class="flex justify-center mt-2 mb-4">
      <div class="flex flex-col text-center">
        <span class="text-2xl">Your question here</span>
        <span>sub question here</span>
      </div>
    </div>
    <div class="flex justify-center">
      <div v-if="type == 'number'">
        <input
          type="number"
          name=""
          id=""
          min="0"
          max="99"
          class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2 w-16"
        />
      </div>
      <div v-if="type == 'text'">
        <input
          type="text"
          name=""
          id=""
          class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2"
        />
      </div>
      <div v-if="type == 'textarea'" class="text-center">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="bg-outer-space border border-green-mist rounded-lg  px-4 py-2 h-20 w-2/3"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/base/IconComponent'
export default {
  components: {
    Icon
  },
  data() {
    return {
      type: 'textarea'
    }
  }
}
</script>

<style></style>
