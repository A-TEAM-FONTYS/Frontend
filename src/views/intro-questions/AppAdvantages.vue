<template>
  <div class="w-full h-full p-5 bg-outer-space justify-center">
    <div class="text-white text-base m-4 mb-12">
      <div class="text-xl">
        Question 15
        <a class="float-right text-sunglow">X</a>
      </div>
    </div>
    <div class="w-fit-content text-black rounded-full p-3 mx-auto mb-4 bg-white shadow-xl">
      <Icon name="facebook" width="30px" height="30px" />
    </div>
    <div class="mb-12">
      <div class="text-lg text-white text-center mt-2">Facebook - Short Term</div>
      <div class="text-lg text-white text-center">Advantages</div>
    </div>
    <div class="p-5 mt-5">
      <ul class="text-xl text-white">
        <li class="pb-3" v-for="item in suggestions" :key="item.suggestion">
          <div
            :class="item.checked ? 'bg-kindagold' : 'bg-transparent'"
            @click="item.checked ? unselectSuggestion(item) : selectSuggestion(item)"
            class="text-sm border-solid border border-white rounded-lg p-1"
          >
            <div class="text-center">{{item.suggestion}}</div>
          </div>
        </li>
        <li>
          <div class="flex">
            <input
            v-on:keyup.enter="addCustomSuggestion(customSuggestion)"
              v-model="customSuggestion.suggestion"
              class="text-white bg-kindagreen text-sm w-full p-1 border-solid border border-white rounded-lg"
              type="text"
              placeholder=" Add your own advantage..."
            />
          </div>
        </li>
      </ul>
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
          @click="saveInDatabase()"
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
  data() {
    return {
      customSuggestion: {
        suggestion: '',
        checked: false
      },
      suggestion: { id: '', suggestion: '', checked: '' },
      suggestions: [
        { suggestion: 'I enjoy using it.', checked: false },
        { suggestion: 'I can be whoever I want to be.', checked: false },
        { suggestion: 'Chatting with friends', checked: false },
        { suggestion: 'Staying up to date with events.', checked: false }
      ],
      checkedSuggestions: []
    }
  },
  methods: {
    selectSuggestion(suggestionSelected) {
      this.suggestion = suggestionSelected
      this.checkedSuggestions.push({ suggestion: this.suggestion })
      this.suggestion.checked = true
      console.log(this.checkedSuggestions)
      this.suggestion = ''
    },
    unselectSuggestion(suggestion) {
      this.checkedSuggestions.splice(suggestion, 1)
      suggestion.checked = false
      console.log(this.checkedSuggestions)
    },
    addCustomSuggestion(customSuggestion) {
      this.suggestions.push({ suggestion: customSuggestion.suggestion, checked: true })
      this.customSuggestion.suggestion = ''
      console.log(customSuggestion)
    },
    saveInDatabase() {
      console.log('not implemented')
    }
  },
  components: {
    Icon
  }
}
</script>

