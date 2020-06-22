import api from '@/services/user.js'

export default {
  namespaced: true,
  state: {
    user: null,
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
    },
    CLEAR_DATA(state) {
      state.error = null
      state.loading = null
      state.user = null
    }
  },
  actions: {
    login({ commit }, credentials) {
      return api
        .login(credentials)
        .then(res => {
          // set user object with token
          const user = res.user
          user['token'] = res.token

          commit('SET_USER_DATA', user)
          commit('SET_ERROR', null)
          commit('SET_LOADING', false)
        })
        .catch(error => {
          // If the request fails, remove user token
          commit('CLEAR_DATA')
          commit('SET_ERROR', error)
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

          commit('SET_USER_DATA', user)
          commit('SET_ERROR', null)
          commit('SET_LOADING', false)
        })
        .catch(error => {
          // If the request fails, remove user token
          commit('CLEAR_DATA')
          commit('SET_ERROR', error)
          commit('SET_LOADING', false)
          console.log(error)
        })
    },
    logout({ commit }) {
      // remove user from localStorage and force refresh
      commit('CLEAR_DATA')
      location.reload()

      commit('SET_ERROR', null)
      commit('SET_LOADING', false)

      this.$router.push('/login')
    }
  },
  getters: {
    loading: state => state.loading,

    user: state => state.user,

    error: state => state.error,

    isAuthenticated: state => !!state.user
  }
}
