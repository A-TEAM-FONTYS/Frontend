//import someService from "@/services/UsageService"

const state = {
  app: {},
  apps: []
}

const getters = { /*
  getAppById: state => id => {
    return state.apps.find(app => app.id == id)
  },
  getAppTotalUsage: (state, getters) => id => {
    return state.apps
  }*/

}

const mutations = {/*
  SET_APPS(state, apps) {
    state.apps = apps
  }*/
}

const actions = {/*
  fetchApps({ commit }) {
    someService.getApps()
      .then(response => {
        commit("SET_APPS", response)
      })
      .catch(error => {
        console.log("ERROR: " + error)
      })
  }*/

}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}