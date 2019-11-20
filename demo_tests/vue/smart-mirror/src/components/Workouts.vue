<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/detail/1">Workout 1</router-link></li>
      <li><router-link to="/detail/2">Workout 2</router-link></li>
      <li><router-link to="/detail/3">Workout 3</router-link></li>
      <li><router-link to="/detail/4">Workout 4</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
