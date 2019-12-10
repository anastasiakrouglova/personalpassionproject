<template>
  <div class="detail">
    <router-link @click="stop()" class="arrowback" to="/"><ArrowBackIcon class="arrowback" w="30" h="30" /></router-link>
    <div class="column">
      <router-link  v-bind:to="'/detail/' + $route.params.id + '/launch'"><span  @click="socketToevoegen()"><PlayIcon class="button-start-workout" style="fill: white" w="25" h="25"/></span></router-link>
    </div>
    <img class="img-detail" :src="'/assets/img/cover/' + this.$store.state.workouts[$route.params.id - 1].img + '.png'" alt="img">
    <div class="detail-container">
      <div class="info-container">
        <div>
          <IosTimeIcon w="25" h="25"/>
          <p> {{this.$store.state.workouts[$route.params.id - 1].time}} </p>
        </div>
        <div>
          <IosMusicalNoteIcon w="25" h="25" />
          <p> {{this.$store.state.workouts[$route.params.id - 1].song}} </p>
        </div>
        <div>
          <img v-if="this.$store.state.workouts[$route.params.id - 1].level === 'beginner'" class="level-icon" src="/assets/img/level/level1.svg" alt="level">
          <img v-if="this.$store.state.workouts[$route.params.id - 1].level === 'easy'" class="level-icon" src="/assets/img/level/level2.svg" alt="level">
          <img v-if="this.$store.state.workouts[$route.params.id - 1].level === 'intermediate'" class="level-icon" src="/assets/img/level/level3.svg" alt="level">
          <img v-if="this.$store.state.workouts[$route.params.id - 1].level === 'experienced'" class="level-icon" src="/assets/img/level/level4.svg" alt="level">
          <p> {{this.$store.state.workouts[$route.params.id - 1].level}} </p>
        </div>       
      </div>
      <h1> {{this.$store.state.workouts[$route.params.id - 1].title}}</h1>
      <p class="info-text">In kunstschaatsen is het zeer belangrijk om goed op je landing te letten. Hoe gecontrolleerder en sterker, hoe meer punten je zult krijgen van de jury. Deze workout is daarom dus een harde training om je been en buikspieren te versterken.</p>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import ArrowBackIcon from 'vue-ionicons/dist/md-arrow-back'
import IosMusicalNoteIcon from 'vue-ionicons/dist/ios-musical-note.vue'
import IosTimeIcon from 'vue-ionicons/dist/ios-time.vue'
import PlayIcon from 'vue-ionicons/dist/md-play'

export default {
  name:'App',
  components: {
    ArrowBackIcon, IosMusicalNoteIcon, IosTimeIcon, PlayIcon
  },
  data () {
    return {
      loading: 'getLoadingState',
      //socket: {},
    }
  },
  created() {
    this.socket = io("http://localhost:3000");
    //this.socket = io("https://mirrorcontrol.herokuapp.com/");
  },
  methods: {
    socketToevoegen() {
      this.$store.state.videoSrc = this.$store.state.workouts[this.$route.params.id - 1].img
      //console.log(this.$store.state.videoSrc);
      this.$store.dispatch('sendSocket');
    }
  }
}
</script>


<style>
  .arrowback {
  display: flex;
  margin: 1rem;
  z-index: 1;
  fill: white;
  position: absolute;
  }

.button-start-workout {
  width: 5rem;
  height: 5rem;
  z-index: 1;
  position: absolute;
  background-color:rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}

  .column a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-left: -3.5rem;

  }

  .detail {
    height: 100vh;
  }

  .img-detail {
    background-color: black;
    width: 100%;
    z-index: -1;
    position: absolute;
    left: 0;
    margin-top: -4rem;

  }

  .detail-container {
    z-index: 2;
    background-color: white;
    box-shadow: 0rem -0.6rem 0.5rem rgba(0, 0, 0, 0.2);
    border-radius: 2rem;
    padding-top: 1rem;
    position: relative;
    margin-top: 16rem;
  }


  .info-container {
    display: flex;
    justify-content:space-between;
    padding: 0rem 2rem;
    font-size: 0.8rem;
    font-weight: bold;
  }


  .level-icon {
    padding: 0.9rem 0rem 0.2rem 0rem;
  }

.info-text {
  padding: 0rem 1rem 7rem 1rem;
}


</style>