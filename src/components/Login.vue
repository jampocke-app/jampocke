<template>
  <div id="login">
    <h1>{{ msg }}</h1>
    <button @click="googleLogin">Googleアカウントでログイン</button>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "login",
  data() {
    return {
      msg: "Welcome to MyMarkDown",
    }
  },
  methods: {
    googleLogin: function () {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    },
  },
}
</script>
