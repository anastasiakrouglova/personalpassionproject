<template>
  <div class="pirouette">
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