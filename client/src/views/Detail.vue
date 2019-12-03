<template>
  <div class="detail">
    <router-link @click="stop()" class="arrowback" to="/"><ArrowBackIcon class="arrowback" w="30" h="30" /></router-link>
    <h1> {{this.$store.state.workouts[$route.params.id - 1].title}}</h1>
    <p> {{this.$store.state.workouts[$route.params.id - 1].time}} </p>
    <div class="column">
      <router-link  v-bind:to="'/detail/' + $route.params.id + '/launch'"><span class="button-start" @click="socketToevoegen()">start now</span></router-link>
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
      //socket: {},
    }
  },
  created() {
    this.socket = io("https://mirrorcontrol.herokuapp.com/");
    console.log(this.socket);
  },
  methods: {
    socketToevoegen() {
      this.$store.dispatch('sendSocket');
      //this.$store.dispatch('sendSocket');
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

  .detail {
    height: 100vh;
  }
</style>