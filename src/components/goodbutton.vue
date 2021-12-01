<template>
  <div>
    <div class="goodbutton">いいね機能</div>
    <button v-on:click="good">いいね👍</button>
    <div v-if="hyouji">💛</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hyouji: false,
    }
  },
  methods: {
    good() {
      this.hyouji = true
    },
  },
}
</script>

<style></style>
