import api from '@/services/user.js'
import router from '@/router/index.js'

export default {
  namespaced: true,
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: null,
    error: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ERROR(state, payload) {
      state.error = payload
    }
  },
  actions: {
    login({ commit }, credentials) {
      return api
        .login(credentials)
        .then(res => {
          console.log(res)
          // set user object with token
          const user = res.user
          user['token'] = res.token

          // put the user in localStorage
          localStorage.setItem('user', JSON.stringify(user))

          commit('SET_USER_DATA', user)
          commit('SET_ERROR', null)
          commit('SET_LOADING', false)

          router.push('/')
        })
        .catch(error => {
          // If the request fails, remove user token
          localStorage.removeItem('user')
          commit('SET_ERROR', error.response.data)
          commit('SET_LOADING', false)
        })
    },
    register({ commit }, credentials) {
      return api
        .register(credentials)
        .then(res => {
          // set user object with token
          const user = res.user
          user['token'] = res.token

          // put the user in localStorage
          localStorage.setItem('user', JSON.stringify(user))

          commit('SET_USER_DATA', user)
          commit('SET_ERROR', null)
          commit('SET_LOADING', false)

          router.push('/')
        })
        .catch(error => {
          // If the request fails, remove user token
          localStorage.removeItem('user')
          commit('SET_ERROR', error.response.data)
          commit('SET_LOADING', false)
          console.log(error)
        })
    },
    logout({ commit }) {
      // remove user from localStorage and force refresh
      localStorage.removeItem('user')
      location.reload()

      commit('SET_ERROR', null)
      commit('SET_LOADING', false)

      this.$router.push('/login')
    }
  },
  getters: {
    loading: state => state.loading,

    user: state => {
      return state.user != null
        ? state.user
        : JSON.parse(localStorage.getItem('user'))
    },

    error: state => state.error,

    isAuthenticated: state => !!state.user
  }
}
