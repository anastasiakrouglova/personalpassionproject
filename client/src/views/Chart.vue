<template>
  <div class="charts">
    <p>GOOD JOB! Hier is jouw grafiek</p>
    <li class="days-container" v-for='daydb in doneDays' :key="daydb.id">

<!-- && daydb.workoutDone === 'true' -->
        <span v-if="daydb.day === daydb.id && daydb.workoutDone === 'true'">{{daydb.day}} - {{daydb.id}}</span>

<!-- v-if="daydb.day === daydb.day && daydb.id !== daydb.id" -->
<!-- || daydb.day !== currentday && daydb.workoutDone === 'false' && daydb.day == daydb.id -->
        <div >
          <span v-if="
          daydb.day !== currentday && daydb.day == daydb.id && daydb.workoutDone === 'true' 
          || daydb.day !== currentday && daydb.workoutDone === 'true'
          || daydb.day !== currentday && daydb.workoutDone === 'true' && daydb.day == daydb.id">
          
            {{days[daydb.day -1]}} - {{daydb.workoutDone}} - ({{daydb.day}})
          </span>
          <span class="current-day" v-if="daydb.day === currentday && daydb.day == daydb.id">{{days[daydb.day -1]}} - {{daydb.workoutDone}} - ({{daydb.day}})</span>
        </div>
    </li>

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
      days: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      todayNumber: new Date().getDay(), // todaynumber is een cijfer van 0-7
      currentday: null
    }
  },
  mounted() {
    let today = this.days[this.todayNumber - 1] // Vandaag in cijfers -1 omdat array van 0 begint
    //this.currentday = today
    this.currentday = this.todayNumber
    //console.log(this.currentday)

    if (this.$store.workoutDone === true) {
    }
  },
  computed: {
  doneDays() {
    this.filterDays()
    this.ShowOnce()
    return this.$store.state.stats;
  }
  },
  methods: {
    filterDays() {
      this.$store.state.stats.sort(function(x, y) {
        return -(y.day - x.day);
      });
    },
    ShowOnce() {
      //console.log(this.$store.state.stats[2].day)
      //console.log(this.$store.state.stats[8].day)
      if (this.$store.state.stats[1].day === this.$store.state.stats[2].day) {
        //console.log('hetzelfde')
      }
      // this.$store.state.stats.sort(function(x, y) {
      //   return -(y.day - x.day);
      // });
    }
  }
}
</script>


<style >
.charts {
    height: 100vh;
  }

.days-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.current-day {
  font-weight: bold;
  color: blue;
}
</style>