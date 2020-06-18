<template>
  <div class="w-full h-full p-5 bg-outer-space justify-center">
    <div class="text-white text-base m-4 mb-12">
      <div class="text-xl">
        Question {{question.questionNr}}
        <a class="float-right text-sunglow">X</a>
      </div>
    </div>
    <div class="w-fit-content text-black rounded-full p-3 mx-auto mb-4 bg-white shadow-xl">
      <Icon :name="question.icon" width="30px" height="30px" />
    </div>
    <div class="mb-12">
      <div class="text-lg text-white text-center mt-2">{{question.app}} - {{question.term}} Term</div>
      <div class="text-lg text-white text-center">{{question.subject}}</div>
    </div>
    <div class="p-5 mt-5">
      <ul class="text-xl text-white">
        <Suggestion
          v-for="suggestion in question.suggestions"
          :key="suggestion.text"
          :suggestion="suggestion.text"
          :checked="suggestion.checked"
        />
        <li>
          <CustomAnswer :placeholder="question.placeholder" :inputType="question.inputType" />
        </li>
      </ul>
    </div>
    <footer class="left-0 bottom-0 w-full fixed p-6 bg-outer-space">
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
    </footer>
  </div>
</template>


<style scoped>
</style>


<script>
import Icon from '@/components/base/IconComponent'
import Suggestion from '@/components/intro-questions/SuggestionComponent'
import CustomAnswer from '@/components/intro-questions/CustomAnswerComponent'

export default {
  data() {
    return {
      question: {
        questionNr: 15,
        placeholder: 'Add your own advantage',
        inputType: 'text',
        icon: 'facebook',
        app: 'Facebook',
        term: 'Short',
        subject: 'Advantages',
        suggestions: [
          { text: 'I enjoy using it.', checked: false },
          { text: 'I can be whoever I want to be.', checked: false },
          { text: 'Chatting with friends', checked: false },
          { text: 'Staying up to date with events.', checked: false }
        ]
      }
    }
  },
  methods: {},
  components: {
    Icon,
    Suggestion,
    CustomAnswer
  }
}
</script>

