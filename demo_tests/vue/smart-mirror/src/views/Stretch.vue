<template>
  <div class="stretch">
    <Navigation />
    <SingleWorkout msg="Stretch" />
  </div>
</template>

<script>
// @ is an alias to /src
import SingleWorkout from "@/components/SingleWorkout.vue";
import Navigation from "@/views/Navigation.vue";

export default {
  name: "Stretch",
  components: {
    SingleWorkout,
    Navigation
  },

};
</script>