<template>
  <div class="pirouette">

    <h1 class="title">Workouts</h1>
    <Navigation/>
    <!-- <transition 
      :name="slideTransition"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter" > -->
    <SingleWorkout msg="Pirouette" />
    <!-- </transition> -->
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