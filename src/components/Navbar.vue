<!-- Navbar.vue -->
<template>
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.path" :class="{ active: isActive(route) }">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
</template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        routes: []
      };
    },
    created() {
      this.routes = this.$router.options.routes.filter(route => route.name);
    },
    methods: {
      isActive(route) {
        return this.$route.name === route.name;
      }
    }
  }
  </script>
  
  <style scoped>
  nav {
    display: flex; /* Use flexbox layout */
    justify-content: space-between; /* Align items evenly along the main axis */
    padding: 10px; /* Add padding for spacing */
  }
  
  ul {
    display: flex; /* Make the <ul> a flex container */
    list-style-type: none; /* Remove default list styling */
    padding: 0; /* Remove default padding */
  }
  
  li {
    margin-right: 20px; /* Add margin between list items */
  }
  
  .active {
    font-weight: bold; /* Style the active link */
  }
  </style>
  