import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showTaskForm: false
  },
  mutations: {
    ADD_FORM (state) {
      state.addTaskForm = true
    }
  },
  actions: {
    addForm ({ commit }) {
      commit('ADD_FORM')
    }
  },
  modules: {
  }
})
