<template>
  <div id="app">
    <div id="nav">
      <router-link to="/post">投稿画面</router-link> |
      <router-link to="/check">閲覧画面</router-link> |
      <router-link to="/confirm/1">閲覧画面1</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 29px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
