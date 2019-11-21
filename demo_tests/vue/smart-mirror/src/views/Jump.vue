<template>
  <div class="workouts">
    <Navigation />
    <img alt="Vue logo" src="../assets/logo.png" />
    <Workouts msg="Jumps" type="jump" />
    <button v-on:click="filter">Filter</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Workouts from "@/components/Workouts.vue";
import Navigation from "@/views/Navigation.vue";

export default {
  name: "jumps",
  components: {
    Workouts,
    Navigation
  },
  methods: {
      filter () {
          console.log(Workouts.props.type);
          if (Workouts.props.type === "jump") {
            console.log("jeeej");
          } else {
            console.log("oh nooo");
          }
      }
  }

};
</script>
