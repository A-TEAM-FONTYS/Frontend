import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/stats',
    name: 'stats',
    component: () => import('@/views/Stats/Index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('@/views/Quiz/Index.vue'),
    meta: { requiresAuth: true, hideNavigation: true }
  },
  {
    path: '/quiz/setup',
    name: 'quiz.setup',
    component: () => import('@/views/Quiz/Setup.vue'),
    meta: { requiresAuth: true, hideNavigation: true }
  },
  {
    path: '/results',
    name: 'results',
    component: () => import('@/views/Results/Index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { hideNavigation: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { transitionName: 'slide', hideNavigation: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn)
    next('/login')
  else next()
})

export default router
