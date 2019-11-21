<template>
  <div class="workout">
    <Navigation/>
    <SingleWorkout msg="Workout" />
  </div>
</template>


<script>
// @ is an alias to /src
import SingleWorkout from "@/components/SingleWorkout.vue";
import Navigation from "@/views/Navigation.vue";

export default {
  name: "jumps",
  components: {
    SingleWorkout,
    Navigation
  },

};
</script>