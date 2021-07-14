<template>
  <div>
    <div id="hangout">
      <b-container>
        <div class="cels">
          <div class="search-user">
            <b-input-group class="mbasic">
              <b-form-input
                aria-label="Text input with checkbox"
                placeholder="Write your message…"
                v-model="filter"
              ></b-form-input>
            </b-input-group>
          </div>
          <div class="search-logo">
            <div class="search" @click="$router.go(-1)">
              <img src="@/assets/svg/arrow.svg" alt="" />
            </div>
          </div>


          <div class="search-wrapper" :gutter="10">
            <div :lg="12" :md="12" :sm="12" :xs="24">
              <div class="col-space" :lg="6" :md="6" :sm="6" :xs="24">
                &nbsp;
              </div>
            </div>
            <div >
              <div
                v-for="player in getPlayers"
                :key="player">
                <div
                  @click="getChatUrl(player.id)"
                  class="search-list-wrap">

                  <div class="box-logo"><img :src="player.img"></div>

                  <div class="box__subtitle">{{ player.category }}</div>

                 

                </div>
               
              </div>
              <div v-if="getPlayers.length === 0">
                <div class="box box__empty">No Match Found</div>
              </div>
            </div>
          </div>

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

  data: function () {
    return {
      filter: "",
      sort: "",
      options: [
        { label: "Default", value: "none" },
        { label: "Most Viewed", value: "views" },
      ],
      players: [
        {
          category: "Linn Ronning",
          views: 312,
          img: require("@/assets/img/people-1.jpg"),
          id: 2,
        },
        {
          category: "Goldie Mossman",
          views: 23121,
          img: require("@/assets/img/people-2.jpg"),
          id: 3,
        },
        {
          category: "Laree Munsch",
          views: 231,
          img: require("@/assets/img/people-3.jpg"),
          id: 4,
        },
        {
          category: "Brynn Bragg",
          views: 443,
          img: require("@/assets/img/people-4.jpg"),
          id: 5,
        },
        {
          category: "Merle Friberg",
          views: 403,
          img: require("@/assets/img/people-5.jpg"),
          id: 6,
        },
        { 
          category: "Velva Valdovinos", 
          views: 8843,
          img: require("@/assets/img/people-6.jpg"),
          id: 7,
        },
        { 
          category: "Dusti Gioia", 
          views: 8843,
          img: require("@/assets/img/people-7.jpg"),
          id: 8,
        },
        { 
          category: "Philip Nelms", 
          views: 8843,
          img: require("@/assets/img/people-8.jpg"),
          id: 9,
        },
        { 
          category: "Marty Otte", 
          views: 8843,
          img: require("@/assets/img/people-9.jpg"),
          id: 10,
        },
        { 
          category: "Janene Thies", 
          views: 8843,
          img: require("@/assets/img/people-10.jpg"),
          id: 11,
        },
        { 
          category: "Bao Hathaway", 
          views: 8843,
          img: require("@/assets/img/people-11.jpg"),
          id: 12,
        },
        { 
          category: "Ramiro Roark", 
          views: 8843,
          img: require("@/assets/img/people-12.jpg"),
          id: 12,
        },
      ],
    };
  },

  computed: {
    //...mapState(['contacts']),
    ...mapGetters(["contacts", "chats"]),

    getPlayers() {
      var players = this.players.filter((player) => {
        return player.category
          .toLowerCase()
          .includes(this.filter.toLowerCase());
      });

      if (this.sort == "views") {
        return players.sort(function (a, b) {
          return b.views - a.views;
        });
      } else {
        return players;
      }
    },
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
      var images = require.context('@/assets/', false, /\.png$/)
      return images('./' + pet + ".png")
    },
  },

  mounted() {
    this.setContacts(data.data);

    this.setChats(chats.data);
  },
};
</script>