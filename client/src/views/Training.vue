<template>
  <div class="training-container">
    <video ref="videoTraining" @ended="onPlayerEnded()" autoplay src="/assets/video/workout1.mp4" width=100></video>
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

export default {
  name:'App',
  components: {
    PlayIcon, PauseIcon
  },
  data () {
    return {
      isPlaying: true,
      fill : { gradient: ["red", "green", "blue"] }
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
      //console.log(this.isPlaying);
        this.isPlaying = true;
    } else {
      //console.log(this.isPlaying);
      this.isPlaying = false;
    }
  },
  pauze () {
    //console.log(this.$refs.videoTraining);
    this.$store.dispatch('pauzeVideoSocket');
    this.$refs.videoTraining.pause();
    if (this.isPlaying === false) {
      //console.log(this.isPlaying);
        this.isPlaying = true;
    } else {
      //console.log(this.isPlaying);
      this.isPlaying = false;
    }
  },
  onPlayerEnded() {
    //console.log('video is ten einde')
    this.$router.push('/chart');
  }
}
}
</script>


<style>
.pauze {
  background-image: url(https://himalayasingh.github.io/audio-player-play-and-pause-animation-1/img/bg.gif);
  background-size: cover;
  background-position: 50%;
  margin: 1rem;
  border-radius: 5rem;
  padding: 1rem 1rem 0rem 1rem;
  color: white;
  height: 8rem;
}

.play {
  background-image: url(https://himalayasingh.github.io/audio-player-play-and-pause-animation-1/img/f1.gif);
  background-size: cover;
  background-position: 50%;
  margin: 1rem;
  border-radius: 5rem;
  padding: 1rem 1rem 0rem 1rem;
  color: white;
  height: 8rem;
}


.play-control-item {
  fill: white;
}

.training-container {
  background-color: black;
  height: 100%;
}
</style>