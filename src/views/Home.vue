<template>
  <div
    class="font-serif bg-outer-space h-screen w-screen p-6 text-pampas w-full sm:w-2/3 sm:mx-auto"
  >
    <div class="flex justify-between items-center mb-6">
      <div class="flex flex-col">
        <span class="block w-full text-2xl">Welcome,</span>
        <span class="font-medium text-2xl">{{ user.firstName }}</span>
      </div>
      <img src="@/assets/treeArt.png" class="w-32" />
    </div>
    <div class="bg-limed-spruce rounded-md p-3 overflow-hidden mb-20">
      <div class="relative z-10">
        <img
          src="@/assets/dotsArt.png"
          class="absolute -bottom-8 -right-24 transform rotate-90 -z-1"
        />
        <a href="/quiz/setup">
          <div class="flex flex-col p-2">
            <div class="text-sm mb-2 text-green-mist">Setup</div>
            <h3 class="text-2xl">Start the intro quiz!</h3>
          </div>
        </a>
      </div>
    </div>

    <div class="-mt-16">
      <div class="flex justify-center">
        <div
          class="bg-pampas w-20 h-20 rounded-full border-8 border-outer-space"
        >
          <Icon
            name="pen-tool"
            :width="32"
            :height="32"
            class="text-limed-spruce m-4"
          />
        </div>
      </div>
      <div
        class="-mt-10 pb-4 bg-limed-spruce rounded-md text-center overflow-hidden"
      >
        <div class="relative z-10">
          <div @click.prevent="startNewQuiz">
            <img
              src="@/assets/circlesArt.png"
              class="absolute -top-8 -left-8 transform rotate-45 -z-1"
            />
            <img
              src="@/assets/circlesArt.png"
              class="absolute -bottom-16 -right-16 transform rotate-45 -z-1"
            />
            <div class="inline-block align-bottom">
              <h3 class="text-2xl mt-12">Do your daily quiz</h3>
              <p class="text-xs">Become aware of your app usage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-6">
      <div class="w-1/2 mr-6">
        <div class="bg-limed-spruce rounded-md p-3 overflow-hidden">
          <div class="relative z-10">
            <img
              src="@/assets/linesArt.png"
              class="absolute -bottom-4 -right-16 transform rotate-45 -z-1"
            />
            <h4 class="text-green-mist text-xs uppercase tracking-widest">
              Day Streak
            </h4>
            <div class="mt-2">
              <div class="flex">
                <span class="text-4xl text-form-green leading-10">0</span>
                <span class="text-xs ml-2 leading-10 tracking-wide">days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="bg-limed-spruce rounded-md p-3 overflow-hidden">
          <div class="relative z-10">
            <img
              src="@/assets/dotsArt.png"
              class="absolute -bottom-4 -right-24 transform rotate-90 -z-1"
            />
            <h4 class="text-green-mist text-xs uppercase tracking-widest">
              Sessions
            </h4>
            <div class="mt-2">
              <div class="flex items-end">
                <span class="text-4xl leading-10">0</span>
                <span class="text-xs ml-2 leading-10 tracking-wide"
                  >completed</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/base/IconComponent'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Icon
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('quiz', ['createNewQuiz', 'getQuizQuestions']),
    startNewQuiz() {
      this.createNewQuiz().then(() => {
        this.getQuizQuestions().then(() => {
          this.$router.push('/quiz')
        })
      })
    }
  }
}
</script>

<style></style>
