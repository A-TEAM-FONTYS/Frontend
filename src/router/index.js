import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Questions from '../views/questions/index2.vue'
// import QuestionsIndex from '../views/questions/index.vue'
import IntroQuestion2 from '../views/questions/question2.vue'
// import IntroQuestion11 from '../views/questions/question11.vue'

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
  },
  // {
  //   path: '/',
  //   name: 'introquestion11',
  //   component: IntroQuestion11
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router