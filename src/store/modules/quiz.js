import api from '@/services/quiz.js'

export default {
  namespaced: true,
  state: {
    quizIndex: 0,
    quizAnswers: [],
    quiz: [],
    questions: [],
    dayStreak: 0,
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
    },
    RESET_STATE(state) {
      state.quizIndex = 0
      state.quizAnswers = null
      state.questions = null
      state.quiz = null
      state.loading = false
      state.error = null
    },
    increment: state => {
      state.quizIndex++
    },
    decrement: state => {
      state.quizIndex--
    },
    incrementDayStreak(state) {
      state.dayStreak++
    },
    saveQuestionAnswer(state, payload) {
      state.quizAnswers.push(payload)
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
    },
    updateQuizAnswers({ commit, getters }) {
      commit('SET_LOADING', true)
      return api
        .putQuizAnswers(getters.quizId, getters.quizAnswers)
        .then(data => {
          console.log(data)
          commit('RESET_STATE')
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
    questions: state => state.questions,
    quizIndex: state => state.quizIndex,
    quizId: state => state.quiz.id,
    quizAnswers: state => state.quizAnswers,
    dayStreak: state => state.dayStreak
  }
}
