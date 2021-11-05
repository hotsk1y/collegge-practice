<template>
  <div id="app">
    <Day1 />
  </div>
</template>

<script>

import Day1 from './components/Day1/Day1'

export default {
  name: 'App',
  components: {
    Day1,
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
