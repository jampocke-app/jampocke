<template>
  <div class="app">
    <button v-on:click="addComment">コメント</button>
    <div>
      <input type="text" v-model="inputComment" />

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
      inputComment: "",
      comments: [],
    }
  },
  methods: {
    addComment() {
      const comment = {
        text: this.inputComment,
      }
      firebase
        .firestore()
        .collection("comments")
        .add(comment)
        .then((ref) => {
          this.comments.push({
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
