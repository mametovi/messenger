<template>
  <div>
    <div id="hangout">
      <b-container>
        <div class="cel-set">
          <div
            class="list-header d-flex align-items-center justify-content-between"
          >
            <div class="header-title">Messanger</div>

            <div class="cel-logo d-flex align-items-centerr">
              <div
                class="person"
                @click="$router.push({ name: 'CreatingElements' })"
              >
                <img src="@/assets/svg/add-user.svg" alt="" />
              </div>
              <div class="search" @click="$router.push({ name: 'Search' })">
                <img src="@/assets/svg/loupe.svg" alt="" />
              </div>
            </div>
          </div>

          <div class="list-set">
            <div class="list-wrap-setting">
              <img :src="require('@/assets/svg/home.svg')" alt="" />
              <div class="list-title">Home</div>
              <div class="recent-times"></div>
            </div>
            <div class="list-wrap-setting">
              <img :src="require('@/assets/svg/notification.svg')" alt="" />
              <div class="list-title">Dolor sit</div>
              <div class="recent-times"></div>
            </div>
            <div class="list-wrap-setting">
              <img :src="require('@/assets/svg/email.svg')" alt="" />
              <div class="list-title">Ipsum dolor</div>
              <div class="recent-times"></div>
            </div>
            <div class="list-wrap-setting">
              <img :src="require('@/assets/svg/settings.svg')" alt="" />
              <div class="list-title">Sit ammet</div>
              <div class="recent-times"></div>
            </div>
          </div>
          <div class="list-out" @click="$router.push({ name: 'Registration' })">
            <img :src="require('@/assets/svg/log-out.svg')" alt="" />
            <div class="out-title">Log-out</div>
          </div>

          <div class="rout">
            <b-button variant="primary" @click="getDarkMode">
              <img  :src="require('@/assets/svg/night-mode.svg')" alt="">
            </b-button>
            <b-button variant="primary" @click="getWhiteMode">
               <img  :src="require('@/assets/svg/sun.svg')" alt="">
            </b-button>
          </div>

          <layout></layout>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import layout from '@/_layout/Main'
export default {
  name: "Settings",
  components: {
    "layout": layout
  },

  data() {
    return {
    }
  },

  methods: {
    getDarkMode() {

      localStorage.setItem("themeColor", "dark.blue");

      location.reload();
    },

    getWhiteMode() {

      localStorage.setItem("themeColor", "dark.orange");

      location.reload();
    },
  }

};
</script>