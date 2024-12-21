<template>
  <div id="app">
    <!-- Include Header component here -->
    <Header />
    <!-- Rest of your content goes here -->
  </div>
</template>

<script>
// Import the Header component
import Header from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    Header, // Register the Header component
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
