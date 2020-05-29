<template>
  <div id="app" class="bg-gray-200 w-full h-screen bg-outer-space">
    <router-view />
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
