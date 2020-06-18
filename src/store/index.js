import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import quiz from '@/store/modules/quiz'
import usage from '@/store/modules/usage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    usage,
    user,
    quiz
  }
})
