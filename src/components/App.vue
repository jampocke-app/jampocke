<template>
  <div id="app">
    <div class="hello-wrold">
      <div class="hello-wrold__message">
        <span class="a"><b>ジ</b></span>
        <span class="b"><b>ャ</b></span>
        <span class="c"><b>ン</b></span>
        <span class="d"><b>ポ</b></span>
        <span class="e"><b>ケ</b></span>
        <span class="f"><b>ガ</b></span>
        <span class="g"><b>チ</b></span>
        <span class="h"><b>ャ</b></span>
      </div>
    </div>
    <random />
  </div>
</template>

<script>
import random from "@/components/randam.vue"
export default {
  name: "App",
  components: {
    random,
  },
  data: function () {},
  methods: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
.hello-wrold {
  margin-top: 5spx;
  text-align: center;
}

.hello-wrold .hello-wrold__message {
  color: #4128ce;
  font-size: 50px;
  animation: rotate-anime 2s ease-in-out 1;
  background-color: wheat;
}

@keyframes rotate-anime {
  100% {
    transform: rotate(360deg);
  }
}

.a {
  color: red;
}

.b {
  color: green;
}

.c {
  color: rgb(15, 196, 241);
}

.d {
  color: yellow;
}

.e {
  color: red;
}

.f {
  color: green;
}

.g {
  color: rgb(15, 196, 241);
}

.h {
  color: yellow;
}
</style>
