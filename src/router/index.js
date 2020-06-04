import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stats',
    name: 'stats',
    component: () => import('../views/Stats/Index.vue')
  },
  {
    path: '/appadvantages', // TODO: '/advantages:appName'
    name: 'appadvantages',
    component: () => import('../views/Exercises/AppAdvantages.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
