<template>
  <div class="py-6 px-6 text-pampas font-serif w-full sm:w-2/3 sm:mx-auto">
    <div class="flex justify-between">
      <span class="text-2xl">Quenstion x</span>

      <Icon
        name="x"
        class="text-sunglow mt-2"
        @click.native="$router.push('/home')"
      />
    </div>
    <div class="mt-16">
      <Question />
    </div>
  </div>
</template>

<script>
import Icon from '@/components/base/IconComponent'
import Question from '@/components/questions/QuestionComponent'

export default {
  components: {
    Icon,
    Question
  }
}
</script>

<style></style>
