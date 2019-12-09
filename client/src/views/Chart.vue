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
        checkedboxvalue: {{checkBoxInputValues}}
      </p>
      <h2 class="week-title">this week</h2>

      <div class="week-container">


        

          <div v-for="(n) in 7" :key="n">
              <span class="weekday-currentday" v-if="dayActive[n -1] === true">
                {{days[n - 1]}} 
                <img class="week-img" src="/assets/img/done.svg" alt="done">
              </span>
              <span class="weekday-currentday" v-else>
                {{days[n - 1]}}
                <img class="week-img" src="/assets/img/notDone.svg" alt="done">
              </span>

        </div >
      </div>


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

export default {
  name: "jumps",
  components: {
    Trend
  },
  data () {
    return {
      loading: 'getLoadingState',
      days: [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      dayActive: [false, false, false, false, false, false, false,],
      todayNumber: new Date().getDay(), // todaynumber is een cijfer van 0-7
      currentday: null,
      checkBoxInputValues: [],
      flag: false
    }
  },
  mounted() {
    let today = this.days[this.todayNumber - 1] // Vandaag in cijfers -1 omdat array van 0 begint
    //this.currentday = today
    this.currentday = this.todayNumber
    if (this.$store.workoutDone === true) {
    }

    //console.log(this.currentday)

    for(let i = 0; i < this.$refs.checkedBox.length; i++){
        this.checkBoxInputValues.push(this.$refs.checkedBox[i].value)
    }

    //console.log(this.checkBoxInputValues[0]);

  },
  computed: {
  doneDays() {
    this.filterDays()
    this.ShowOnce()
    this.flagChange();
    this.iDay()
    // where week = 1
    return this.$store.state.stats;
  },

  // iDay(){
  //   for(let i = 0; i < 7; i++){
  //       return 
  //   }
  // }
  // ShowValueOnce() {
  //       return this.checkBoxInputValues.filter(function(myValue) {
  //         return myValue
  //       })
  //   }
  },
  methods: {
    filterDays() {
      this.$store.state.stats.sort(function(x, y) {
        return -(y.day - x.day);
      });
    },
    flagChange() {
      this.flag = true;
    },
    ShowOnce() {
        // return this.checkBoxInputValues.filter(function(myValue) {
        //   return myValue
        // })
    },
    iDay() {
    window.alert('blah')
    for (let n = 0; n<7; n++){
      console.log('AAAAAAAAAAAAA CYCLUS' + n)
      this.dayActive[n] = false;
      for (let i = 0; i < this.$store.state.stats.length; i++) {
  //      console.log(this.$store.state.stats[n].day)
 
      if (this.$store.state.stats[i].week === '2'){
      if (this.$store.state.stats[i].workoutDone === 'true'){
        
        let zz=this.$store.state.stats[i].day
        console.log('n=' + n + '  i=' + i  + ' day='+ zz)
        
        if(zz == n+1) {
          this.dayActive[n] = true;
          console.log('bingo')
          console.log(this.dayActive[n])
        }
        //console.log(this.$store.state.stats[n].week)
    }
    }
    }
  }
        console.log(this.dayActive)
//        this.dayActive = [true, true, false, false, false, false, true,]
   console.log(this.dayActive)
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
.weekday-container {
  display: flex;
  flex-direction: column-reverse;
  width: 2rem;
  padding: 1rem;
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

.weekday-currentday {
    display: flex;
  flex-direction: column-reverse;
  width: 2rem;
  padding: 1rem;
  color: red;
  font-weight: bold;
}

</style>