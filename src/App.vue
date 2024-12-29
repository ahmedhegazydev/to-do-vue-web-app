<template>
  <div id="app">
    <Header />

    <div>
      <ThreeColumnUI />
    </div>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue';
import ThreeColumnUI from './components/ThreeColumnUI.vue';

export default {
  name: 'App',
  components: {
    Header,
    ThreeColumnUI,
  },
};
</script>

<style scoped>
/* html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
