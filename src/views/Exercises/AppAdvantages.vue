<template>
  <div class="w-full h-full p-5 bg-outer-space justify-center">
    <div class="text-white text-base m-5">
      <div class>
        Preparation Question B
        <a class="float-right text-sunglow">X</a>
      </div>
    </div>
    <div class="p-5 mt-3 ml-1">
      <div class="w-fit-content text-black rounded-full p-5 mx-auto bg-white shadow-xl">
        <Icon name="instagram" />
      </div>
      <div class="text-lg text-white text-center mt-1">Short term - Advantages</div>
      <form @submit.prevent="submit">
        <div class="p-5 mt-5 left-0 bottom-0 right-0 top-0 mx-auto">
          <ul class="text-xl text-white">
            <li class="pb-5" v-for="item in suggestions" :key="item.suggestion">
              <label class="block text-sm block">
                <input
                  @click="item.checked ? unselectSuggestion(item) : selectSuggestion(item)"
                  class="w-6 h-6 align-bottom relative mr-3"
                  type="checkbox"
                />
                {{ item.suggestion }}
              </label>
            </li>
            <li>
              <div class="flex">
                <a class="cursor-pointer" @click="addCustomSuggestion(customSuggestion)">
                  <img class="bg-white p-1 w-6 max-w-xs mr-3" src="@/assets/plus.png" />
                </a>
                <input
                  v-model="customSuggestion.suggestion"
                  class="ml-1 text-white bg-transparent text-sm w-full"
                  type="text"
                  style="border-bottom: 1px solid #fff;"
                />
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
    <div class="left-0 bottom-0 w-full fixed p-6 bg-outer-space">
      <div class="button-group">
        <button
          class="w-24 p-1 float-left bg-limed-spruce text-sunglow rounded-md"
          type="back"
        >Previous</button>
        <button
          class="w-24 p-1 float-right bg-sunglow text-limed-spruce rounded-md"
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
        {  suggestion: 'Enjoy using it', checked: false },
        {  suggestion: 'I am whoever I want to be', checked: false },
        {  suggestion: 'Chat with friends', checked: false },
        { suggestion: 'Staying up to date with events', checked: false }
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
      suggestion.checked = false;
      console.log(this.checkedSuggestions)
    },
    addCustomSuggestion(customSuggestion) {
      this.suggestions.push({ suggestion: customSuggestion.suggestion })
      this.customSuggestion.suggestion = '';
      console.log(customSuggestion)
    },
    saveInDatabase(){
      console.log('not implemented');
    }
  },
  components: {
    Icon
  }
}
</script>

