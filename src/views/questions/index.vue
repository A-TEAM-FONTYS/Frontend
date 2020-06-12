<template>
  <div id="app" class="bg-gray-200 w-full h-screen bg-limed-spruce">
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBarComponent'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss"></style>
<div class="bg-outer-space h-max w-max p-6 text-pampas">
    <div>
      <h1 class="font-serif text-3xl">Let's start with some questions
      </h1>
    <div class="row-span-2">
      <div class="flex justify-end">
        <img src="@/assets/Boom.png" class="w-24 h-24"/>
      </div>
    </div>
    </div>
      <div class="flex justify-center">
        <div class="w-20 h-20 rounded-full bg-pampas border-8 border-outer-space">
          <img class="mt-4" src="@/assets/QuestionMark.png">
        </div>
      </div>
      <div class="-mt-10 w-full h-32 bg-limed-spruce rounded-lg text-center text-pampas">
        <div class="inline-block align-bottom">
          <h2 class="text-xl font-serif font-bold mt-12">How are you feeling?</h2>
          <p class="text-xs font-serif font-light">Become aware of your app usage</p>
        </div>
      </div>
      <input
        class="mt-5 bg-transparent rounded-lg text-sm w-full h-16 font-serif text-pampas border-2 border-limed-spruce" placeholder="Enter your answer here."
        type="text"
        />
        <div class="mt-10 w-full h-16 bg-limed-spruce rounded-lg text-center text-pampas">
            <div class="inline-block align-bottom">
                <p class="text-s font-serif font-light mt-5">At what age did you start using social media?</p>
            </div>
        </div>
        <div class="mt-5 text-pampas flex justify-center">
          <input 
          v-model.number="number" type="number" step="1"
          class="bg-transparent rounded-lg font-serif border-2 border-limed-spruce h-auto w-12">
        </div>
        <div class="mt-10 w-full h-16 bg-limed-spruce rounded-lg text-center text-pampas">
            <div class="inline-block align-bottom">
                <p class="text-s font-serif font-light mt-5">In your opinion, when is social media healthy for you?</p>
            </div>
        </div>
        <input
        class="mt-5 bg-transparent rounded-lg text-sm w-full h-16 font-serif text-pampas border-2 border-limed-spruce" placeholder="Enter your answer here."
        type="text"
        />
        <div class="mt-10 w-full h-16 bg-limed-spruce rounded-lg text-center text-pampas">
            <div class="inline-block align-bottom">
                <p class="text-s font-serif font-light mt-5">In your opinion, when is social media unhealthy for you?</p>
            </div>
        </div>
        <input
        class="mt-5 bg-transparent rounded-lg text-sm w-full h-16 font-serif text-pampas border-2 border-limed-spruce" placeholder="Enter your answer here."
        type="text"
        />
        <div class="mt-10 w-full h-16 bg-limed-spruce rounded-lg text-center text-pampas">
            <div class="inline-block align-bottom">
                <p class="text-s font-serif font-light mt-5">How much messages do you think you get on social media daily?</p>
            </div>
        </div>
        <div class="mt-5 text-pampas flex justify-center">
          <input 
          v-model.number="number" type="number" step="1"
          class="bg-transparent rounded-lg font-serif border-2 border-limed-spruce h-auto w-12">
        </div>
        <div class="mt-10 w-full h-16 bg-limed-spruce rounded-lg text-center text-pampas">
            <div class="inline-block align-bottom">
                <p class="text-s font-serif font-light mt-5">How many times do you answer these messages?</p>
            </div>
        </div>
        <div class="mt-5 text-pampas flex justify-center">
          <input 
          v-model.number="number" type="number" step="1"
          class="bg-transparent rounded-lg font-serif border-2 border-limed-spruce h-auto w-12">
        </div>
        <div class="mt-10 w-full h-16 bg-limed-spruce rounded-lg text-center text-pampas">
            <div class="inline-block align-bottom">
                <p class="text-s font-serif font-light mt-5">How much value do you hold for comments on your social media?</p>
            </div>
        </div>
        <div class="mt-5 text-pampas flex justify-center">
          <input 
          v-model.number="number" type="number" step="1"
          class="bg-transparent rounded-lg font-serif border-2 border-limed-spruce h-auto w-12">
        </div>
</div>
</template>
<style scoped>
.number-input input:focus {
  outline: none;
}
.number-input button:focus {
  outline: none;
}
</style>
<script>
export default {
  name: 'questions'
}
</script>

