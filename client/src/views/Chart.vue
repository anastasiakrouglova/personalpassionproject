<template>
  <div class="charts">
    <h1 class="title">Statistics</h1>
    <Connected/>
    <li class="days-container" v-for='dayObject in doneDays' :key="dayObject.label">  
    </li>
    <h2 class="week-title">this week</h2>
    <div class="week-container">
        <div v-for="dayObject in this.$store.state.dayObjects" :key="dayObject.label">
          <WeekDay :dayObject="dayObject" />
      </div >
    </div>

    <h2 class="week-title">BPM of your last workout</h2>
    <div class="chart-heart">
      <pure-vue-chart 
      :points="latestHeartRates"
      :width="adjustedWidth"
      :height="150"
      :show-y-axis="true"
      />
    </div>
  </div>
  
</template>

<script>
import WeekDay from '../components/WeekDay.vue'
import PureVueChart from 'pure-vue-chart';
import Connected from "@/components/Connected.vue"

let firstLoad = true

export default {
  name: "jumps",
  components: {
    WeekDay,
    PureVueChart, Connected
  },
  data () {
    return {
      loading: 'getLoadingState',
    }
  },
  updated() {
    firstLoad = true;
  },
  computed: {
    doneDays() {
      this.filterDays()
      this.iDay()
      return this.$store.state.stats;
    },
    latestHeartRates() {
      //console.log(this.$store.state.heartRates)
      if (this.$store.state.heartRates[this.$store.state.heartRates.length - 1] == null) {
        return []
      }

      let heartRatesMain = this.$store.state.heartRates[this.$store.state.heartRates.length - 1]

      for (let i=0; i < heartRatesMain.heartRates.length; i++){
        let currentHeartRate = heartRatesMain.heartRates[i]

        if (typeof(currentHeartRate) == 'object') {
          heartRatesMain.heartRates[i] = null
        }
      }

      return heartRatesMain.heartRates.filter(Number)
    },
    adjustedWidth() {
      if (this.$store.state.heartRates[this.$store.state.heartRates.length - 1] == null) {
        return 0
      }

      let heartRate = this.$store.state.heartRates[this.$store.state.heartRates.length-1].heartRates;
      let width = heartRate.length * 4;

      return width;
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
      //console.log(this.$store.stats)
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


.chart-heart {
  overflow: scroll;
  padding: 1rem;
}

</style>