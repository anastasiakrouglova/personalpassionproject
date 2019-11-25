<template>
  <div id="app">
    <!-- <h1 v-for="(item, index) in workouts" :key="index">{{item.title}}</h1> -->
    <router-view />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('loadWorkouts')
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
  height: 100vh;
}
</style>
