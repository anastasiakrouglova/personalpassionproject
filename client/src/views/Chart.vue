<template>
  <div class="charts">
    <p>Well done! Here are some stats of your workout today</p> 

    <li class="days-container" v-for='dayObject in doneDays' :key="dayObject.label">  
    </li>

    <p>{{latestHeartRates}}</p>

    <h2 class="week-title">this week</h2>
    <div class="week-container">
        <div v-for="dayObject in this.$store.state.dayObjects" :key="dayObject.label">
          <WeekDay :dayObject="dayObject" />
      </div >
    </div>
    <h2 class="week-title">BPM in your last workout</h2>
    <trend
    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
    :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
    auto-draw
    smooth>
  </trend>
  <!-- <img src="/assets/img/done.gif" alt="test"> -->
  </div>
</template>

<script>
import Trend from "vuetrend"
import WeekDay from '../components/WeekDay.vue'

export default {
  name: "jumps",
  components: {
    Trend,
    WeekDay
  },
  data () {
    return {
      loading: 'getLoadingState',
    }
  },

  computed: {
    doneDays() {
      this.filterDays()
      this.iDay()
      return this.$store.state.stats;
    },
    latestHeartRates() {
      return this.$store.state.heartRates;
    },
    today() {
      let dayNr = new Date().getDay() - 1;
      if (dayNr < 0) dayNr = 6;
      return this.$store.state.dayObjects[dayNr];
    }
  },

  methods: {
    filterDays() {
      this.$store.state.stats.sort(function(x, y) {
        return -(y.day - x.day);
      });
    },
    postWorkout() {
    this.$store.dispatch('postWorkoutifDone')
    },
    iDay() {
    for (let n = 0; n<7; n++){
      this.$store.state.dayObjects[n].active = false;
      for (let i = 0; i < this.$store.state.stats.length; i++) {
 
      if (this.$store.state.stats[i].week === '2'){
        if (this.$store.state.stats[i].workoutDone === 'true'){
          let zz=this.$store.state.stats[i].day
          
          if(zz == n+1) {
            this.$store.state.dayObjects[n].active = true;
          }
        }
       }
      }
    }
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

.week-container {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  font-size: 0.8rem;
  /* font-weight: bold; */
}


.week-title {
  font-size: 1rem;
  margin-bottom: 0rem;
  text-align: left;
  padding-left: 1rem;
}

.week-img {
  padding-bottom: 0.1rem;
}


</style>