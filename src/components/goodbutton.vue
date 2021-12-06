<template>
  <div>
    <div class="goodbutton"></div>
    <button v-on:click="goodButton">いいね👍</button>
    {{ good }}
    <p v-for="count in counts" :key="count.id">
    {{ counts }}
    </p>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      good: "💛",
      count:0,
      counts:[],
    }
  },
  methods: {
    goodButton() {
      this.count++
    },
    firebase.firestore().collection("counts")
        .add(count)
        .then(ref => {
          this.counts.push({
            id: ref.id,
            ...count
          });
        }),
    },
created() {
    firebase
      .firestore()
      .collection("counts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.counts.push({
            id: doc.id,
            ...doc.data()
          });
        });
      });
  }
  };
</script>
