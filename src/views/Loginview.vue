<template>
  <div id="login">
    <button @click="googleLogin" class="googleLogin">
      Googleアカウントでログイン
    </button>
    <button @click="go_to_Japan" class="gotojapan">
      ようこそ！方言の世界へ！
    </button>
    <!-- <button @click="logout" class="logout_button">ログアウト</button> -->
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "login",
  data() {},
  methods: {
    googleLogin: function () {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    },
    go_to_Japan: function () {
      this.$router.push("/Japan")
    },
  },
}
</script>

<style scoped>
.logout_button {
  border: 6px inset #faa9a6;
  background: rgb(253, 192, 205);
}

.logout_button:hover {
  color: #fff;
  background: #f50000;
}

.googleLogin {
  border: 6px inset #dafafc;
  background: rgb(192, 239, 253);
}

.googleLogin:hover {
  color: #fff;
  background: #0019f5;
}

.gotojapan {
  border: 6px inset #d0face;
  background: rgb(206, 253, 192);
}

.gotojapan:hover {
  color: #fff;
  background: #39f500;
}
</style>
