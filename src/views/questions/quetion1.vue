<template>
<div class="bg-outer-space h-max w-max p-6 text-pampas">
    <div>
      <h1 class="font-serif text-3xl">Question 1
      </h1>
    </div>
      <div class="flex justify-center">
        <div class="w-20 h-20 rounded-full bg-pampas border-8 border-outer-space">
          <img class="mt-4 mx-4" src="@/assets/eye.png">
        </div>
      </div>
      <div class="-mt-10 w-full h-32 bg-limed-spruce rounded-lg text-center text-pampas">
        <div class="inline-block align-bottom">
          <h2 class="text-l font-serif font-bold mt-12">Which of the following apps do you use on a daily basis?</h2>
          <p class="text-xs font-serif font-light">You can select multiple.</p>
        </div>
      </div>
    <div class="mt-5 flex">
        <v-button name="Snapchat"></v-button>
        <v-button name="Facebook"></v-button>
        <v-button name="Twitter"></v-button>
    </div>
    <div class="mt-1 flex">
        <v-button name="Reddit"></v-button>
        <v-button name="Netflix"></v-button>
        <v-button name="Discord"></v-button>
        <v-button name="Tiktok"></v-button>
    </div>
    <div class="mt-1 flex">
       <v-button name="LinkedIn"></v-button>
       <v-button name="Imgur"></v-button>
       <v-button name="Instagram"></v-button>
    </div>
    <div class="mt-1 flex">
        <v-button name="Youtube"></v-button>
        <v-button name="Tinder"></v-button>
        <v-button name="Pinterest"></v-button>
        <v-button name="Tumblr"></v-button>
    </div>
    <v-numberinput></v-numberinput>
    <v-footer></v-footer>
</div>
</template>
<script>
    import Button from '@/components/Questions/buttonComponent.vue'
    import Footer from '@/components/Questions/footer.vue'

    export default {
    components:{
      'v-button' : Button,
      'v-footer' : Footer
    }
}
</script>