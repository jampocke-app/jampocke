<template>
  <div class="home">
<<<<<<< HEAD
    <Header />
    <h1>投稿画面</h1>
    <div>
      <h5>ユーザーネーム</h5>
      <input
        type="text"
        class="UserName"
        v-model="UserName"
        placeholder="方言 太郎"
      />
    </div>
    <div>
      <h5>年齢</h5>
      <input type="number" class="old" v-model="old" placeholder="半角数字" />
    </div>
    <div>
      <h5>方言</h5>
      <input type="text" class="slang" v-model="slang" placeholder="関西弁" />
    </div>
    <div>
      <h5>都道府県選択</h5>

      <select v-model="prefecture">
        <option value="" disabled selected>北海道・東北</option>
        <option selected value="北海道">北海道</option>
        <option selected value="青森">青森県</option>
        <option selected value="岩手県">岩手県</option>
        <option selected value="宮城県">宮城県</option>
        <option selected value="秋田県">秋田県</option>
        <option selected value="山形県">山形県</option>
        <option selected value="福島県">福島県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled>関東</option>
        <option selected value="茨城県">茨城県</option>
        <option selected value="栃木県">栃木県</option>
        <option selected value="群馬県">群馬県</option>
        <option selected value="埼玉県">埼玉県</option>
        <option selected value="千葉県">千葉県</option>
        <option selected value="東京都">東京都</option>
        <option selected value="神奈川県">神奈川県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled>中部</option>
        <option selected value="新潟県">新潟県</option>
        <option selected value="富山県">富山県</option>
        <option selected value="石川県">石川県</option>
        <option selected value="福井県">福井県</option>
        <option selected value="山梨県">山梨県</option>
        <option selected value="長野県">長野県</option>
        <option selected value="岐阜県">岐阜県</option>
        <option selected value="静岡県">静岡県</option>
        <option selected value="愛知県">愛知県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled>近畿</option>
        <option selected value="三重県">三重県</option>
        <option selected value="滋賀県">滋賀県</option>
        <option selected value="京都府">京都府</option>
        <option selected value="大阪府">大阪府</option>
        <option selected value="兵庫県">兵庫県</option>
        <option selected value="奈良県">奈良県</option>
        <option selected value="和歌山県">和歌山県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled>中国・四国</option>
        <option selected value="鳥取県">鳥取県</option>
        <option selected value="島根県">島根県</option>
        <option selected value="広島県">広島県</option>
        <option selected value="岡山県">岡山県</option>
        <option selected value="山口県">山口県</option>
        <option selected value="徳島県">徳島県</option>
        <option selected value="香川県">香川県</option>
        <option selected value="愛媛県">愛媛県</option>
        <option selected value="高知県">高知県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled>九州</option>
        <option selected value="福岡県">福岡県</option>
        <option selected value="佐賀県">佐賀県</option>
        <option selected value="長崎県">長崎県</option>
        <option selected value="熊本県">熊本県</option>
        <option selected value="大分県">大分県</option>
        <option selected value="宮崎県">宮崎県</option>
        <option selected value="鹿児島県">鹿児島県</option>
        <option selected value="沖縄県">沖縄県</option>
=======
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
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e
      </select>
    </div>

    <div>
      <h5>エピソード</h5>
      <textarea
        class="episode"
        cols="30"
        rows="10"
        v-model="episode"
<<<<<<< HEAD
        placeholder=""
=======
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e
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
<<<<<<< HEAD
import Header from "@/components/Header.vue"

export default {
  name: "japan",
  data: function () {
=======

export default {
  name: "Home",

  data() {
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e
    return {
      prefecture: 0,
      UserName: "",
      old: "",
      slang: "",
      episode: "",
      thoughts: "",
<<<<<<< HEAD
      selected: "",
=======
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e
    }
  },
  methods: {
    submit() {
<<<<<<< HEAD
      this.$router.push("/Show/" + this.prefecture)
=======
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e
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
<<<<<<< HEAD
  components: {
    Header,
  },
=======
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e
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
