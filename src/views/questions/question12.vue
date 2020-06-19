<template>
<div class="bg-outer-space h-max w-max p-6 text-pampas">
    <div>
      <h1 class="font-serif text-3xl">Question 12
      </h1>
    </div>
      <div class="flex justify-center">
        <div class="w-20 h-20 rounded-full bg-pampas border-8 border-outer-space">
          <img class="mt-4 mx-4" src="@/assets/user-plus.png">
        </div>
      </div>
      <v-header header="Are you satisfied with how many friends/followers you have on social media?"></v-header>
         <div class="mt-5 flex flex-col">
        <v-button name="Yes, I am"></v-button>
        <v-button name="I don't care about the amount"></v-button>
        <v-button name="Not really"></v-button>
    </div>
    <v-footer></v-footer>
</div>
</template>

<script>
    import Button from '@/components/Questions/buttonComponent.vue'
    import Header from '@/components/Questions/header.vue'
    import Footer from '@/components/Questions/footer.vue'

    export default {
    components:{
      'v-footer' : Footer,
      'v-header' : Header,
      'v-button' : Button
    }
}
</script>