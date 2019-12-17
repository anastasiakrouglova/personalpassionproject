<template>
  <div class="pirouette">
    <SingleWorkout msg="Pirouette" />
  </div>
</template>


<script>
// @ is an alias to /src
import SingleWorkout from "@/components/SingleWorkout.vue";

export default {
  name: "pirouette",
  components: {
    SingleWorkout
  },

};
</script>