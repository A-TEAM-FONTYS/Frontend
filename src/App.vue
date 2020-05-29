<template>
  <div id="app" class="w-full h-screen bg-limed-spruce">
    <router-view />
    <NavBar
      v-if="this.$route.path != '/login' && this.$route.path != '/register'"
    />
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

<style lang="postcss"></style>
