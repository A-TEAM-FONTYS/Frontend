import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import QuestionsIndex from '../views/questions/index.vue'
import IntroQuestion2 from '../views/questions/question2.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'questionsindex',
  //   component: QuestionsIndex
  // },
  // {
  //   path: '/',
  //   name: 'introquestion1',
  //   component: IntroQuestion1
  // },
  {
    path: '/',
    name: 'introquestion2',
    component: IntroQuestion2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
