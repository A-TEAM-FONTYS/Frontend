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
      <form @submit.prevent="submit" class="flex flex-col items-center">
        <div v-if="question.type == 'number'">
          <input
            type="number"
            name="number"
            v-model="$v.number.$model"
            min="0"
            max="99"
            class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2 w-20 mb-2"
            :class="{ hasError: $v.number.$error }"
          />
        </div>
        <div class="text-sm text-red-400" v-if="$v.number.$error">
          <div v-if="!$v.number.required">Please fill in a value</div>
        </div>
        <div v-if="question.type == 'text'">
          <input
            type="text"
            v-model="$v.text.$model"
            name=""
            id=""
            class="bg-outer-space border border-green-mist rounded-lg text-center px-4 py-2 mb-2"
            :class="{ hasError: $v.text.$error }"
          />
        </div>
        <div class="text-sm text-red-400" v-if="$v.text.$error">
          <div v-if="!$v.text.required">Please fill in a value</div>
        </div>
        <div v-if="question.type == 'textarea'" class="text-center">
          <textarea
            name=""
            id=""
            v-model="$v.textarea.$model"
            cols="30"
            rows="10"
            class="bg-outer-space border border-green-mist rounded-lg  px-4 py-2 h-40 w-full mb-2"
            :class="{ hasError: $v.textarea.$error }"
          ></textarea>
        </div>
        <div class="text-sm text-red-400" v-if="$v.textarea.$error">
          <div v-if="!$v.textarea.required">Please fill in a value</div>
        </div>
        <div class="absolute inset-x-0 bottom-0 m-8">
          <div class="flex justify-between items-center">
            <button
              @click="decrementIndex"
              :disabled="quizIndex == 0"
              type="button"
              :class="quizIndex == 0 ? 'cursor-not-allowed opacity-50' : ''"
              class="bg-limed-spruce text-pampas py-2 px-4 rounded"
            >
              Previous
            </button>

            <button
              v-if="index < arrayLength - 1"
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
        {{ quizAnswers }}
        {{ computedAnswer }}
      </form>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/base/IconComponent'
import { required } from 'vuelidate/lib/validators'
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
      number: this.computedAnswer,
      text: this.computedAnswer,
      textarea: this.computedAnswer
    }
  },
  components: {
    Icon
  },
  computed: {
    ...mapGetters('quiz', ['quizIndex', 'quizAnswer', 'quizAnswers']),
    computedAnswer() {
      return this.quizAnswer(this.question.id)
        ? this.quizAnswer(this.question.id)
        : null
    }
  },
  validations() {
    if (this.type == 'number') {
      return {
        number: {
          required
        },
        text: {},
        textarea: {}
      }
    } else if (this.type == 'text') {
      return {
        text: {
          required
        },
        number: {},
        textarea: {}
      }
    } else if (this.type == 'textarea') {
      return {
        textarea: {
          required
        },
        number: {},
        text: {}
      }
    } else if (this.type == 'finished') {
      return {
        textarea: {},
        number: {},
        text: {}
      }
    }
  },
  methods: {
    ...mapMutations('quiz', ['saveQuestionAnswer', 'incrementDayStreak']),
    ...mapActions('quiz', ['updateQuizAnswers']),
    submit() {
      this.$v.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.$pending || this.$v.$error) return

      if (this.type == 'number' && !this.quizAnswer(this.question.id)) {
        this.saveQuestionAnswer({
          questionId: this.question.id,
          answer: this.number
        })
      }
      if (this.type == 'textarea' && !this.quizAnswer(this.question.id)) {
        this.saveQuestionAnswer({
          questionId: this.question.id,
          answer: this.textarea
        })
      }
      if (this.type == 'text' && !this.quizAnswer(this.question.id)) {
        this.saveQuestionAnswer({
          questionId: this.question.id,
          answer: this.text
        })
      }

      this.incrementIndex()
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
