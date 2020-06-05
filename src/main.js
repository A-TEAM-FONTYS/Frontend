import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
