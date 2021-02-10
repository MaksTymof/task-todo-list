<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  title: 'ToDo List'
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
  background: #9EC56F;
  background: -webkit-linear-gradient(bottom right, #9EC56F, #114D06);
  background: -moz-linear-gradient(bottom right, #9EC56F, #114D06);
  background: linear-gradient(to top left, #9EC56F, #114D06) no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 25px;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  width: 70%;
}
a {
  color: #fff;
}

</style>
