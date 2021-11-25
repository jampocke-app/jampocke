<template>
  <div id="app">
    <div class="post__form">
      <div>投稿内容</div>
      <div class="post__text">
        <textarea class="post__textarea" cols="30" rows="10"></textarea>
      </div>
      <div class="post__button">
        <button v-on:click="PostTweet">投稿</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped></style>
