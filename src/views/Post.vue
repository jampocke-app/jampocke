<template>
  <div class="home">
    <h1>投稿画面</h1>
    <div>
      <h5>ユーザーネーム</h5>
      <input type="text" class="UserName" v-model="UserName" />
    </div>
    <div>
      <h5>年齢</h5>
      <input type="number" class="old" v-model="old" />
    </div>
    <div>
      <h5>方言</h5>
      <input type="text" class="slang" v-model="slang" />
    </div>
    <div>
      <h5>都道府県選択</h5>
      <select v-model="prefecture">
        <option value="0" disabled>関東</option>
        <option value="東京">東京</option>
        <option value="神奈川">神奈川</option>
        <option value="埼玉">埼玉</option>
        <option value="千葉">千葉</option>
        <option value="栃木">栃木</option>
        <option value="茨城">茨城</option>
        <option value="群馬">群馬</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>北海道・東北</option>
        <option value="北海道">北海道</option>
        <option value="青森">青森</option>
        <option value="秋田">秋田</option>
        <option value="岩手">岩手</option>
        <option value="宮城">宮城</option>
        <option value="山形">山形</option>
        <option value="福島">福島</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>中部</option>
        <option value="新潟">新潟</option>
        <option value="富山">富山</option>
        <option value="長野">長野</option>
        <option value="石川">石川</option>
        <option value="静岡">静岡</option>
        <option value="山梨">山梨</option>
        <option value="愛知">愛知</option>
        <option value="岐阜">岐阜</option>
        <option value="福井">福井</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>近畿</option>
        <option value="滋賀">滋賀</option>
        <option value="三重">三重</option>
        <option value="京都">京都</option>
        <option value="奈良">奈良</option>
        <option value="兵庫">兵庫</option>
        <option value="大阪">大阪</option>
        <option value="和歌山">和歌山</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>中国・四国</option>
        <option value="鳥取">鳥取</option>
        <option value="岡山">岡山</option>
        <option value="島根">島根</option>
        <option value="広島">広島</option>
        <option value="山口">山口</option>
        <option value="香川">香川</option>
        <option value="徳島">徳島</option>
        <option value="高知">高知</option>
        <option value="愛媛">愛媛</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>九州</option>
        <option value="福岡">福岡</option>
        <option value="大分">大分</option>
        <option value="宮崎">宮崎</option>
        <option value="熊本">熊本</option>
        <option value="佐賀">佐賀</option>
        <option value="熊本">熊本</option>
        <option value="長崎">長崎</option>
        <option value="鹿児島">鹿児島</option>
        <option value="沖縄">沖縄</option>
      </select>
    </div>

    <div>
      <h5>エピソード</h5>
      <textarea
        class="episode"
        cols="30"
        rows="10"
        v-model="episode"
      ></textarea>
    </div>
    <div>
      <h5>感想</h5>
      <textarea
        class="thoughts"
        cols="30"
        rows="10"
        v-model="thoughts"
      ></textarea>
    </div>
    <input type="submit" class="submit" v-on:click="submit" />
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase"

export default {
  name: "Home",

  data() {
    return {
      prefecture: 0,
      UserName: "",
      old: "",
      slang: "",
      episode: "",
      thoughts: "",
    }
  },
  methods: {
    submit() {
      firebase
        .firestore()
        .collection("tweets")
        // .doc(moment())
        .add({
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          UserName: this.UserName,
          old: this.old,
          slang: this.slang,
          prefecture: this.prefecture,
          episode: this.episode,
          thoughts: this.thoughts,
        })
      //   console.log(moment())
    },
  },
}
</script>

<style scoped>
.home {
  text-align: center;
}
.episode {
  display: inline-block;
}
.thoughts {
  display: inline-block;
}
</style>
