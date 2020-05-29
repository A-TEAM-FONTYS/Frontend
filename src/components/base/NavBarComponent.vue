<template>
  <nav class="navbar text-limed-sprouce flex items-center fixed bottom-0 left-0 w-full bg-pampas">
    <div class="container mx-auto px-8 flex justify-between">
      <router-link :to="{ name: 'stats' }" class="opacity-50 px-4">
        <Icon name="pie-chart" />
      </router-link>

      <router-link :to="{ name: 'home' }" class="opacity-50 px-4">
        <Icon name="home" />
      </router-link>

      <router-link :to="{ name: 'ranking' }" class="opacity-50 px-4">
        <Icon name="star" />
      </router-link>
    </div>
  </nav>
</template>

<script>
import Icon from '@/components/base/IconComponent'

export default {
  components: {
    Icon
  }
}
</script>

<style scoped>
.navbar {
  height: 56px;
}

.router-link-active {
  opacity: 1;
}

.link {
  padding-bottom: 14.5px;
  padding-top: 14.5px;
}
</style>