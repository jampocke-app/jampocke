<template>
  <div class="home">
    <Header />
    <div>
      <h5>ユーザーネーム</h5>
      <input
        type="text"
        class="UserName__input"
        v-model="UserName"
        placeholder="方言 太郎"
      />
    </div>
    <div>
      <h5>年齢</h5>
      <input
        type="number"
        class="old__input"
        v-model="old"
        placeholder="半角数字"
      />
    </div>
    <div>
      <h5>方言</h5>
      <input
        type="text"
        class="slang__input"
        v-model="slang"
        placeholder="関西弁"
      />
    </div>
    <div>
      <h5>都道府県選択</h5>

      <select v-model="prefecture">
        <option value="" disabled selected>北海道・東北</option>
        <option value="北海道">北海道</option>
        <option value="青森">青森県</option>
        <option value="岩手県">岩手県</option>
        <option value="宮城県">宮城県</option>
        <option value="秋田県">秋田県</option>
        <option value="山形県">山形県</option>
        <option value="福島県">福島県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled selected>関東</option>
        <option value="茨城県">茨城県</option>
        <option value="栃木県">栃木県</option>
        <option value="群馬県">群馬県</option>
        <option value="埼玉県">埼玉県</option>
        <option value="千葉県">千葉県</option>
        <option value="東京都">東京都</option>
        <option value="神奈川県">神奈川県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled selected>中部</option>
        <option value="新潟県">新潟県</option>
        <option value="富山県">富山県</option>
        <option value="石川県">石川県</option>
        <option value="福井県">福井県</option>
        <option value="山梨県">山梨県</option>
        <option value="長野県">長野県</option>
        <option value="岐阜県">岐阜県</option>
        <option value="静岡県">静岡県</option>
        <option value="愛知県">愛知県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled selected>近畿</option>
        <option value="三重県">三重県</option>
        <option value="滋賀県">滋賀県</option>
        <option value="京都府">京都府</option>
        <option value="大阪府">大阪府</option>
        <option value="兵庫県">兵庫県</option>
        <option value="奈良県">奈良県</option>
        <option value="和歌山県">和歌山県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled selected>中国・四国</option>
        <option value="鳥取県">鳥取県</option>
        <option value="島根県">島根県</option>
        <option value="広島県">広島県</option>
        <option value="岡山県">岡山県</option>
        <option value="山口県">山口県</option>
        <option value="徳島県">徳島県</option>
        <option value="香川県">香川県</option>
        <option value="愛媛県">愛媛県</option>
        <option value="高知県">高知県</option>
      </select>

      <select v-model="prefecture">
        <option value="" disabled selected>九州</option>
        <option value="福岡県">福岡県</option>
        <option value="佐賀県">佐賀県</option>
        <option value="長崎県">長崎県</option>
        <option value="熊本県">熊本県</option>
        <option value="大分県">大分県</option>
        <option value="宮崎県">宮崎県</option>
        <option value="鹿児島県">鹿児島県</option>
        <option value="沖縄県">沖縄県</option>
      </select>
    </div>

    <div>
      <h5>エピソード</h5>
      <textarea
        class="episode__input"
        cols="30"
        rows="10"
        v-model="episode"
        placeholder="せやけん言ったとおりになったやろ

  ：

  こないだ大阪に旅行行ったときに出店のおじさんが、「ホンマでっか！」って言ってた"
      ></textarea>
    </div>
    <div>
      <h5>感想</h5>
      <textarea
        class="thoughts__input"
        cols="30"
        rows="10"
        v-model="thoughts"
        placeholder="圧つよめな方言で言っちゃったな

  ：

  ほんとに「ホンマでっか！」っていう人いるんだね"
      ></textarea>
    </div>
    <input type="submit" class="submit" v-on:click="submit" />
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase"
import Header from "@/components/Header.vue"

export default {
  name: "japan",
  data: function () {
    return {
      prefecture: "",
      UserName: "",
      old: "",
      slang: "",
      episode: "",
      thoughts: "",
      selected: "",
    }
  },
  methods: {
    submit() {
      this.$router.push("/Show/" + this.prefecture)
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
      // ;(this.prefecture = ""),
      //   (this.UserName = ""),
      //   (this.old = ""),
      //   (this.slang = ""),
      //   (this.episode = ""),
      //   (this.thoughts = ""),
      //   (this.selected = "")
    },
  },
  components: {
    Header,
  },
}
</script>

<style scoped>
h5 {
  padding: 1rem;
}
/* .home {
  text-align: center;
}
.episode {
  display: inline-block;
}
.thoughts {
  display: inline-block;
} */
</style>
