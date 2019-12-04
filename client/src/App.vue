<template>
  <div id="app">
    <!-- <h1 v-for="(item, index) in workouts" :key="index">{{item.title}}</h1> -->
    <router-view class="router-container" />
    <Tabs class="tabs-container"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Tabs from "@/views/Tabs.vue";
export default {
  name: 'app',
  components: {
    Tabs
  },
  mounted() {
    this.$store.dispatch('loadWorkouts');
    this.$store.dispatch('loadStats')
  },
  computed: {
    ...mapState([
      'workouts'
    ])
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}



.router-container {
  overflow-x:visible;
  overflow-y: scroll;
  
}


body { margin: 0; }
</style>
