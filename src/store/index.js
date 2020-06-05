import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user.js'

import app from '@/store/modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user
  }
})
