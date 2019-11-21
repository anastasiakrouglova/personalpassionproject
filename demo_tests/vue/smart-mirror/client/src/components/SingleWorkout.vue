<template >
    <div>
        <div class="maxi-container" v-if="this.$route.path === '/'">
            <li class="container" v-for='workout in onlyJumps' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.time}}</p>
                </router-link>
            </li>
        </div>
        <div class="maxi-container" v-if="this.$route.path === '/workout'">
            <li class="container" v-for='workout in onlyWorkouts' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.time}}</p>
                </router-link>
            </li>
        </div>
        <div class="maxi-container" v-if="this.$route.path === '/stretch'">
            <li class="container" v-for='workout in onlyStretch' :key="workout.id">
                <router-link class="router-item" type="type" v-bind:to="'/detail/' + workout.id">
                    <p class='exercise'>{{workout.title}}</p>
                    <p class='time'>{{workout.time}}</p>
                </router-link>
            </li>
        </div>
    </div>
    
</template>


<script>
export default {
  props: {
    type: String,
    title: String,
  }, 
  data () {
    return {
      workouts: [
        { id: 1, title: 'Workout 1', type:'workout', time:'13min' },
        { id: 2, title: 'Workout 2', type:'workout', time:'10min' },
        { id: 3, title: 'Jump 3', type:'jump', time:'7min' },
        { id: 4, title: 'Jump 4', type:'jump', time:'24min' },
        { id: 5, title: 'Stretch 5', type:'stretch', time:'12min' },
        { id: 6, title: 'Stretch 6', type:'stretch', time:'16min' },
        { id: 7, title: 'Jump 7', type:'jump', time:'14min' },
        { id: 8, title: 'Jump 8', type:'jump', time:'2min' },
      ],
    }
  },
  computed: {
    onlyJumps() {
        return this.workouts.filter(jump => {
            return jump.type === 'jump'
        })
    },
    onlyWorkouts() {
        return this.workouts.filter(workout => {
            return workout.type === 'workout'
        })
    },
    onlyStretch() {
        return this.workouts.filter(stretch => {
            return stretch.type === 'stretch'
        })
    }
  }
};
</script>


<style>
.maxi-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container{
    list-style-type: none;
    background-color: #FF5F5D;
    box-shadow: 0 4px 8px 0 rgba(255,95,93,0.2);
    width: 10rem;
    height: 10rem;
    border-radius: 5px;
    margin: 0.5rem;
    min-width: 10rem;
}

.router-item {
    text-decoration: none;
}

.exercise {
    color: white;
    padding-top: 4rem;
    font-size: 1.6rem;
    margin-bottom: -1rem;
}

.time {
    color: white;
}
</style>
