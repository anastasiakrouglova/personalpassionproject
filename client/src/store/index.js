import Vue from "vue";
import Vuex from "vuex";
//import VuePageTransition from 'vue-page-transition'
// import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client';
import axios from "axios";
import "../bluetooth/heartRateSensor.js"

Vue.use(Vuex, axios);
//Vue.use(VuePageTransition);

// Vue.use(new VueSocketIO({
//   // debug: true,
//   connection: 'https://mirrorcontrol.herokuapp.com/api/workouts',
//   //options: { path: "/my-app/" } //Optional options
// }))

let socket = io.connect('https://mirrorcontrol.herokuapp.com/');

const store = new Vuex.Store({
  state: {
    socket,
    socketConnected: false,
    videoSrc: '',
    videoStarted: false,
    playing: true,
    stop: false,
    heartRatesData: [],
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
    },
    SET_HEARTRATE(state, heartRates) {
      state.heartRates = heartRates;
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
    loadHeartRate({ commit }) {
      axios
        .get('https://mirrorcontrol.herokuapp.com/api/heartRates')
        .then(data => {
          let heartRatesData = data.data
          commit('SET_HEARTRATE', heartRatesData)
          //console.log(heartRatesData)
        })
        .catch(error => {
          //console.log('somethingw went wrong' + error)
        })
    },
    postWorkoutifDone({ commit }) {
      axios
        .post('https://mirrorcontrol.herokuapp.com/api/stats', {
          day: new Date().getDay(),
          workoutDone: this.state.workoutDone,
          week: this.state.week
      })
        .then(response => {
          ('getted response')
          let stats = response.data;
      })
        .catch(error => {
      });
    },
    postHeartRates({ commit }) {
      axios
        .post('https://mirrorcontrol.herokuapp.com/api/heartRates', {
          heartRates: this.state.heartRates,
      })
        .then(response => {
          ('getted response')
          let heartRates = response.data;
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
      //console.log('in stoptraining')
      this.state.stop = true;
      this.state.socket.emit('SEND_STOP', {
        stopVideo: this.state.stop
      });
    }
  }
});

socket.on('connect', () => {
  // console.log('connected');
  store.state.socketConnected = true;
});
socket.on('disconnect', () => {
  // console.log('disconnect');
  store.state.socketConnected = false;
});
socket.on('connect_error', () => {
  // console.log('connect_error');
  store.state.socketConnected = false;
});
socket.on('connect_timeout', () => {
  // console.log('connect_timeout');
  store.state.socketConnected = false;
});

export default store;