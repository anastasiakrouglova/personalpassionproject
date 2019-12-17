<template>
  <div>
    <h1 class="title">Workouts</h1>
    <Connected/>
    <nav class="navigation">
      <router-link to="/">Jumps</router-link>
      <router-link to="/pirouette">Pirouettes</router-link>
      <router-link to="/stretch">Stretch</router-link>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src     <img alt="Vue logo" src="../assets/logo.png" />
import { mapActions } from 'vuex'
import Connected from "@/components/Connected.vue"

export default {
  name: "navigation",
  components: {
    Connected
  },
};
</script>

<style>
.navigation {
  padding: 2rem 0 3rem;
}

.navigation a {
  font-weight: bold;
  color: #2c3e50;
  padding: 1rem 1.5rem;
  text-decoration: none;
}

.navigation a.router-link-exact-active {
  color:white;
  background-color: #3E74B8;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  border-radius: 2rem;
  box-shadow: 0rem 0.3rem 0.5rem rgba(62, 116, 184, 0.3);
}


</style>
