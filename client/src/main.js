import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
