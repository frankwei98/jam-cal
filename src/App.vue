<template>
  <div id="app">
    <div id="nav">
      <h1 class="title">Andoromeda Jam Calendar</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="https://tower.im/join?t=431934de2115aaa8f943bbe00e8d1c0c">注册账户</a>
    </div>
    <router-view style="margin: 0 20px"/>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
