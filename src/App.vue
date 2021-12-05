<template>
  <div id="app">
    <Login v-if="!isLogin"></Login>
    <router-view>
      <Japan v-if="isLogin" :user="userData"></Japan>
    </router-view>
  </div>
</template>

<script>
import Login from "./components/Login.vue"
import Japan from "./views/Japan.vue"
import firebase from "firebase"

export default {
  name: "app",
  data() {
    return {
      isLogin: false,
      userData: null,
    }
  },
  created: function () {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.isLogin = true
        this.userData = user
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  },
  components: {
    Login: Login,
    Japan: Japan,
  },
}
</script>

<style>
body {
  background-color: #f4f7de;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
