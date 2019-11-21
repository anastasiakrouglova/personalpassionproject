<template>
  <div class="workouts">
    <Navigation />
    <SingleWorkout type="jump" v-if="type='jump'" msg="Jumps"/>
  </div>
</template>

<script>
// @ is an alias to /src     <img alt="Vue logo" src="../assets/logo.png" />
import SingleWorkout from "@/components/SingleWorkout.vue";
import Navigation from "@/views/Navigation.vue";

export default {
  name: "jumps",
  components: {
    SingleWorkout,
    Navigation
  }
};
</script>
