import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mask: true
  },
  mutations: {
    maskOnOff (state, type) {
      if (type === 'on') {
        state.mask = true
      } else {
        state.mask = false
      }
    }
  },
  actions: {

  }
})
