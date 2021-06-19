import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import product from './modules/product'

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
  modules: {
    counter: counter,
    product: product
  },
  state: {},
  getters: {},
  mutations: {}
})
