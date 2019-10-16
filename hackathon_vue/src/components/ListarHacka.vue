<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Lista hackathon</h4>
            <ul>
                <li v-for="(hackathon, index) in hackathons" :key="index">
                    <router-link :to="{
                            name: 'hackathon',
                            params: { hackathon: hackathon, id: hackathon.id }
                        }">
                            {{hackathon.tema}}      
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "hackathon",
  data() {
    return {
      hackathons: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveHackathons() {
      http
        .get("/hack/hackathons")
        .then(response => {
          this.hackathons = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveHackathons();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveHackathons();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>
