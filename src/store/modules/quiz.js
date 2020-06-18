import api from '@/services/quiz.js'

export default {
  namespaced: true,
  state: {
    quiz: [],
    questions: [],
    loading: false,
    error: null
  },
  mutations: {
    SET_QUIZ: (state, quiz) => (state.quiz = quiz),
    SET_QUESTIONS: (state, questions) => (state.questions = questions),
    SET_LOADING(state, payload) {
      state.loading = payload
    },
    SET_ERROR(state, payload) {
      state.error = payload
    }
  },
  actions: {
    createNewQuiz({ commit }) {
      commit('SET_LOADING', true)
      return api
        .postNewQuiz()
        .then(data => {
          commit('SET_QUIZ', data)
          commit('SET_ERROR', null)
          commit('SET_LOADING', false)
        })
        .catch(error => {
          commit('SET_ERROR', error.response.data)
          commit('SET_LOADING', false)
        })
    },
    getQuizQuestions({ commit }) {
      commit('SET_LOADING', true)
      return api
        .getQuizQuestions()
        .then(data => {
          commit('SET_QUESTIONS', data)
          commit('SET_ERROR', null)
          commit('SET_LOADING', false)
        })
        .catch(error => {
          commit('SET_ERROR', error.response.data)
          commit('SET_LOADING', false)
        })
    }
  },
  getters: {
    loading: state => state.loading,
    error: state => state.error,
    questions: state => state.questions
  }
}
