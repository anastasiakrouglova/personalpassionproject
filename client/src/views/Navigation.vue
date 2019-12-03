<template>
  <div>
    <nav class="navigation">
      <router-link to="/">Jumps</router-link>
      <router-link to="/pirouette">Pirouettes</router-link>
      <router-link to="/stretch">Stretch</router-link>
    </nav>
      <router-view/>
  </div>
</template>

<style>

.navigation {
  padding: 3rem 0;
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
