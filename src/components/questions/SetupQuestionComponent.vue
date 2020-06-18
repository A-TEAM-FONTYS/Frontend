<template>
  <div>
    <div class="flex justify-center">
      <div class="bg-pampas w-16 h-16 rounded-full shadow-2xl ">
        <Icon
          name="message-circle"
          :width="32"
          :height="32"
          class="text-limed-spruce m-4"
        />
      </div>
    </div>
    <div class="flex justify-center mt-2 mb-4">
      <div class="flex flex-col text-center">
        <span class="text-2xl">Application Name</span>
      </div>
    </div>
    <div class="flex flex-col justify-center text-center">
      <div class="flex flex-col my-4">
        <span class="mb-2">At what age did you start using this app?</span>
        <div class="flex justify-center">
          <input
            type="number"
            name=""
            id=""
            min="0"
            max="99"
            class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2 w-16"
          />
        </div>
      </div>
      <div class="flex flex-col my-4">
        <span class="mb-2">How many times a day are you using this app?</span>
        <div class="flex justify-center">
          <input
            type="number"
            name=""
            id=""
            min="0"
            max="99"
            class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2 w-16"
          />
        </div>
      </div>
      <div class="flex flex-col my-4">
        <span class="mb-2">
          How much do you need this app
          <br />

          (0 nothing at all, 5 very essential)
        </span>
        <div class="flex justify-center">
          <input
            type="range"
            name=""
            id=""
            min="1"
            max="5"
            value="3"
            class="bg-outer-space border border-green-mist rounded-lg text-center "
          />
        </div>
      </div>
      <div class="flex flex-col my-4">
        <span class="mb-2">
          To what extent do you experience <br />
          it as a problem?
          <br />
          (0 nothing at all, 5 very essential)
        </span>
        <div class="flex justify-center">
          <input
            type="range"
            name=""
            id=""
            min="1"
            max="5"
            value="3"
            class="bg-outer-space border border-green-mist rounded-lg text-center"
          />
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

<style></style>
