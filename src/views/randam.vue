<template>
  <div class="over">
    <Header />
    <div id="app">
      <div class="hello-wrold">
        <div class="logo">
          <img src="../assets/gacha_logo.png" />
        </div>
      </div>
    </div>
    <button v-on:click="open()" class="tytle">♻</button>
    <div class="result">
      <b>{{ components[randoms] }}</b>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  data() {
    return {
      components: [
        "北海道",
        "青森県",
        "岩手県",
        "宮城県",
        "秋田県",
        "山形県",
        "福島県",
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
        "福岡県",
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
      this.randoms = 0 + Math.floor(Math.random() * 47)
    },
  },
  components: {
    Header,
  },
}
</script>

<style scoped>
.logo {
  background: #eef8ff;
  padding: 0.5em;
  border-radius: 0.5em;
  margin-top: 10px;
  margin-left: 40%;
  margin-right: 40%;
}

.tytle {
  text-align: center;
  align-items: center;
  margin-top: 20px;
  font-size: 100px;
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
  font-size: 50px;
  margin-left: 36%;
  margin-right: 36%;
  margin-top: 5%;
  color: brown;
  background-color: rgba(203, 236, 12, 0.555);
  border-radius: 10px 0 10px 0;
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
  background-image: url("~@/assets/ガチャ.jpg");
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

@keyframes rotate-anime {
  100% {
    transform: rotate(360deg);
  }
}
</style>
