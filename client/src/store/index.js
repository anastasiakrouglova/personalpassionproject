import Vue from "vue";
import Vuex from "vuex";
//import VuePageTransition from 'vue-page-transition'
import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client';
import axios from "axios";
import "../bluetooth/heartRateSensor.js"

Vue.use(Vuex, axios);
//Vue.use(VuePageTransition);

Vue.use(new VueSocketIO({
  // debug: true,
  connection: 'https://mirrorcontrol.herokuapp.com/api/workouts',
  //options: { path: "/my-app/" } //Optional options
}))

export default new Vuex.Store({
  state: {
    socket: io('https://mirrorcontrol.herokuapp.com/'),
    videoSrc: '',
    videoStarted: false,
    playing: true,
    stop: false,
    heartRates: [],
    heartRate: true,
    workout: 'video mag afgespeeld worden',
    workouts: [],
    stats: [],
    workoutDone: 'false',
    week: '2',
    dayObjects: [
      {
        label: 'Mon',
        active: false,
        index: 0
      },
      {
        label: 'Tues',
        active: true,
        index: 1
      },
      {
        label: 'Wed',
        active: false,
        index: 2
      },
      {
        label: 'Thurs',
        active: false,
        index: 3
      },
      {
        label: 'Fri',
        active: false,
        index: 4
      },
      {
        label: 'Sat',
        active: false,
        index: 5
      },
      {
        label: 'Sun',
        active: false,
        index: 6
      },
    ],
  },
  mutations: {
    SET_WORKOUTS(state, workouts) {
      state.workouts = workouts;
    },
    SET_STATS(state, stats) {
      state.stats = stats;
    }
  },
  actions: {
    playVideo(videoID) {
      store.data.workouts.push(videoID);
    },
    loadWorkouts({ commit }) {
      axios
        .get('https://mirrorcontrol.herokuapp.com/api/workouts')
        .then(data => {
          let workouts = data.data
          commit('SET_WORKOUTS', workouts)
        })
        .catch(error => {
        })
    },
    loadStats({ commit }) {
      axios
        .get('https://mirrorcontrol.herokuapp.com/api/stats')
        .then(data => {
          let stats = data.data
          commit('SET_STATS', stats)
          
        })
        .catch(error => {
        })
    },
    postWorkoutifDone({ commit }) {
      axios
        .post('https://mirrorcontrol.herokuapp.com/api/stats', {
          day: new Date().getDay(),
          // type: req.body.type,
          // duration: req.body.duration,
          workoutDone: this.state.workoutDone,
          week: this.state.week
          //date: req.body.date
      })
        .then(response => {
          ('getted response')
          let stats = response.data;
      })
        .catch(error => {
      });
  },
    sendSocket() {
      this.state.videoStarted = false;
      this.state.socket.emit('SEND_STARTMIRROR', {
        videoStarted: this.state.videoStarted,
        videoSrc: this.state.videoSrc
      });
    },
    pauzeVideoSocket() {
      this.state.playing = false;
      this.state.socket.emit('SEND_PAUZED', {
        playPauzed: this.state.playing
      });
    },
    playVideoSocket() {
      this.state.playing = true;
      this.state.socket.emit('SEND_PLAYED', {
        playPauzed: this.state.playing
      });
    },
    sendBluetoothSocket() {
      let heartRateMeasurement = heartRateSensor.parseHeartRate(event.target.value);
      this.state.socket.emit('SEND_BLUETOOTH', {
        heartRate: heartRateMeasurement.heartRate
      });
    },
    stopTrainingSocket() {
      console.log('in stoptraining')
      this.state.stop = true;
      this.state.socket.emit('SEND_STOP', {
        stopVideo: this.state.stop
      });
    }
  }
});
