<template>
  <div>
    <nav class="tabs">
      <router-link to="/"><MdFitnessIcon w="30" h="30" /></router-link>
      <router-link to="/Chart"><MdStatsIcon w="30" h="30" /></router-link>
      <router-link to="/stretch"><MdSettingsIcon w="30" h="30" /></router-link>
    </nav>
  </div>
</template>

<script>
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
