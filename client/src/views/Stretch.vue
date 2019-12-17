<template>
  <div class="stretch">
    <SingleWorkout msg="Stretch" />
  </div>
</template>

<script>
// @ is an alias to /src
import SingleWorkout from "@/components/SingleWorkout.vue";

export default {
  name: "Stretch",
  components: {
    SingleWorkout
  },

};
</script>