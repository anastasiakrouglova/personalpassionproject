<template>
  <div class="training-container">
    <h1 class="title">Workout</h1>
    <Connected/>
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
    <p class="bpm-training">{{currentBPM}}</p>
    <div class="play-container">
      <img src="/assets/img/button.svg" width="80" alt="button">
      <span  @click="play()"><PlayIcon  class="play-control-item play" v-show="!isPlaying" w="25" h="25"/></span>
      <span @click="pauze()"><PauseIcon class="play-control-item pauze" v-show="isPlaying" w="25" h="25"/></span>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import PlayIcon from 'vue-ionicons/dist/md-play'
import PauseIcon from 'vue-ionicons/dist/md-pause'
import "../bluetooth/heartRateSensor.js"
import Connected from "@/components/Connected.vue"

export default {
  name:'App',
  components: {
    PlayIcon, PauseIcon, Connected
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

      let timeInMinutes = minutes + ':' + seconds

      if (seconds < 10) {
        let timeInMinutes = minutes + ':0' + seconds
        return timeInMinutes;
      }

      if (seconds > 10) {
        let timeInMinutes = minutes + ':' + seconds
        return timeInMinutes;
      } 

      return timeInMinutes;  
    },
    currentBPM() {
      if (this.$store.state.heartRates[this.$store.state.heartRates.length - 1] == null) {
        return 45
      }
      
      if (typeof(this.$store.state.heartRates[this.$store.state.heartRates.length - 1]) == 'object') {
        return ''
      }
      let currentBPM = this.$store.state.heartRates[this.$store.state.heartRates.length - 1]
      //console.log(currentBPM)
      
      return currentBPM + 'BPM'
    }
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
    this.$store.dispatch('postWorkoutifDone');
    this.$store.dispatch('postHeartRates');
    this.$store.dispatch('stopTrainingSocket');
    this.$router.push('/transition');
    //this.$router.push('/chart');
    //this.$router.push('detail/' + this.$route.params.id + '/transition');
  },
  onPlayerStarted() {
        this.$store.state.workoutDone = 'false';

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
    }  else {
      this.$router.push('/');
    }
  }
}
}
</script>

<style>

.arrowback-training {
  fill: black;
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

.play-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2.4rem;
}

.pauze {
  /* background-image: url(https://himalayasingh.github.io/audio-player-play-and-pause-animation-1/img/bg.gif); */
  background-size: 13rem;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: -1rem;
  padding: 1rem 1rem 0rem 1rem;
  color: white;
  height: 3rem;
  width: 3rem;
  overflow-x: hidden;
  border-radius: 50%;
  position: relative;
  margin-top: -4.3rem;
}

.play {
  /* background-image: url(https://himalayasingh.github.io/audio-player-play-and-pause-animation-1/img/f1.gif); */
  background-size: 13rem;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: -1rem;
  padding: 1rem 1rem 0rem 1rem;
  color: white;
  height: 3rem;
  width: 3rem;
  overflow-x: hidden;
  border-radius: 50%;
  position: relative;
  margin-top: -4.3rem;
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

.bpm-training {
  color: #3E74B8;
  margin-top: -4.2rem;
}

</style>