<template>
  <div id="app">
    <!-- <div :class="connectedClass">spiegel is connected: {{socketConnected}}</div> -->
    <div class="spiegel-container">
      <div :class="connectedClass"></div>
      <img class="spiegelConnected-img" src="/assets/img/mirror.svg" alt="mirror" width=35>
    </div>
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
    this.$store.dispatch('loadHeartRate')
  },
  computed: {
    ...mapState([
      'workouts',
      'socketConnected'
    ]),
    connectedClass() {
      // if (socketConnected) {
      //   let socketConnectedd = this.socketConnected
      //   console.log("lalalalla")

      //   return socketConnectedd
      // }
      let socketClass = "socket-true"
      if (this.socketConnected === false) {
        socketClass += " socket-false"

        return socketClass
      }
            // let spanClass = "weekday-container";
            // if (this.dayObject.index === this.todayNumber -1) {
            //     spanClass += " weekday-currentday"
            // }
            // return spanClass;
      //console.log(socketConnected)

      return socketClass
    }
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

.socket-true {
  background-color: #42B500;
  height: 1.3rem;
  color: white;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-top: 1.3rem;
  right: 1.8rem;
  position: absolute;
  box-shadow: -0.2rem 0.2rem 0.3rem 0rem rgba(0,0,0,0.2);
}

.socket-false {
  background-color: #F05E5F;
  height: 1.3rem;
  color: white;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-top: 1.3rem;
  right: 1.8rem;
  position: absolute;
  box-shadow: -0.2rem 0.2rem 0.3rem 0rem rgba(0,0,0,0.2);
}

.spiegel-container {
  display: flex;
  justify-content: flex-end;
}
.spiegelConnected-img {
  padding-right: 2rem;
  margin-bottom: -5rem;
  position: relative;
  z-index: -1;
  
}


body { margin: 0; }
</style>
