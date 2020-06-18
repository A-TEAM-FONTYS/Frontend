<template>
  <transition>
    <div v-if="index === increaseIndex">
      <div class="flex justify-between mb-16">
        <span class="text-2xl">Quenstion {{ question.priority }} </span>

        <Icon
          name="x"
          class="text-sunglow mt-2"
          @click.native="$router.push('/home')"
        />
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="bg-pampas w-16 h-16 rounded-full shadow-2xl ">
          <Icon
            :name="question.icon"
            :width="32"
            :height="32"
            class="text-limed-spruce m-4"
          />
        </div>
        <div class="mt-2 mb-4">
          <div class="flex flex-col text-center">
            <span class="text-2xl">{{ question.name }}</span>
            <span>{{ question.remark }}</span>
          </div>
        </div>
        <div v-if="question.type == 'number'">
          <input
            type="number"
            name=""
            id=""
            min="0"
            max="99"
            class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2 w-16"
          />
        </div>
        <div v-if="question.type == 'text'">
          <input
            type="text"
            name=""
            id=""
            class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2"
          />
        </div>
        <div v-if="question.type == 'textarea'" class="text-center">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="bg-outer-space border border-green-mist rounded-lg  px-4 py-2 h-20 w-2/3"
          ></textarea>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 m-8">
        <div class="flex justify-between items-center">
          <button
            @click="decrementIndex"
            :disabled="index == 0"
            class="bg-limed-spruce text-pampas py-2 px-4 rounded"
          >
            Previous
          </button>

          <button
            @click="incrementIndex"
            v-if="index < arrayLength - 1"
            class="bg-green-mist text-limed-spruce py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from '@/components/base/IconComponent'

export default {
  props: [
    'question',
    'index',
    'increaseIndex',
    'incrementIndex',
    'decrementIndex',
    'arrayLength'
  ],
  data() {
    return {
      type: 'textarea'
    }
  },
  components: {
    Icon
  }
}
</script>

<style></style>
