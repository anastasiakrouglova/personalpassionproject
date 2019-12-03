<template>
  <div class="charts">
    <p>GOOD JOB! Hier is jouw grafiek</p>
    <router-link to="/"><span class="button-start">ga terug naar oefeningen</span></router-link>
    <trend
    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
    :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
    auto-draw
    smooth>
  </trend>
  </div>
</template>

<script>
import Trend from "vuetrend"

export default {
  name: "jumps",
  components: {
    Trend
  }
}

</script>

<style >
  .charts {
    height: 100vh;
  }

</style>