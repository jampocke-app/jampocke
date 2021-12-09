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
          <button @click="goodButton">💛</button>
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
  margin-top: 100px;
}
/* 都道府県名のついて */
.pre__name {
  z-index: 100;
  color: black;
  position: absolute;
  writing-mode: vertical-rl;
  text-orientation: upright;
  left: 3vw;
  top: 6vh;
  font-size: 7rem;
  font-style: italic;
  font-family: "游明朝", "YuMincho", "ヒラギノ明朝 Pro W3",
    "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
  /* padding: 20vh auto auto 3vw; */
}

/* 投稿を格納する場所について */
.title {
  position: relative;
  background: #eff4ff;
  margin-top: 20px;
  margin-left: 43%;
  margin-right: 43%;
  padding: 2px 20px 2px 20px;
  font-size: 25px;
  color: #474747;
  border-radius: 10px;
  font-weight: bold;
}

.check__container {
  margin: -20vh 5vw auto 5vw;
  z-index: 10;
  position: relative;
  background-color: #330066;
  bottom: 0;
  padding-bottom: 100px;
}

/* Scroll文字について */
.check__title {
  padding: 20px 20px 50px 20px;
  color: white;
  border-radius: 10px;
  font-family: "游明朝", "YuMincho", "ヒラギノ明朝 Pro W3",
    "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
}

/* １投稿分について */
.check__content {
  margin: 20px 50px;
  background-color: #165e83;
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
.nameoldslang__flex:hover {
  cursor: pointer;
}
.nameoldslang__flex:hover::after {
  width: 100%;
}

/* １つの投稿の各情報を入れるタグについて */
.check__card {
  color: white;
}

/* ユーザーネームを入れるとこについて */
.name__font {
  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ",
    "Meiryo", sans-serif;
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

/* 「感想」の文字について */
.thoughts__title {
  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ",
    "Meiryo", sans-serif;
  margin-top: 2em;
  margin-left: 5.5em;
  text-align: left;
  color: #cccccc;
}

/* 方言をボタン風にするところについて */
.slangbutton {
  padding: 3px;
  margin-right: 1.5em;
  font-family: Hiragino Mincho ProN、ヒラギノ明朝 ProN、Hiragino Mincho
    Pro、ヒラギノ明朝 Pro;
}

/* 年齢や感想が見えないようにするやつ */
.a__hide {
  display: block;
}
.a__show {
  display: none;
}
</style>
