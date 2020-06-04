<template>
  <div class="py-6 px-6 text-pampas font-serif">
    <div class="flex justify-between">
      <h1 class="text-2xl">App usage</h1>
      <div class="flex justify-end">
        <img src="@/assets/quizArt.png" class />
      </div>
    </div>
    <div class="flex flex-col">
      <Quiz />
      <div>yeet</div>
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