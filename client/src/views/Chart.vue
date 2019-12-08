<template>
  <div class="charts">
    <p>GOOD JOB! Hier is jouw grafiek</p> 

    <li class="days-container" v-for='daydb in doneDays' :key="daydb.id">  
      <span v-if="daydb.week === '2'">{{days[daydb.day -1]}}
        <input ref="checkedBox" v-if="daydb.workoutDone === 'true'" checked type="checkbox" :name="days[daydb.day -1]" :value="days[daydb.day -1]">
        <input ref="uncheckedBox" v-if="daydb.workoutDone === 'false'" type="checkbox" :name="days[daydb.day -1]" :value="days[daydb.day -1]">
      </span>
    </li>

      <p>
        checkedboxvalue: {{checkedBoxInputValue}}
      </p>

      <div class="week-container">
        <span class="weekday-container" v-if="days[0] === checkedBoxInputValue">
          {{days[0]}}
          <input checked type="checkbox">
        </span>
        <span class="weekday-container" v-else>
          {{days[0]}}
          <input type="checkbox">
        </span>

        <span class="weekday-container" v-if="days[1] === checkedBoxInputValue">
          {{days[1]}}
          <input checked type="checkbox">
        </span>
        <span class="weekday-container" v-else>
          {{days[1]}}
          <input type="checkbox">
        </span>

        <span class="weekday-container" v-if="days[2] === checkedBoxInputValue">{{days[2]}}
          <input checked type="checkbox">
        </span>
        <span class="weekday-container" v-else>
          {{days[2]}}
          <input type="checkbox">
        </span>

        <span class="weekday-container" v-if="days[3] === checkedBoxInputValue">{{days[3]}}
          <input checked type="checkbox">
        </span>
        <span class="weekday-container" v-else>
          {{days[3]}}
          <input type="checkbox">
        </span>

        <span class="weekday-container" v-if="days[4] === checkedBoxInputValue">{{days[4]}}
          <input checked type="checkbox">
        </span>
        <span class="weekday-container" v-else>
          {{days[4]}}
          <input type="checkbox">
        </span>

        <span class="weekday-container" v-if="days[5] === checkedBoxInputValue">{{days[5]}}
          <input checked type="checkbox">
        </span>
        <span class="weekday-container" v-else>
          {{days[5]}}
          <input type="checkbox">
        </span>

        <span class="weekday-container" v-if="days[6] === checkedBoxInputValue">{{days[6]}}
          <input checked type="checkbox">
        </span>
        <span class="weekday-container" v-else>
          {{days[6]}}
          <input type="checkbox">
        </span>
      </div>
      <br>
      <br>
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
      currentday: null,
      checkedBoxInputValue: ''
    }
  },
  mounted() {
    let today = this.days[this.todayNumber - 1] // Vandaag in cijfers -1 omdat array van 0 begint
    //this.currentday = today
    this.currentday = this.todayNumber
    if (this.$store.workoutDone === true) {
    }

    console.log(this.days[0]);


    for(let i = 0; i < 2; i++){
        this.checkedBoxInputValue = this.$refs.checkedBox[i].value
        console.log(this.checkedBoxInputValue);
        //console.log(this.monday);
    }
  },
  computed: {
  doneDays() {
    this.filterDays()
    this.ShowOnce()
    // where week = 1
    return this.$store.state.stats;
  }
  },
  methods: {
    filterDays() {
      this.$store.state.stats.sort(function(x, y) {
        return -(y.day - x.day);
      });
    },
    ShowOnce(array, value) {

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
}
.weekday-container {
  display: flex;
  flex-direction: column-reverse;
  width: 2rem;
  padding: 1rem;
}
</style>