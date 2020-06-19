<template>
  <div v-if="index === quizIndex">
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
          <span class="text-2xl mb-4">{{ question.name }}</span>
          <span>{{ question.remark }}</span>
        </div>
      </div>
      <div v-if="errors.length" class="mb-4">
        <ul>
          <li v-for="error in errors" :key="error" class="text-red-600">
            {{ error }}
          </li>
        </ul>
      </div>
      <form @submit="checkForm">
        <div v-if="question.type == 'number'">
          <input
            type="number"
            name="number"
            v-model="number"
            min="0"
            max="99"
            class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2 w-20"
          />
        </div>
        <div v-if="question.type == 'text'">
          <input
            type="text"
            v-model="text"
            name=""
            id=""
            class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2"
          />
        </div>
        <div v-if="question.type == 'textarea'" class="text-center">
          <textarea
            name=""
            id=""
            v-model="textArea"
            cols="30"
            rows="10"
            class="bg-outer-space border border-green-mist rounded-lg  px-4 py-2 h-40 w-full"
          ></textarea>
        </div>
        <div class="absolute inset-x-0 bottom-0 m-8">
          <div class="flex justify-between items-center">
            <button
              @click="decrementIndex"
              :disabled="quizIndex == 0"
              :class="quizIndex == 0 ? 'cursor-not-allowed opacity-50' : ''"
              class="bg-limed-spruce text-pampas py-2 px-4 rounded"
            >
              Previous
            </button>

            <button
              v-if="index < arrayLength - 1"
              @click="incrementIndex"
              type="submit"
              class="bg-green-mist text-limed-spruce py-2 px-4 rounded"
            >
              Next
            </button>
            <button
              v-else-if="index == arrayLength - 1"
              type="submit"
              @click.prevent="submitForm"
              class="bg-green-mist text-limed-spruce py-2 px-4 rounded"
            >
              Finish
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/base/IconComponent'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  props: [
    'question',
    'index',
    'increaseIndex',
    'incrementIndex',
    'decrementIndex',
    'arrayLength',
    'type'
  ],
  data() {
    return {
      number: null,
      text: null,
      textArea: null,
      errors: []
    }
  },
  components: {
    Icon
  },
  computed: {
    ...mapGetters('quiz', ['quizIndex'])
  },
  methods: {
    ...mapMutations('quiz', ['saveQuestionAnswer', 'incrementDayStreak']),
    ...mapActions('quiz', ['updateQuizAnswers']),
    checkForm: function(e) {
      switch (this.type) {
        case 'number':
          if (this.number) {
            this.saveQuestionAnswer({
              questionId: this.question.id,
              answer: this.number
            })
            this.incrementIndex()
            this.errors = []
          }
          break
        case 'text':
          if (this.text) {
            this.saveQuestionAnswer({
              questionId: this.question.id,
              answer: this.text
            })
            this.incrementIndex()
            this.errors = []
          }
          break
        case 'textarea':
          if (this.textArea) {
            this.saveQuestionAnswer({
              questionId: this.question.id,
              answer: this.textArea
            })
            this.incrementIndex()
            this.errors = []
          }
          break
        default:
        // code block
      }

      this.errors = []

      if (this.type == 'textarea' && !this.textArea) {
        this.errors.push('Please fill in a value')
      }
      if (this.type == 'number' && !this.number) {
        this.errors.push('Please fill in a value')
      }
      if (this.type == 'text' && !this.text) {
        this.errors.push('Please fill in a value')
      }
      e.preventDefault()
    },
    submitForm() {
      this.updateQuizAnswers().then(() => {
        this.incrementDayStreak()
        this.$router.push('/results')
      })
    }
  }
}
</script>

<style></style>
