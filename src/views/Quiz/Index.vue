<template>
  <div class="py-6 px-6 text-pampas font-serif w-full sm:w-2/3 sm:mx-auto">
    <Question
      v-for="(question, index) in questions"
      :key="question.id"
      :question="question"
      :index="index"
      :increase-index="increaseIndex"
      :increment-index="incrementIndex"
      :decrement-index="decrementIndex"
      :array-length="arrayLength"
    />
  </div>
</template>

<script>
import Question from '@/components/questions/QuestionComponent'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      increaseIndex: 0
    }
  },
  components: {
    Question
  },
  computed: {
    ...mapGetters('quiz', ['questions']),
    arrayLength() {
      return this.questions.length
    }
  },
  methods: {
    incrementIndex() {
      return this.increaseIndex++
    },

    decrementIndex() {
      return this.increaseIndex--
    }
  }
}
</script>

<style></style>
