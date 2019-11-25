<template>
  <div class="stretch">
    <router-link @click="stop()" class="arrowback" to="/"><ArrowBackIcon class="arrowback" w="30" h="30" /></router-link>
    <h1> {{this.$store.state.workouts[$route.params.id - 1].title}}</h1>
    <p> {{this.$store.state.workouts[$route.params.id - 1].time}} </p>
    <div class="column">
      <router-link v-bind:to="'/detail/' + $route.params.id + '/launch'"><span class="button-start">start oefening</span></router-link>
      <!-- <button @click="socketPush()" ref="startbutton">START TRAINING</button> -->
    </div>
  </div>
</template>


<script>
import io from "socket.io-client";
import ArrowBackIcon from 'vue-ionicons/dist/md-arrow-back'

export default {
  name:'App',
  components: {
    ArrowBackIcon
  },
  data () {
    return {
      loading: 'getLoadingState',
      socket: {},
    }
  },
  created() {
    this.socket = io("http://localhost:3000");
    console.log(this.socket);
  },
  // mounted() {
  //   this.startButton = this.$refs.startbutton;
  //   console.log(this.startButton);
  //   this.socket.on("pressed", data => {
  //     console.log("pressed en socket verzonden");
  //     this.pressed = data;
  //   })
  // },
  methods: {
    socketPush() {
      this.startButton = this.$refs.startbutton;
      console.log(this.startButton);
      this.socket.emit("playVideo", data => {
        this.playVideo = data;
      });
    }
  }
}
</script>


<style>
  .arrowback {
  display: flex;
  margin: 1rem;
  }

  .button-start {
  color:white;
  background-color: #3E74B8;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  border-radius: 2rem;
  box-shadow: 0rem 0.3rem 0.5rem rgba(62, 116, 184, 0.3);
  }

  .column a {
    text-decoration: none;
  }
</style>