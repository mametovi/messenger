export default {
  state: {
    contacts: [],
    contact: {}
  },

  getters: {
    contacts: (state) => {
      return state.contacts
    },
    contact: (state) => (id) => {
      return state.contacts.find(contact => contact.id === id)
    }
  },

  mutations: {
    setContacts(state, contacts) {
      state.contacts = contacts 
    },

    pushContact(state, contact) {
       console.log(contact)
       
      state.contacts.push(contact)
    
    }
  },

  actions: {
    getContacts({commit}, contacts) {
      commit.setContacts(contacts)
    }
  }

}
