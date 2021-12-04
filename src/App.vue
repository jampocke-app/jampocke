<template>
  <div id="app">
    <div class="hello-wrold">
      <div class="hello-wrold__message">
        {{ message }}
      </div>
    </div>
    <Comment />
  </div>
</template>

<script>
import Comment from "@/components/Comment.vue"
export default {
  name: "App",
  components: {
    Comment,
  },
  data: function () {
    return {
      message: "コメント投稿＆一覧画面",
    }
  },
  methods: {},
}
</script>
