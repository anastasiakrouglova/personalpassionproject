<template>
  <div class="workout">
    <Navigation/>
    <Workouts msg="Workout" />
  </div>
</template>


<script>
// @ is an alias to /src
import Workouts from "@/components/Workouts.vue";
import Navigation from "@/views/Navigation.vue";

export default {
  name: "workout",
  components: {
    Workouts,
    Navigation
  }
};
</script>