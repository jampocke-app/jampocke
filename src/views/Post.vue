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
        <option value="東京都">東京</option>
        <option value="神奈川県">神奈川</option>
        <option value="埼玉県">埼玉</option>
        <option value="千葉県">千葉</option>
        <option value="栃木県">栃木</option>
        <option value="茨城県">茨城</option>
        <option value="群馬県">群馬</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>北海道・東北</option>
        <option value="北海道">北海道</option>
        <option value="青森県">青森</option>
        <option value="秋田県">秋田</option>
        <option value="岩手県">岩手</option>
        <option value="宮城県">宮城</option>
        <option value="山形県">山形</option>
        <option value="福島県">福島</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>中部</option>
        <option value="新潟県">新潟</option>
        <option value="富山県">富山</option>
        <option value="長野県">長野</option>
        <option value="石川県">石川</option>
        <option value="静岡県">静岡</option>
        <option value="山梨県">山梨</option>
        <option value="愛知県">愛知</option>
        <option value="岐阜県">岐阜</option>
        <option value="福井県">福井</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>近畿</option>
        <option value="滋賀県">滋賀</option>
        <option value="三重県">三重</option>
        <option value="京都府">京都</option>
        <option value="奈良県">奈良</option>
        <option value="兵庫県">兵庫</option>
        <option value="大阪府">大阪</option>
        <option value="和歌山県">和歌山</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>中国・四国</option>
        <option value="鳥取県">鳥取</option>
        <option value="岡山県">岡山</option>
        <option value="島根県">島根</option>
        <option value="広島県">広島</option>
        <option value="山口県">山口</option>
        <option value="香川県">香川</option>
        <option value="徳島県">徳島</option>
        <option value="高知県">高知</option>
        <option value="愛媛県">愛媛</option>
      </select>

      <select v-model="prefecture">
        <option value="0" disabled>九州</option>
        <option value="福岡県">福岡</option>
        <option value="大分県">大分</option>
        <option value="宮崎県">宮崎</option>
        <option value="熊本県">熊本</option>
        <option value="佐賀県">佐賀</option>
        <option value="熊本県">熊本</option>
        <option value="長崎県">長崎</option>
        <option value="鹿児島県">鹿児島</option>
        <option value="沖縄県">沖縄</option>
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
