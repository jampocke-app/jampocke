<template>
  <div class="about">
    <Header />
    <!-- <header>a</header> -->
    <div class="pre__name">{{ this.$route.params.id }}</div>
    <div class="img"><img :src="bgimg" class="fixed-bg" /></div>

    <!-- 過去の投稿を閲覧する画面 -->
    <div class="check__container">
      <div class="check__title">Scroll</div>

      <!-- ここから１投稿分 -->
      <div
        class="check__content"
        v-for="(tweet, index) in resultKey"
        :key="tweet.id"
        @mouseenter="CheckShow(index)"
        @mouseleave="Checkhide(index)"
      >
        <!-- ユーザーネーム -->
        <div class="nameoldslang__flex">
          <div class="check__card">
            <div class="name__font">{{ tweet.UserName }}</div>
          </div>

          <!-- 方言 -->
          <div
            class="check__card slangbutton"
            v-show="hoverFlag && index === hoverIndex"
          >
            {{ tweet.slang }}
          </div>

          <!-- 年齢 -->
          <div class="check__card" v-show="hoverFlag && index === hoverIndex">
            <div>{{ tweet.old }}歳</div>
          </div>
        </div>

        <!-- エピソード -->
        <div class="check__card">
          <div class="episode__font">{{ tweet.episode }}</div>
        </div>

        <!-- 感想 -->
        <div class="check__card">
          <div
            v-show="hoverFlag && index === hoverIndex"
            class="thoughts__font"
          >
            {{ tweet.thoughts }}
          </div>
          <button @click="goodButton">love</button>
          {{ count }}
          <!-- １投稿分終了 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import Header from "@/components/Header.vue"

export default {
  data() {
    return {
      tweets: [],
      bgimg: require("@/assets/" + this.$route.params.id + ".jpg"),
      hoverFlag: false,
      hoverIndex: null,
      count: 0,
    }
  },

  // 触れたら投稿の全てが見れる
  methods: {
    CheckShow(index) {
      this.hoverFlag = true
      this.hoverIndex = index
    },
    Checkhide() {
      this.hoverFlag = false
    },
    goodButton() {
      this.count++
    },
  },

  // 過去の投稿を閲覧できる
  created() {
    firebase
      .firestore()
      .collection("tweets")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.tweets.push({
            id: doc.id,
            UserName: doc.get("UserName"),
            old: doc.get("old"),
            slang: doc.get("slang"),
            prefecture: doc.get("prefecture"),
            episode: doc.get("episode"),
            thoughts: doc.get("thoughts"),
          })
        })
      })
  },

  // 選んだ投稿分のみ表示される
  computed: {
    resultKey() {
      return this.tweets.filter((tweet) => {
        return tweet.prefecture === this.$route.params.id
      })
    },
  },
  components: {
    Header,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* 背景画像について */
.img {
  position: relative;
  height: 100vh;
}
.img img {
  position: fixed;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  min-width: 100%;
  max-height: 100%;
  max-width: inherit;
}
/* 都道府県名のついて */
.pre__name {
  z-index: 100;
  color: white;
  position: fixed;
  writing-mode: vertical-rl;
  text-orientation: upright;
  left: 3vw;
  top: 20vh;
  font-size: 6.1rem;
  font-style: italic;
  font-family: "游明朝", "YuMincho", "ヒラギノ明朝 Pro W3",
    "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
  text-shadow: 0.3rem 0.2rem 0.1rem #000, 0.4rem 0.3rem 0 #fff;
  /* text-shadow: 0.3rem 0.3rem 0.2rem black; */
}

/* 投稿を格納する場所について */
.check__container {
  margin: -30vh 5vw auto 5vw;
  z-index: 100;
  position: relative;
  background-color: rgba(165, 190, 207, 0.75);
  bottom: 0;
  padding-bottom: 100px;
}

/* Scroll文字について */
.check__title {
  font-size: 1.1rem;
  padding: 20px 20px 50px 20px;
  color: white;
  border-radius: 10px;
  font-family: "游明朝", "YuMincho", "ヒラギノ明朝 Pro W3",
    "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
}

/* １投稿分について */
.check__content {
  margin: 20px 50px;
  background-color: #335495;
  padding: 10px;
  flex-wrap: wrap;
}

/* 名前方言年齢を格納する所について */
.nameoldslang__flex {
  display: flex;
  align-items: center;
  padding-bottom: 6px;
  position: relative;
  text-decoration: none;
}

/* 名前方言年齢を格納する所を触れると傍線が出る */
.nameoldslang__flex::after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: white;
  transition: all 0.3s ease 0s;
}
/* 以下同文 */
.nameoldslang__flex:hover {
  cursor: pointer;
}
/* 以下同文 */
.nameoldslang__flex:hover::after {
  width: 100%;
}

/* １つの投稿の各情報を入れるタグについて */
.check__card {
  color: white;
}

/* ユーザーネームを入れるとこについて */
.name__font {
  font-family: "Hiragino Mincho ProN", "ヒラギノ明朝 ProN",
    "Hiragino Mincho Pro", "ヒラギノ明朝 Pro";
  margin-left: 2em;
  margin-right: 3em;
  float: left;
}

/* エピソードを入れるところについて */
.episode__font {
  font-family: "游ゴシック体", "YuGothic", "游ゴシック", "Yu Gothic",
    "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo",
    sans-serif;
  padding: 20px 0;
}

/* 感想を入れるところについて */
.thoughts__font {
  font-family: "游ゴシック体", "YuGothic", "游ゴシック", "Yu Gothic",
    "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo",
    sans-serif;
  padding: 20px 0;
}

/* 方言をボタン風にするところについて */
.slangbutton {
  padding: 3px;
  margin-right: 1.5em;
  font-family: Hiragino Mincho ProN、ヒラギノ明朝 ProN、Hiragino Mincho
    Pro、ヒラギノ明朝 Pro;
}
</style>
