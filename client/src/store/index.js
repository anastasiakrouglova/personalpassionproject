import Vue from "vue";
import Vuex from "vuex";
//import VuePageTransition from 'vue-page-transition'
import VueSocketIO from 'vue-socket.io';
import io from 'socket.io-client';
import axios from "axios";

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
    videoStarted: false,
    playing: true,
    workout: 'video mag afgespeeld worden',
    workouts: [],
    stats: [],

    workoutDone: 'false',
    week: '2'
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
    //methods
    playVideo(videoID) {
      store.data.workouts.push(videoID);
    },
    loadWorkouts({ commit }) {
      axios
        .get('https://mirrorcontrol.herokuapp.com/api/workouts')
        .then(data => {
          //console.log(data.data)
          let workouts = data.data
          commit('SET_WORKOUTS', workouts)
        })
        .catch(error => {
          //tja
        })
    },
    loadStats({ commit }) {
      axios
        .get('https://mirrorcontrol.herokuapp.com/api/stats')
        .then(data => {
          //console.log(data.data)
          let stats = data.data
          commit('SET_STATS', stats)
          
        })
        .catch(error => {
          //tja
        })
    },
    postWorkoutifDone({ commit }) {
      //this.state.workoutDone = 'true';
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
          //console.log(response.data)
          //stats = data.data
          let stats = response.data;
      })
        .catch(error => {
          //console.log(error)
          //currentObj.output = error;
      });
  },
    sendSocket() {
      this.state.videoStarted = false;
      this.state.socket.emit('SEND_STARTMIRROR', {
        videoStarted: this.state.videoStarted
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
  }
});
