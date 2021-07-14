import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './modules/contacts'

import chats from './modules/chats'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contacts,
    chats
  }
})
