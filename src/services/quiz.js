import api from '@/services/api.js'

export default {
  postNewQuiz() {
    return api.post('quiz')
  },
  getQuizQuestions() {
    return api.get('question/daily/category')
  }
}
