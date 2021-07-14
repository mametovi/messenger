<template>
  <section>
    <div>
      <!-- <c-user v-for="(user, key) in contacts" :name="user.title" :ava="user.img" :key="key" /> -->
      <div id="hangout">
        <b-container>
        <div class="cel">
          <div class="list-header d-flex align-items-center justify-content-between">
            <div class="header-title">Messanger</div>

            <div class="cel-logo d-flex align-items-centerr">
              <div class="person" @click="$router.push({ name: 'CreatingElements' })">
                <img src="@/assets/svg/add-user.svg" alt="">
              </div>
              <div class="search" @click="$router.push({ name: 'Search' })">
                <img src="@/assets/svg/loupe.svg" alt="">
              </div>
            </div>
          </div>

          <div class="list">
            <div class="list-user">
              <div
                v-for="(user, key) in contacts"
                :key="key"
                @click="getChatUrl(user.id)"
                class="list-wrap"
              >
                <img :src="require('@/assets/img/' + user.img)" alt="">
                <c-user :name="user.title" />
                
                <div class="recent-times">
                  {{user.date}}
                </div>
              </div>
            </div>
            <div class="list-add" @click="$router.push({})">
              <!-- <img :src="require('@/assets/svg/plus.svg')" alt=""> -->
            </div>
          </div>

          <layout></layout>
        </div>
        </b-container>
      </div>
    </div>
  </section>
</template>

<script>
import data from "@/data/contacts.json";
import chats from "@/data/chats.json";

import layout from '@/_layout/Main'

import User from "@/components/Contact";

import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "Contacts",
  components: {
    "c-user": User,
    "layout": layout
  },

  data() {
    return {
      character: "",
    };
  },

  computed: {
    //...mapState(['contacts']),
    ...mapGetters(["contacts", "chats"]),
  },

  methods: {
    ...mapActions(["getContacts"]),
    ...mapMutations(["setContacts", "setChats"]),

    getChatUrl(userId) {
      for (let i = 0; i < this.chats.length; i++) {
        const checkUser = this.chats[i].users.includes(userId);

        if (checkUser) {
          this.$router.replace({
            name: "chatItem",
            params: { id: this.chats[i].id },
          });
          return;
        }
      }
    },

    getImgUrl(pet) {
      var images = require(pet);
      return images;
    },
  },

  mounted() {
    this.setContacts(data.data);

    this.setChats(chats.data);
  },
};
</script>

