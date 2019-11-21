

<template>
  <div class="stretch">
    <router-link @click="stop()" class="arrowback" to="/"><ArrowBackIcon class="arrowback" w="30" h="30" /></router-link>
    <h1> {{ $route.params.id }}</h1>
    <div class="column">
      <span @click="play()"><PlayIcon class="play-control-item" v-show="!isPlaying" w="30" h="30"/></span>
      <span @click="play()"><PauseIcon class="play-control-item" v-show="isPlaying" w="30" h="30"/></span>
    </div>
  </div>
</template>


<script>
import ArrowBackIcon from 'vue-ionicons/dist/md-arrow-back'
import PlayIcon from 'vue-ionicons/dist/md-play'
import PauseIcon from 'vue-ionicons/dist/md-pause'

export default {
  name:'App',
  components: {
    PlayIcon, PauseIcon, ArrowBackIcon
  },
  data () {
    return {
      loaing: 'getLoadingState',
      Songs: [
        { audio: 'https://rorg.z1.fm/d/3f/ti_ft_eminem_-_thats_all_she_wrote_(zv.fm).mp3', artist: 'T.I', title: 'That\'s All She Wrote (ft. Eminem)', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189593/random/f55abc725080eb05147e45ce3cd406a8.1000x1000x1.jpg' },
        { audio: 'https://dll.z1.fm/music/8/e8/ellie_goulding_feat_diplo__swae_lee_-_close_to_me.mp3', artist: 'Ellie Goulding Feat. Diplo & Swae Lee', title: 'Close To Me', album: 'None', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189716/random/ellie-goulding-close-to-me-lg.jpg' },
        { audio: 'https://rorg.z1.fm/8/ff/sia_-_lullaby_zaycevnet_(zv.fm).mp3', artist: 'Sia', title: 'Lullaby', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189786/random/t54664010-b708389188_s400.jpg' },
        { audio: 'https://muz.z1.fm/6/6f/lp_-_muddy_waters_(zf.fm).mp3', artist: 'LP', title: 'Muddy Waters', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189837/random/t337772630-i1186767461_s400.jpg' },
        { audio: 'https://rorg.z1.fm/f/d6/david_dallas_-_runnin_(zf.fm).mp3', artist: 'David Dallas', title: 'Runnin', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189882/random/t93555159-i1095888717_s400.jpg'},
        { audio: 'https://jt2.z1.fm/f/bf/labrinth_-_vultures_(zvukoff.ru).mp3', artist: 'Labrinth', title: 'Vultures', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551189373/random/R-3512282-1392987047-7461.jpeg.jpg'},
        { audio: 'https://muz17.z1.fm/b/10/niall_horan_-_slow_hands_slow_hands_(zf.fm).mp3', artist: 'Niall Horan', title: 'Slow Hands', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551190705/random/niall-horan-slow-hands-audio-02.jpg'},
        { audio: 'https://muz.z1.fm/a/fa/davide_esposito_-_a_cavallo_del_vento_(zf.fm).mp3', artist: 'Davide Esposito', title: 'A Cavallo Del Vento', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551190889/random/500x500.jpg'},
        { audio: 'https://dll.z1.fm/music/9/88/benny_blanco__halsey__khalid_-_eastside.mp3', artist: 'Benny Blanco, Halsey & Khalid', title: 'Eastside', album: '', cover: 'https://res.cloudinary.com/djx5h4cjt/image/upload/v1551192768/random/artworks-000432419499-7ts3gr-t500x500.jpg'}
      ],
      presentSongId: 0,
      lastSongId: 0,
      isPlaying: false,
      audio: new Audio(),
      isPaused: false,
      volume: 0.5,
      //
      timeLapse: false,
      timeBufferSecs: 0,
      timeBufferMins: 0,
      currentTrackTime: 0,
      lastRecordedTrackTime: -1,
      countCheck: 0,
      currentTrackDuration: 0,
      //
      color: '#8dff97',
      progressPercent: 0,
      continuousPlay: false
    }
  },
  methods: {
    playSong (SongId) {
        console.log(SongId)
        this.presentSongId = SongId;
        this.audio.src = this.Songs[SongId].audio;
        this.audio.play();
        this.isPlaying = true;
        this.isPaused = false;
        //
        this.countCheck = 0;
        this.lastRecordedTrackTime = -1;
        this.timeBufferMins = 0;
    },
    play (songId = this.presentSongId, type = '') {
        if (this.isPlaying && !this.isPaused) {
            if (type !== '') { // next/previous
                this.audio.src = this.Songs[songId].audio;
                this.audio.play();
                this.isPlaying = true;
                this.isPaused = false
            } else { // pause
                this.audio.pause();
                this.isPlaying = false;
                this.isPaused = true
            }
        } else if (!this.isPlaying && this.isPaused) {
            if (type !== '') { // next/previous
                this.audio.src = this.Songs[songId].audio;
                this.audio.play();
                this.isPlaying = true;
                this.isPaused = false
            } else { // resume playing
                this.audio.play();
                this.isPlaying = true;
                this.isPaused = false
            }
        } else if (!this.isPlaying && !this.isPaused) {
            this.audio.src = this.Songs[songId].audio;
            this.audio.play();
            this.isPlaying = true;
            this.isPaused = false
        }
        //
        this.countCheck = 0;
        this.lastRecordedTrackTime = -1;
        this.timeBufferMins = 0;
    },
    stop(songId = this.presentSongId, type = '') {
      this.audio.pause();
    }
  }
}
</script>


<style>
.arrowback {
 display: flex;
 margin: 1rem;
}
</style>