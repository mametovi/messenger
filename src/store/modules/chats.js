export default {
  state: {
    // chats: [{name: "sdcsdc"}, {name: "sdcsdc"}]
    chats: [],
    chat: {}
  },

  getters: {
    chats: (state) => {
      return state.chats
    },
    
  },

  mutations: {
    setChats(state, chats) {
      state.chats = chats 
    },
  },

  actions: {

    // getChats({commit}, contacts) {

    //   commit.setContacts(contacts)

    // },
    
  }

}