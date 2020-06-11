import api from '@/services/api.js'

export default {
  getUsageData() {
    return api.get('data')
  }
}
