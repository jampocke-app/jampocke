<template>
  <div id="app">
    <!-- 投稿画面 -->
    <div class="post__form">
      <div>投稿内容</div>
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
    <div>
      <div>過去の投稿</div>
      <div class="check__contents" v-for="tweet in tweets" :key="tweet.id">
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

<style scoped></style>
