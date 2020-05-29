<template>
  <nav class="navbar text-limed-sprouce flex items-center fixed bottom-0 left-0 w-full">
    <div class="container mx-auto px-8 flex justify-between">
      <router-link :to="{ name: 'entries.index' }" class="opacity-50">
        <Icon name="clock" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
</style>