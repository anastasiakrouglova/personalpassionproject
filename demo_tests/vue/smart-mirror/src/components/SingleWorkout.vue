<template >
    <div>
        <div v-if="this.$route.path === '/'">
            <li v-for='workout in onlyJumps' :key="workout.id">
                <router-link type="type" v-bind:to="'/detail/' + workout.id">{{workout.title}}</router-link>
            </li>
        </div>
        <div v-if="this.$route.path === '/workout'">
            <li v-for='workout in onlyWorkouts' :key="workout.id">
                <router-link type="type" v-bind:to="'/detail/' + workout.id">{{workout.title}}</router-link>
            </li>
        </div>
        <div v-if="this.$route.path === '/stretch'">
            <li v-for='workout in onlyStretch' :key="workout.id">
                <router-link type="type" v-bind:to="'/detail/' + workout.id">{{workout.title}}</router-link>
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
        { id: 1, title: 'Workout 1', type:'workout' },
        { id: 2, title: 'Workout 2', type:'workout' },
        { id: 3, title: 'Jump 3', type:'jump' },
        { id: 4, title: 'Jump 4', type:'jump' },
        { id: 5, title: 'Stretch 5', type:'stretch' },
        { id: 6, title: 'Stretch 6', type:'stretch' },
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
