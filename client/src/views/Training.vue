<template>
  <div class="training-container">
    <router-link class="arrowback" to="/"><ArrowBackIcon class="arrowback-training" w="30" h="30" /></router-link>

    <h2 class="name-training">{{this.$store.state.workouts[$route.params.id - 1].title}} </h2>
    <video muted class="video-workout" ref="videoTraining" @ended="onPlayerEnded()"  @canplay="onPlayerStarted()" autoplay :src="'/assets/video/' + this.$store.state.workouts[$route.params.id - 1].img + '.mp4'" width=100></video>
    <div @click="false" @drag="false">
      <circle-slider class="circle-slider-class" style="pointer-events: none" v-model="timeLeft"
            :min="0"
            :max="this.$store.state.workouts[$route.params.id - 1].time"
            :knob-radius="0.000001"
            circle-color="#cecece"
            progress-color="#3E74B8"
            :side="150"
            >
      </circle-slider>
    </div>
    <div class="minutes-left">minutes left</div>
    <div class="time-left">{{ secondsToMinutes }}</div>
    <div>
      <span  @click="play()"><PlayIcon  class="play-control-item play" v-show="!isPlaying" w="30" h="30"/></span>
      <span @click="pauze()"><PauseIcon class="play-control-item pauze" v-show="isPlaying" w="30" h="30"/></span>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import PlayIcon from 'vue-ionicons/dist/md-play'
import PauseIcon from 'vue-ionicons/dist/md-pause'
import ArrowBackIcon from 'vue-ionicons/dist/md-arrow-back'

export default {
  name:'App',
  components: {
    PlayIcon, PauseIcon, ArrowBackIcon
  },
  data () {
    return {
      isPlaying: true,
      amount: 50,
      timeLeft: 300,

    }
  },
  created() {
    this.socket = io("https://mirrorcontrol.herokuapp.com/");
  },
  computed: {
    secondsToMinutes() {
      let minutes = Math.floor(this.timeLeft / 60);
      let seconds = this.timeLeft - minutes * 60;

      if (seconds < 10) {
        let timeInMinutes = minutes + ':0' + seconds
        return timeInMinutes;
      }

      if (seconds > 10) {
        let timeInMinutes = minutes + ':' + seconds
        return timeInMinutes;
      } 

      return timeInMinutes;  
    }
  },
  methods: {
    play () {
      //this.$refs.videoTraining.currentTime = this.$store.state.workouts[this.$route.params.id - 1].time - this.timeLeft;
      //console.log('dit is huidig moment' + this.$refs.videoTraining.currentTime)
      this.$store.dispatch('playVideoSocket');
      this.$refs.videoTraining.play();
      //console.log(this.$refs.videoTraining.duration)
    if (this.isPlaying === false) {
        this.isPlaying = true;
    } else {
      this.isPlaying = false;
    }
  },
  pauze () {
    //console.log(this.$refs.videoTraining.duration);
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
    this.$store.dispatch('postHeartRates')
    this.$router.push('/chart');
  },
  onPlayerStarted() {
  this.timeLeft = this.$refs.videoTraining.duration;
  //console.log(this.timeLeft);
    this.isRunning = true
    if(this.timeLeft > 0) {
        setInterval(() => {
          if(this.isPlaying) {
            this.timeLeft --
            //this.$store.state.workouts[this.$route.params.id - 1].time --
          } 
        }, 1000)
    }  
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
  opacity: 0;
  position: absolute;
}

.pauze {
  /* background-image: url(https://himalayasingh.github.io/audio-player-play-and-pause-animation-1/img/bg.gif); */
  background-color: #3E74B8;
  background-size: 13rem;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 0rem;
  margin: -1rem;
  padding: 2.6rem 1rem 0rem 1rem;
  color: white;
  height: 4rem;
  width: 4rem;
  overflow-x: hidden;
}

.play {
  /* background-image: url(https://himalayasingh.github.io/audio-player-play-and-pause-animation-1/img/f1.gif); */
  background-color: #3E74B8;
  background-size: 13rem;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: -1rem;
  margin: 0rem;
  padding: 1.6rem 1rem 0rem 1rem;
  color: white;
  height: 4rem;
  width: 4rem;
  overflow-x: hidden;
}

.play-control-item {
  fill: white;
}

.training-container {
  /* background-color: black; */
  height: 100%;
}

.circle-slider-class {
  transform: rotateZ(180deg);
  transform: rotateX(180deg);
}

.time-left {
  margin-top: -0.2rem;
  padding-bottom: 4rem;
  font-size: 2.5rem;
  font-weight: bolder
}

.minutes-left {
  color: #3E74B8;
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-top: -6.4rem;
  text-align: center;
}
.name-training {
  margin-top: 6rem;
  margin-bottom: 3rem;
  font-weight: bold;
}
</style>