<template>
  <div class="about">
    <Header />
    {{ this.$route.params.id }}
    <h1>閲覧画面</h1>
    <div id="app">
      <!-- 過去の投稿を閲覧する画面 -->
      <div class="check__container">
        <div class="check__title">過去の投稿</div>
        <div class="check__content" v-for="tweet in resultKey" :key="tweet.id">
          <div class="check__card">
            <p>ユーザーネーム</p>
            <div>{{ tweet.UserName }}</div>
          </div>
          <div class="check__card">
            <p>年齢</p>
            <div>{{ tweet.old }}</div>
          </div>
          <div class="check__card">
            <p>方言</p>
            <div>{{ tweet.slang }}</div>
          </div>
          <div class="check__card">
            <p>都道府県</p>
            <div>{{ tweet.prefecture }}</div>
          </div>
          <div class="check__card">
            <p>エピソード</p>
            <div>{{ tweet.episode }}</div>
          </div>
          <div class="check__card">
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
    }
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

<style scoped>
body {
  background-color: #fdb86d;
}

.check__container {
  border: 3px solid black;
  border-radius: 10px;
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
</style>
