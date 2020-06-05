import api from '@/services/usage.js'

export default {
  namespaced: true,
  state: {
    usageData: []
  },
  mutations: {
    SET_USAGE_DATA(state, data) {
      state.data = data
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ERROR(state, payload) {
      state.error = payload
    }
  },
  actions: {
    getUsageData({ commit }) {
      return api
        .getUsageData()
        .then(data => {
          console.log(data)
          commit('SET_USAGE_DATA', data)
          commit('SET_ERROR', null)
          commit('SET_LOADING', false)

        })
        .catch(error => {
          commit('SET_ERROR', error.response.data)
          commit('SET_LOADING', false)
        })

    },
  },
  getters: {
    loading: state => state.loading,

    error: state => state.error,

    allData: state => state.usageData

  }
}
