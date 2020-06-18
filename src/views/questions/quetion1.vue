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
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">1</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">2</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">3</button>
    </div>
    <div class="mt-1 flex">
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">1</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">2</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">3</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">4</button>
    </div>
    <div class="mt-1 flex">
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">1</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">2</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">3</button>
    </div>
    <div class="mt-1 flex">
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">1</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">2</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">3</button>
        <button class="flex-1 font-serif text-pampas-700 text-center border-2 border-pampas px-4 py-2 m-2 rounded-lg">3</button>
    </div>
    <footer class="left-0 bottom-0 w-full fixed p-6 bg-outer-space">
      <div class="button-group">
        <button class="w-24 p-1 font-serif float-left bg-limed-spruce text-pampas rounded-md">Cancel</button>
        <button class="w-24 p-1 font-serif float-right bg-pampas text-limed-spruce rounded-md">Next</button>
      </div>
    </footer>
</div>
</template>
<script>

export default {
  name: 'introquiz1'
}
</script>