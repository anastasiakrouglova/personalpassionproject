<template>
  <div>
    <nav @click="stopTraining()" class="tabs">
      <router-link to="/"><MdFitnessIcon w="25" h="25" /></router-link>
      <router-link to="/chart"><MdStatsIcon w="25" h="25" /></router-link>
      <router-link to="/settings"><MdSettingsIcon w="25" h="25" /></router-link>
    </nav>
  </div>
</template>

<script>
import io from "socket.io-client";
import MdStatsIcon from 'vue-ionicons/dist/md-stats.vue'
import MdFitnessIcon from 'vue-ionicons/dist/md-fitness.vue'
import MdSettingsIcon from 'vue-ionicons/dist/md-settings.vue'

export default {
  name:'Tabs',
  components: {
    MdFitnessIcon,
    MdStatsIcon,
    MdSettingsIcon
  },
  created() {
    //this.socket = io("http://localhost:3000/");
    this.socket = io("https://mirrorcontrol.herokuapp.com/");
  },
  methods: {
    stopTraining() {
      //console.log('gedrukt op tab')
      this.$store.dispatch('stopTrainingSocket');
    }
  }
}
</script>

<style>
.tabs {
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;
    background: white;
    border-radius: 1.5rem;
    box-shadow: 0rem -0.3rem 0.2rem rgba(173, 173, 173, 0.1);
}

.tabs a {
opacity: 0.2;
}

.tabs a.router-link-exact-active {
opacity: 1;
position: relative;
}

.tabs a.router-link-exact-active::after {
    content: ".";
    position: absolute;
    font-size: 2.5rem;
    color: black;
    top: 0.2rem;
    text-align: center;
    left: 0.65rem;
}
</style>
