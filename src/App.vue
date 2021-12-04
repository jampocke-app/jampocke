<template>
  <div class="app">
    <button v-on:click="addcomment">コメント</button>
    <div>
      <p v-for="comment in comments" :key="comment.id">
        {{ comment.text }}
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      comments: [],
    }
  },
  methods: {
    addcomment() {
      const comment = {
        text: "こんにちは",
      }
      firebase
        .firestore()
        .collection("comments")
        .add(comment)
        .then((ref) => {
          this.tweets.push({
            id: ref.id,
            ...comment,
          })
        })
    },
  },
  created() {
    firebase
      .firestore()
      .collection("comments")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.comments.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
</script>
