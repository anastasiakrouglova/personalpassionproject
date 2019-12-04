<template>
  <div class="charts">
    <p>GOOD JOB! Hier is jouw grafiek</p>
    <button @click=getDayOfTheWeek()> klik voor datum</button>
    <p> lala - {{this.$store.state.stats[1].day}}</p>
    <router-link to="/"><span class="button-start">ga terug naar oefeningen</span></router-link>
    <trend
    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
    :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
    auto-draw
    smooth>
  </trend>
  <img src="/assets/img/done.gif" alt="test">
  </div>
</template>

<script>
import Trend from "vuetrend"

export default {
  name: "jumps",
  components: {
    Trend
  },
    data () {
    return {
      loading: 'getLoadingState',
      days: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    }
  },
  methods: {
    getDayOfTheWeek() {
      const date = new Date();
      const today = date.getDay();
      console.log(today); // today is een cijfer van 0 - 7

      //const highlighted = weekday[1];
      console.log(this.data)

      //console.log(highlighted);
      if(today === 3) {
        console.log('wedsneday')
      }
    }
  }
}

</script>

<style >
  .charts {
    height: 100vh;
  }

</style>