<template>
  <div>
    <div id="app">
      <div class="container">
        <div class="search-wrapper" :gutter="10">
          <div :lg="12" :md="12" :sm="12" :xs="24">
            <input
              placeholder="Filter by Name"
              icon="search"
              v-model="filter"
            />

            <div class="col-space" :lg="6" :md="6" :sm="6" :xs="24">&nbsp;</div>
          </div>
          <!-- search wrapper -->

          <div :gutter="10">
            <div
              v-for="player in getPlayers"
              :xs="24"
              :sm="12"
              :md="8"
              :key="player"
            >
              <div class="box">
                <div>{{ player.name }}</div>
                <div class="box__subtitle">{{ player.category }}</div>
              </div>
            </div>

            <div v-if="getPlayers.length === 0" :xs="24" :sm="24" :md="24">
              <div class="box box__empty">No Match Found</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      filter: "",
      sort: "",
      options: [
        { label: "Default", value: "none" },
        { label: "Most Viewed", value: "views" },
      ],
      players: [
        { name: "Charles Wilson", category: "Tech", views: 312 },
        { name: "Tony Domo", category: "none", views: 23121 },
        { name: "Rump Baker", category: "Consulting", views: 231 },
        { name: "Brad Pitt", category: "entertainment", views: 443 },
        { name: "Kermit the Frog", category: "Tech", views: 403 },
        { name: "Taylor Swift", category: "entertainment", views: 8843 },
      ],
    };
  },
  computed: {
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
};
</script>