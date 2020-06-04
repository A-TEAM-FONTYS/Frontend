import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("../views/Stats/Index.vue")
  },
  {
    path: "/results",
    name: "results",
    component: () => import("../views/Results/Index.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
