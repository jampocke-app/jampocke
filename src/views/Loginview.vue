<template>
  <div class="view">
    <div class="hougentabi">日本列島方言旅</div>
    <p class="dekiru">★このアプリでできること★</p>
    <p>地域のリアルな話を聞ける！</p>
    <p>地域の魅力を気軽に発信できる！</p>
    <p>地域ごとにコミュニティーを形成できる！</p>
    <p class="tobitati">気になったらログインして方言の世界へ飛び立とう！</p>
    <div id="login">
      <button @click="googleLogin" class="googleLogin">
        Googleアカウントでログイン
      </button>
      <button @click="go_to_Japan" class="gotojapan">
        ようこそ！方言の世界へ！
      </button>
    </div>
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
.view {
  background-image: url("../assets/travel.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.hougentabi {
  font-size: 600%;
  font-weight: bold;
  padding-top: 100px;
}

p {
  font-size: 200%;
}

.dekiru {
  color: rgb(247, 103, 252);
}

.tobitati {
  color: rgb(27, 79, 250);
}
.googleLogin {
  border: 6px inset #dafafc;
  background: rgb(192, 239, 253);
  width: 16%;
  padding: 10px;
  margin-right: 2%;
  font-weight: bold;
}

.googleLogin:hover {
  color: #fff;
  background: #0019f5;
}

.gotojapan {
  border: 6px inset #d0face;
  background: rgb(206, 253, 192);
  width: 16%;
  padding: 10px;
  margin-left: 2%;
  margin-top: 2%;
  font-weight: bold;
}

.gotojapan:hover {
  color: #fff;
  background: #39f500;
}
</style>
