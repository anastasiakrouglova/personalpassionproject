<template>
  <div class="training-container">
    <router-link class="arrowback" to="/"><ArrowBackIcon class="arrowback-training" w="30" h="30" /></router-link>
    <video class="video-workout" ref="videoTraining" @ended="onPlayerEnded()" autoplay :src="'/assets/video/' + this.$store.state.workouts[$route.params.id - 1].img + '.mp4'" width=300></video>
    <div>
      <span  @click="play()"><PlayIcon  class="play-control-item play" v-show="!isPlaying" w="30" h="30"/></span>
      <span @click="pauze()"><PauseIcon class="play-control-item pauze" v-show="isPlaying" w="30" h="30"/></span>
      <!-- <div>
        <md-progress-bar md-mode="determinate" :md-value="amount"></md-progress-bar>
        <md-progress-bar class="md-accent" md-mode="determinate" :md-value="amount"></md-progress-bar>
        <input type="range" v-model.number="amount"> {{ amount }}%
      </div> -->
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import PlayIcon from 'vue-ionicons/dist/md-play'
import PauseIcon from 'vue-ionicons/dist/md-pause'
import ArrowBackIcon from 'vue-ionicons/dist/md-arrow-back'
// import { mdProgressBar } from 'vue-material/dist/components'

export default {
  name:'App',
  components: {
    PlayIcon, PauseIcon, ArrowBackIcon
    //  mdProgressBar
  },
  data () {
    return {
      isPlaying: true,
      amount: 50
    }
  },
  created() {
    this.socket = io("https://mirrorcontrol.herokuapp.com/");
    //console.log(this.socket);
  },
  methods: {
    play () {
      this.$store.dispatch('playVideoSocket');
      this.$refs.videoTraining.play();
    if (this.isPlaying === false) {
        this.isPlaying = true;
    } else {
      this.isPlaying = false;
    }
  },
  pauze () {
    this.$store.dispatch('pauzeVideoSocket');
    this.$refs.videoTraining.pause();
    if (this.isPlaying === false) {
        this.isPlaying = true;
    } else {
      this.isPlaying = false;
    }
  },
  onPlayerEnded() {
    this.$store.state.workoutDone = 'true';
    this.$store.dispatch('postWorkoutifDone')
    this.$router.push('/chart');
  }
}
}
</script>

<style>

.arrowback-training {
  fill: white;
  text-align: left;
  padding-left: 2rem;
  padding-top: 2rem;
}
.md-progress-bar {
    margin: 24px;
  }

.video-workout {
  margin-top: -2rem;
}

.pauze {
  background-image: url(https://himalayasingh.github.io/audio-player-play-and-pause-animation-1/img/bg.gif);
  background-size: 13rem;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 0rem;
  margin: -1rem;
  padding: 2.6rem 1rem 0rem 1rem;
  color: white;
  height: 8rem;
  overflow-x: hidden;
}

.play {
  background-image: url(https://himalayasingh.github.io/audio-player-play-and-pause-animation-1/img/f1.gif);
  background-size: 13rem;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: -1rem;
  margin: 0rem;
  padding: 1.6rem 1rem 0rem 1rem;
  color: white;
  height: 8rem;
  overflow-x: hidden;
}

.play-control-item {
  fill: white;
}

.training-container {
  background-color: black;
  height: 100%;
}
</style>