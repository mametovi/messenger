<template>
  <div>
    <div id="hangout">
      <b-container>
        <div class="cel-creat">
          <div class="list-header d-flex align-items-center justify-content-between">
            <div class="header-title">Messanger</div>

            <div class="cel-logo d-flex align-items-centerr">
              <div class="person" @click="$router.push({ name: 'CreatingElements' })">
                <img src="@/assets/svg/add-user.svg" alt="" />
              </div>
              <div class="search" @click="$router.push({ name: 'Search' })">
                <img src="@/assets/svg/loupe.svg" alt="" />
              </div>
            </div>
          </div>


          <div class="create-wrap">
            <div class="create-item" @click="$router.push({name: 'AddContact'})">
              <div class="create-bg">
                <img src="@/assets/svg/plus.svg" alt="" />
              </div>
              <div class="create-title">Add contact</div>
            </div>

            <div class="create-item">
              <div class="create-bg">
                <img src="@/assets/svg/teamwork.svg" alt="" />
              </div>
              <div class="create-title">Add Group</div>
            </div>
          </div>

          <div class="create-wrap">
            <div class="create-item">
              <div class="create-bg">
                <img src="@/assets/svg/live.svg" alt="" />
              </div>
              <div class="create-title">Add live</div>
            </div>

            <div class="create-item">
              <div class="create-bg">
                <img src="@/assets/svg/teamwork.svg" alt="" />
              </div>
              <div class="create-title">Add channel</div>
            </div>
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
  name: "CreatingElements",
  components: {
    "layout": layout
  },
};
</script>