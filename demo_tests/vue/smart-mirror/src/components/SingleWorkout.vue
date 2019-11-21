<template >
    <div >
        <li v-for='workout in workouts' :key="workout.id">
            <router-link type="type" v-bind:to="'/detail/' + workout.id">{{workout.title}}</router-link>
        </li>
    </div>
</template>


<script>
export default {
  props: {
    type: String,
    title: String
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
    jumps: function () {
        return this.workouts.filter(function (jump) {
        console.log(this.workouts.type)
        return this.workouts.type === 'jump'
        })
    }
  }
};
</script>
