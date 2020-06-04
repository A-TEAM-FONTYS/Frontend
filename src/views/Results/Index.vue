<template>
  <div class="py-6 px-6 text-pampas font-serif w-full sm:w-2/3 sm:mx-auto">
    <div class="flex justify-between">
      <h1 class="text-2xl">App usage</h1>
      <img src="@/assets/quizArt.png" class />
    </div>
    <div class="flex flex-col mt-4">
      <Quiz />
    </div>
  </div>
</template>

<script>
import Quiz from '@/components/quiz/OverViewComponent'
export default {
  components: {
    Quiz
  }
}
</script>

<style>
</style>