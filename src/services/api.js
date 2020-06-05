import axios from 'axios'
import Vue from 'vue'

const service = axios.create({
  baseURL: 'https://fitphone-ateam.herokuapp.com/',
  withCredentials: false
})

service.interceptors.request.use(config => {
  const user = localStorage.getItem('user')
  if (user && user.token) {
    config.headers.common['Authorization'] = 'Bearer' + user.token
  }
  return config
})

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response && error.response.data) {
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
