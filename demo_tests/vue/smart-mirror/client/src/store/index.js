import Vue from "vue";
import Vuex from "vuex";
import VuePageTransition from 'vue-page-transition'
//import VueSocketIO from 'vue-socket.io'

Vue.use(Vuex);
Vue.use(VuePageTransition);

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://192.168.151.86:8081/',
//   options: { path: "/my-app/" } //Optional options
// }))

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  // actionPrefix: 'SOCKET_',
  // mutationPrefix: 'SOCKET_'
});
