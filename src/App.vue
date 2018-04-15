<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <He />
    <he-comp1 />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import He from './components/He'

export default {
  name: 'App',
  components: {
    HelloWorld,
    He
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
