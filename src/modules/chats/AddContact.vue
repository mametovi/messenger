<template>
  <div>
    <div id="hangout">
      <div class="adding">
        <div class="adding-header">
          
          <div class="title">Добавить контакт</div>
          <b-icon icon="check2" aria-hidden="true"></b-icon>
        </div>

        <div class="adding-contact">
          <div class="adding-input">
            <div class="adding-input-wrap d-flex align-items-center">
              <div class="adding-form">
                <div class="name d-flex align-items-center">
                  <b-icon icon="person-fill" aria-hidden="true"></b-icon>
                  <b-form-input placeholder="Имя" v-model="form.name"></b-form-input>
                </div>

                <div class="firsname d-flex align-items-center">
                  <b-icon icon="person-circle" aria-hidden="true"></b-icon>
                  <b-form-input placeholder="Фамилия" v-model="form.lastname"></b-form-input>
                </div>
              </div>
            </div>

            
          </div>
          <div class="adding-btn" @click="addContact() + '' + $router.push({name: 'Search'})">
             <b-button variant="primary">Добавить</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import data from "@/data/contacts.json";

export default {
  components: {
  },

  data() {
    return {
      form: {        
        name: '',
        lastname: '',
        phone: '',

        date: '',
        chatText: '',
        newTodoText: '',
        messages: [],
      }
    }
  },

  methods: {
    ...mapMutations(['pushContact', 'setContacts']),

    addContact() {   
       
      this.pushContact({        
        id: '',
        title: this.form.name +" "+ this.form.lastname,
        img: "what.jpg",
        date: '22:10',
      })
    },

    addMessage() {
      const date = new Date()
      const h = date.getHours()
      const m = date.getMinutes()
      const data = {
        time: `${h}:${m}`,
      }

      this.messages.push(data)
    },
    
  },
  
  mounted() {


    this.setContacts(data.data);
  }

};
</script>