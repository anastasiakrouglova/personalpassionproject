<template >
  <div>
    <h1>{{ msg }}</h1>
    <ul id="workout">
      <singleWorkout type="jump"/>
      <!-- <li><router-link type="jump" to="/detail/2">Jump 2</router-link></li>
      <button v-on:click="count++">You clicked me {{ count }} times.</button>
      <li><router-link type="stretch" to="/detail/3">Stretch 3</router-link></li>
      <li><router-link type="workout" to="/detail/4">Workout 4</router-link></li> -->
    </ul>
  </div>
</template>

<script>
import SingleWorkout from "@/components/SingleWorkout.vue";

export default {
  name: "workout-data",
  components: {
    SingleWorkout
  },
  props: {
    msg: String,
    type: String,
    title: String
  }, 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
