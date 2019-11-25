import Vue from "vue";
import Vuex from "vuex";
//import VuePageTransition from 'vue-page-transition'
//import VueSocketIO from 'vue-socket.io'
import axios from "axios";

Vue.use(Vuex, axios);
//Vue.use(VuePageTransition);

//const url = 'http://localhost:3000/api/posts'

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:3000/',
//   //options: { path: "/my-app/" } //Optional options
// }))

export default new Vuex.Store({
  state: {
        workouts: [],
        // workouts: [
        //   { id: 1, title: 'Sterkere landing', type:'jump', time:'13min' },
        //   { id: 2, title: 'Hoogte in sprongen', type:'jump', time:'10min' },
        //   { id: 3, title: 'Gecontroleerd bovenlichaam', type:'jump', time:'7min' },
        //   { id: 4, title: 'Springcoordinatie', type:'jump', time:'24min' },
        //   { id: 5, title: 'Stabielere zweefpirouette', type:'pirouette', time:'12min' },
        //   { id: 6, title: 'Sterkere zitpirouette', type:'pirouette', time:'16min' },
        //   { id: 7, title: 'Billmann', type:'stretch', time:'14min' },
        //   { id: 8, title: 'Been in de lucht', type: 'stretch', time: '2min' },
        //   { id: 9, title: 'Kanon', type: 'stretch', time: '2min' },
        //   { id: 10, title: 'Been pakken', type:'stretch', time:'2min' },
        // ],
  },
  mutations: {
    SET_WORKOUTS(state, workouts) {
      state.workouts = workouts;
    }
  },
  actions: {
    //methods
    playVideo(videoID) {
      store.data.workouts.push(videoID);
    },
    loadWorkouts({ commit }) {
      axios
        .get('http://localhost:3000/api/workouts')
        .then(data => {
          console.log(data.data)
          let workouts = data.data
          commit('SET_WORKOUTS', workouts)
        })
        .catch(error => {
          console.log('aiiii er liep iets mis')
        })
    }
  },
  modules: {},
  // actionPrefix: 'SOCKET_',
  // mutationPrefix: 'SOCKET_'
});
