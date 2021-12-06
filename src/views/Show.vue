<template>
  <div class="about" style="background: url(backgroundimg)">
    <Header />
    <header>a</header>
    {{ this.$route.params.id }}

    <div class="bar">
      <div class="fixed-bg bg-img"></div>
      <!-- 過去の投稿を閲覧する画面 -->
      <div class="check__container">
        <div class="check__title">過去の投稿</div>
        <div
          class="check__content"
          v-for="tweet in resultKey"
          :key="tweet.id"
          @mouseenter="CheckShow"
          @mouseleave="Checkhide"
        >
          <div class="check__card">
            <p>ユーザーネーム</p>
            <div>{{ tweet.UserName }}</div>
          </div>
          <div class="check__card" v-show="showText">
            <p>年齢</p>
            <div>{{ tweet.old }}</div>
          </div>
          <div class="check__card">
            <p>方言</p>
            <div>{{ tweet.slang }}</div>
          </div>
          <div class="check__card" v-show="showText">
            <p>エピソード</p>
            <div>{{ tweet.episode }}</div>
          </div>
          <div class="check__card" v-show="showText">
            <p>感想</p>
            <div>{{ tweet.thoughts }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      InputValue: "",
      tweets: [],
      showText: false,
      bgimg: "~@/assets/" + this.$route.params.id + ".jpg",
    }
  },
  methods: {
    CheckShow() {
      this.showText = !this.showText
    },
    Checkhide() {
      this.showText = !this.showText
    },
  },
  created() {
    firebase
      .firestore()
      .collection("tweets")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.tweets.push({
            id: doc.id,
            UserName: doc.get("UserName"),
            old: doc.get("old"),
            slang: doc.get("slang"),
            prefecture: doc.get("prefecture"),
            episode: doc.get("episode"),
            thoughts: doc.get("thoughts"),
          })
        })
      })
  },
  computed: {
    resultKey() {
      return this.tweets.filter((tweet) => {
        return tweet.prefecture === this.$route.params.id
      })
    },
  },
}
</script>

<style>
body {
}
header {
  top: 0;
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: white;
}
.fixed-bg {
  min-height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.bg-img {
  background-image: url("~@/assets/北海道.jpg");
}
/* .bar {
  padding-top: 300px;
} */
.check__container {
  border: 3px solid black;
  border-radius: 10px;
  background-color: none;
  position: relative;
}
.check__content {
  padding: 20px;
}
.check__title {
  padding: 20px;
  background-color: #ffdddd;
  border-radius: 10px;
}
.check__card {
  padding: 10px;
  background-color: #fff8dc;
  margin: 5px;
  border-radius: 10px;
}
.a__hide {
  display: block;
}
.a__show {
  display: none;
}
</style>
