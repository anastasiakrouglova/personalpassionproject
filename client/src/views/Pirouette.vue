<template>
  <div class="pirouette">
    <h1 class="title">Workouts</h1>
    <Navigation/>
    <SingleWorkout msg="Pirouette" />
  </div>
</template>


<script>
// @ is an alias to /src
import SingleWorkout from "@/components/SingleWorkout.vue";
import Navigation from "@/views/Navigation.vue";

export default {
  name: "pirouette",
  components: {
    SingleWorkout,
    Navigation
  },

};
</script>