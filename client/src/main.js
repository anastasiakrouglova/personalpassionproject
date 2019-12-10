import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(heartRateSensor, '$heartRateSensor');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  //heartRateSensor,
  render: h => h(App),
  // created() {
  //   console.log(this.$heartRateSensor ? 'Library works!' : 'Uh oh..')
  // }
}).$mount("#app");
