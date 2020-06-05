<template>
  <div
    id="app"
    class="w-full h-screen"
    :class="
      this.$route.path == '/login' || this.$route.path == '/register'
        ? 'bg-pampas'
        : 'bg-limed-spruce'
    "
  >
    <notifications group="auth" class="my-style" position="top center" />
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
    <NavBar
      v-if="this.$route.path != '/login' && this.$route.path != '/register'"
    />
  </div>
</template>

<script>
import NavBar from '@/components/base/NavBarComponent'

const DEFAULT_TRANSITION = 'fade'

export default {
  data: () => ({
    transitionName: DEFAULT_TRANSITION
  }),
  components: {
    NavBar
  },
  watch: {
    $route(to, from) {
      let transitionName = to.meta.transitionName || from.meta.transitionName

      if (transitionName === 'slide') {
        const toPath = to.path
        transitionName = toPath === '/register' ? 'slide-right' : 'slide-left'
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION
    }
  }
}
</script>

<style lang="postcss">
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
