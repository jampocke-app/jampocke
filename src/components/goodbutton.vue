<template>
  <div>
    <div class="goodbutton">いいね機能</div>
    <button v-on:click="good">いいね👍</button>
    <p v-for="good in goods" :key="good.id">
      {{ good.text }}
    </p>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      goods: [],
    }
  },
  methods: {
    good() {
      const good = {
        text: "💛",
      }
      firebase
        .firestore()
        .collection("goods")
        .add(good)
        .then((ref) => {
          this.comments.push({
            id: ref.id,
            ...good,
          })
        })
    },
  },

  created() {
    firebase
      .firestore()
      .collection("goods")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.goods.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
}
</script>
