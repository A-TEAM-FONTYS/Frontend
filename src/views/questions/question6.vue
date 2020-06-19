<template>
<div class="bg-outer-space h-max w-max p-6 text-pampas">
    <div>
      <h1 class="font-serif text-3xl">Question 6
      </h1>
    </div>
      <div class="flex justify-center">
        <div class="w-20 h-20 rounded-full bg-pampas border-8 border-outer-space">
          <img class="mt-4 mx-4" src="@/assets/message-circle.png">
        </div>
      </div>
      <div class="-mt-10 text-center text-pampas">
        <div class="inline-block align-bottom">
          <h2 class="text-xl font-serif font-bold mt-10">Youtube</h2>
        </div>
      </div>
        <v-question question="At what age did you start using the app?"></v-question>
        <v-numberInput></v-numberInput>
        <v-question question="How many times a day are you using the app?"></v-question>
        <v-numberInput></v-numberInput>
        <div class="mt-10 text-center text-pampas">
            <div class="inline-block align-bottom">
                <p class="text-s font-serif font-light mt-5">How much do you need this app?</p>
                <p class="text-xs font-serif font-light mt-5">(0 not at all, 5 very much so)</p>
            </div>
        </div>
        <v-rating></v-rating>
        <div class="mt-10 text-center text-pampas">
            <div class="inline-block align-bottom">
                <p class="text-s font-serif font-light mt-5">To what extend do you experience it as a problem?</p>
                <p class="text-xs font-serif font-light mt-5">(0 not at all, 5 very much so)</p>
            </div>
        </div>
        <v-rating></v-rating>
      <v-footer></v-footer>
</div>
</template>

<script>
    import Question from '@/components/Questions/askQuestionComponent.vue'
    import Rating from '@/components/Questions/ratingComponent.vue'
    import numberInput from '@/components/Questions/numperinputComponent.vue'
    import Footer from '@/components/Questions/footer.vue'

    export default {
    components:{
      'v-footer' : Footer,
      'v-numberInput' : numberInput,
      'v-rating' : Rating,
      'v-question' : Question
    }
}
</script>