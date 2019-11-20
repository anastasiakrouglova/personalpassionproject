<template>
  <div class="workouts">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Workouts msg="Jumps" />
  </div>
</template>

<script>
// @ is an alias to /src
import Workouts from "@/components/Workouts.vue";

export default {
  name: "jumps",
  components: {
    Workouts
  }
};
</script>
