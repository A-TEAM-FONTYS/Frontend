<template>
  <div class="py-6 px-6 text-pampas font-serif w-full sm:w-2/3 sm:mx-auto">
    <Question
      v-for="(question, index) in questions"
      :key="question.id"
      :type="question.type"
      :question="question"
      :index="index"
      :increment-index="incrementIndex"
      :decrement-index="decrementIndex"
      :array-length="arrayLength"
    />
  </div>
</template>

<script>
import Question from '@/components/questions/QuestionComponent'
import { mapGetters, mapMutations } from 'vuex'

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
    ...mapMutations('quiz', ['increment', 'decrement']),
    incrementIndex() {
      this.increment()
    },

    decrementIndex() {
      this.decrement()
    }
  }
}
</script>

<style></style>
