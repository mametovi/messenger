<template>
  <div>
    <div id="hangout">
      <b-container>
        <div class="user-heder__bootom">
          <div class="user-header">
            <div class="user-heder__wrap">
              <div class="user-return">
               <div class="list-header d-flex align-items-center justify-content-between">
                <div class="user-item">
                  <img :src="require('@/assets/img/' + userContact.img )" alt="" />

                  <div></div>
                  <div class="user-span" >{{ userContact.title }}</div>
                </div>

                <div class="cel-logo d-flex align-items-centerr">
                  <div class="person" @click="$router.push({ name: 'CreatingElements' })">
                    <img src="@/assets/svg/add-user.svg" alt="">
                  </div>
                  <div class="search" @click="$router.push({ name: 'Search' })">
                    <img src="@/assets/svg/loupe.svg" alt="">
                  </div>
                </div>
              </div>
              </div>
              
            </div>
          </div>

          <div class="user-text">
            <div class="cardWrapper">
              <article class="msgCard">
                <div class="cardContent">
                  <p class="sent-message" v-for="(chat, key) in messages" :key="key" :class="className(chat.sender)" >
                     
                    {{ chat.text }}

                    <span>{{ chat.time }}</span>
                  </p>
                  <p class="incoming-message" >
                   
                  </p>
                                  
                </div>
              </article>

              <!-- admin-1 -->
            </div>
          </div>

           <div class="input-user">
             <div class="files">  
               <img :src="require('@/assets/svg/paper-clip.svg')" alt="" class="img-svg">
             </div>

             
             <b-input-group class="mbasic">
              <b-form-input aria-label="Text input with checkbox" v-model="newTodoText" placeholder="Write your message…"></b-form-input>
            </b-input-group>
             

             <div class="button" @click="addMessage">  
               <img :src="require('@/assets/svg/send.svg')" alt="">
             </div>
           </div>
              
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import chats from "@/data/chats.json";
import data from "@/data/contacts.json";


import { mapMutations, mapGetters} from "vuex";

export default {
  name: "ChatItem",
  components: {
  },

  data() {
    return {
      chatId: this.$route.params.id,
      chat: '',
      date: '',
      chatText: '',
      newTodoText: '',
      messages: [],
      userId: '',
      mainUserId: 1,
    };
  },

  computed: {
    ...mapGetters(["contacts", "contact", "chats", ]),

    userContact() {
      return this.$store.getters.contact(this.userId)
    }
  },

  methods: {
    // ...mapMutations(["setChats"]),
    ...mapMutations(["setContacts", "setChats"]),

    getChat(id) {
      for (let i = 0; i < this.chats.length; i++) {
        const checkUser = this.chats[i].id == id;         

        if (checkUser) {
          this.chat = this.chats[i];
        }
      }
    },

    getUser() {
      for(let i in this.chat.users) {
        if(this.chat.users[i] !== this.mainUserId) {
          this.userId = this.chat.users[i]
        }
      }
    },

    className(sender) {       
        if(sender === 1) {
          return 'chat__outher'   
        } else {
          return 'chat__sender'
        }
    },

    addMessage() {
      const date = new Date()
      const h = date.getHours()
      const m = date.getMinutes()
      const data = {
        sender: 1,
        time: `${h}:${m}`,
        text: this.newTodoText
      }

      this.messages.push(data)
    },

    messageRemove() {
      this.messages.replace('-1')
    }

  },

  mounted() {
    this.setChats(chats.data);

    this.getChat(this.chatId);
    
    this.getUser();

   


    this.messages = this.chat.messages
    
    this.setContacts(data.data);

    // console.log(this.chat.messages)
  },
};
</script>


