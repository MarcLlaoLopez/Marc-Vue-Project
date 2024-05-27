<template>
  <div id="app">
    <div class="centered">
      <Navbar />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 200%; /* Cambia min-height a height */
}

.centered {
  display: flex;
  justify-content: center;
}

.navbar {
  font-size: 20px; /* Aumenta el tamaño del texto */
}

.navbar ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.navbar li {
  margin: 0 10px;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
