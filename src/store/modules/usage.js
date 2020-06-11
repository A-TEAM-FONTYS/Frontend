import api from '@/services/usage.js'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_USAGE_DATA: (state, data) => (state.data = data)
    ,
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ERROR(state, payload) {
      state.error = payload
    }
  },
  actions: {
    async getUsageData({ commit }) {
      return api
        .getUsageData()
        .then(data => {
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
    allAppData: state => state.data,

    loading: state => state.loading,

    error: state => state.error,



  }
}
