<template>
  <div class="workouts">
    <SingleWorkout type="jump" v-if="type='jump'" msg="Jumps"/>
  </div>
</template>


<script>
// @ is an alias to /src     <img alt="Vue logo" src="../assets/logo.png" />
import SingleWorkout from "@/components/SingleWorkout.vue";
import { mapActions } from 'vuex'

export default {
  name: "jumps",
  components: {
    SingleWorkout
  }
};
</script>


<style>
.title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
  padding-left: 2rem;
  padding-top: 0.2rem;
}
</style>
