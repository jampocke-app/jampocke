<template>
  <div class="over">
    <div id="app">
      <div class="hello-wrold">
        <div class="hello-wrold__message">
          <span class="a"><b>ほ</b></span>
          <span class="b"><b>う</b></span>
          <span class="c"><b>げ</b></span>
          <span class="d"><b>ん</b></span>
          <span class="e"><b>ガ</b></span>
          <span class="f"><b>チ</b></span>
          <span class="g"><b>ャ</b></span>
        </div>
      </div>
    </div>
    <button v-on:click="open()" class="tytle">♻︎</button>
    <div class="result">
      <b>{{ components[randoms] }}</b>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [
        "北海道",
        "青森県",
        "秋田県",
        "岩手県",
        "宮城県",
        "福島県",
        "山形県",
        "茨城県",
        "栃木県",
        "群馬県",
        "埼玉県",
        "千葉県",
        "東京都",
        "神奈川県",
        "新潟県",
        "富山県",
        "石川県",
        "福井県",
        "山梨県",
        "長野県",
        "岐阜県",
        "静岡県",
        "愛知県",
        "三重県",
        "滋賀県",
        "京都府",
        "大阪府",
        "兵庫県",
        "奈良県",
        "和歌山県",
        "鳥取県",
        "島根県",
        "岡山県",
        "広島県",
        "山口県",
        "徳島県",
        "香川県",
        "愛媛県",
        "高知県",
        "福島県",
        "佐賀県",
        "長崎県",
        "熊本県",
        "大分県",
        "宮崎県",
        "鹿児島県",
        "沖縄県",
      ],
      randoms: null,
    }
  },
  methods: {
    open() {
      this.randoms = 0 + Math.floor(Math.random() * 5)
    },
  },
}
</script>

<style>
.tytle {
  justify-content: space-around;
  text-align: center;
  align-items: center;
  position: relative;
  font-size: 100px;
  top: 50px;
  left: 550px;
  border-radius: 50%;
  background: skyblue;
  display: inline-block;
  animation: rotate-anime 2s ease-in-out infinite;
  transition: all 0.2s;
}
.tytle:hover {
  transform: scale(1.5, 1.5);
}

.result {
  justify-content: space-around;
  text-align: center;
  align-items: center;
  position: relative;
  left: 470px;
  top: 100px;
  font-size: 50px;
  height: 200px;
  width: 300px;
  color: brown;
  background-color: rgba(203, 236, 12, 0.555);
  border-radius: 10px 0 10px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  animation-name: fadeInAnime;
  animation-fill-mode: backwards;
  animation-duration: 4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-direction: normal;
  transition: all 0.2s;
}

.result:hover {
  transform: scale(1.3, 1.3);
}

@keyframes fadeInAnime {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rotate-anime {
  100% {
    transform: rotate(360deg);
  }
}

.over {
  background-image: url("~@/components/ガチャ.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}

.circle {
  display: inline-block;
  width: 80px;
  height: 80px;
  background-color: rgba(122, 210, 245, 0.555);

  text-align: center;
  line-height: 80px;
  animation-name: fadeInAnime;
  animation-fill-mode: backwards;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-delay: 0.5s;
  animation-direction: normal;
}

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
</style>
