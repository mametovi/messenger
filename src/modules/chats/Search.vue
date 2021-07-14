<template>
  <div>
    <div id="hangout">
      <b-container>
        <div class="cel">
          <div class="search-user" @click="$router.push({ name: 'SubSearch' })">
            <b-input-group class="mbasic">
              <b-form-input
                aria-label="Text input with checkbox"
                placeholder="Write your message…"
              ></b-form-input>
            </b-input-group>
          </div>
          <div class="search-logo">
            <div class="search" @click="$router.push({})">
              <img src="@/assets/svg/loupe.svg" alt="" />
            </div>
          </div>

          <div class="list">
            <div class="search-list-user">
              <div
                v-for="(user, key) in contacts"
                :key="key"
                @click="getChatUrl(user.id)"
                class="search-list-wrap">
                <img :src="require('@/assets/img/' + user.img)" alt="" />
                <c-user :name="user.title" />

              </div>
            </div>
            
          </div>

          <layout></layout>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import data from "@/data/contacts.json";
import chats from "@/data/chats.json";

import User from "@/components/Contact";

import layout from "@/_layout/Main";

import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "Contacts",
  components: {
    "c-user": User,
    layout: layout,
  },

  data() {
    return {
      character: "",
      search: "",
      todos: [],
    };
  },

  computed: {
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