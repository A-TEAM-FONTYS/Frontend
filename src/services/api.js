import axios from 'axios'
import Vue from 'vue'
import router from '../router'

const service = axios.create({
  baseURL: 'https://fitphone-ateam.herokuapp.com/',
  withCredentials: false
})

service.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.token) {
    config.headers.common['Authorization'] = 'Bearer ' + user.token
  }
  return config
})

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (
      error.response &&
      error.response.data &&
      router.currentRoute.path !== '/stats'
    ) {
      // handle your errors here.
      Vue.notify({
        group: 'auth',
        type: 'error',
        duration: 4000,
        title: 'Oops! something went wrong',
        text: error.response.data
      })
    }
    return Promise.reject(error)
  }
)

export default service
