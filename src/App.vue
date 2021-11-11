<template>
  <div id="app">
    <Day4 />
<!--    <Task1 />-->
<!--    <Task2 />-->
  </div>
</template>

<script>

import Day4 from './components/Day4/Day4.vue'
// import Task1 from './components/Day4/Task1.vue'
// import Task2 from './components/Day4/Task2.vue'

export default {
  name: 'App',
  components: {
    Day4,
    // Task1,
    // Task2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
