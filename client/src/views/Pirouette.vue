<template>
  <div class="pirouette">

    <h1 class="title">Workouts</h1>
    <Connected/>
    <Navigation/>
    <SingleWorkout msg="Pirouette" />
  </div>
</template>


<script>
// @ is an alias to /src
import SingleWorkout from "@/components/SingleWorkout.vue";
import Navigation from "@/views/Navigation.vue";
import Connected from "@/components/Connected.vue"

export default {
  name: "pirouette",
  components: {
    SingleWorkout,
    Navigation, Connected
  },

};
</script>