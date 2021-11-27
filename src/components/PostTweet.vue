<template>
  <div id="app">
    <!-- 投稿画面 -->
    <div class="post__form">
      <div class="post__title">投稿内容</div>
      <div class="post__text">
        <textarea
          class="post__textarea"
          cols="30"
          rows="10"
          v-model="InputValue"
        ></textarea>
      </div>
      <div class="post__button">
        <button v-on:click="PostTweet">投稿</button>
      </div>
    </div>

    <!-- 過去の投稿を閲覧する画面 -->
    <div class="check__content">
      <div class="check__title">過去の投稿</div>
      <div class="check__card" v-for="tweet in tweets" :key="tweet.id">
        <div>{{ tweet.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import moment from "moment"

export default {
  filters: {
    moment: function () {
      return moment().format("YYYYMMDDhhmmss")
    },
  },
  data() {
    return {
      InputValue: "",
      tweets: [],
      //   date: moment().format("YYYYMMDDhhmmss"),
    }
  },
  methods: {
    PostTweet() {
      firebase
        .firestore()
        .collection("tweets")
        .doc(moment)
        .set({ text: this.InputValue })
        .then(() => {
          this.tweets.unshift({
            id: moment,
            text: this.InputValue,
          })
        })
    },
  },
  created() {
    firebase
      .firestore()
      .collection("tweets")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.tweets.push({
            id: doc.id,
            text: doc.get("text"),
          })
        })
      })
  },
}
</script>

<style scoped>
body {
  background-color: #fdb86d;
}
.post__form {
  border: 3px solid black;
  border-radius: 10px;
  margin: 10px;
}
.post__title {
  padding: 20px;
  background-color: #ddeeff;
}
.check__title {
  padding: 20px;
  background-color: #ffdddd;
}
.check__card {
  border-radius: 10px;
  background-color: #fff8dc;
  margin: 5px;
}
.check__content {
  border: 3px solid black;
  border-radius: 10px;
}
</style>
