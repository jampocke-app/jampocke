<template>
  <div class="header">
    <header class="header_1">
      <div class="container">
        <div class="area_logo_header">
          <a class="logo">
            <router-link to="/"><img src="../assets/logo.png" /></router-link>
          </a>
        </div>
        <nav class="area_nav_header">
          <ul class="list_nav_header">
            <li><router-link to="/">マイページ</router-link></li>
            <li><router-link to="/randam">ガチャ</router-link></li>
            <li><router-link to="/post">新規投稿</router-link></li>
            <li><router-link to="/">ログアウト</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <header class="header2">
      <div class="hokkai">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>北海道</option>
          <option selected value="北海道">北海道</option>
        </select>
      </div>
      <div class="tohoku">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>東北地方</option>
          <option selected value="青森">青森県</option>
          <option selected value="岩手県">岩手県</option>
          <option selected value="宮城県">宮城県</option>
          <option selected value="秋田県">秋田県</option>
          <option selected value="山形県">山形県</option>
          <option selected value="福島県">福島県</option>
        </select>
      </div>
      <div class="kanto">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>関東地方</option>
          <option selected value="茨城県">茨城県</option>
          <option selected value="栃木県">栃木県</option>
          <option selected value="群馬県">群馬県</option>
          <option selected value="埼玉県">埼玉県</option>
          <option selected value="千葉県">千葉県</option>
          <option selected value="東京都">東京都</option>
          <option selected value="神奈川県">神奈川県</option>
        </select>
      </div>
      <div class="tyubu">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>中部地方</option>
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
      </div>
      <div class="kinki">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>近畿地方</option>
          <option selected value="三重県">三重県</option>
          <option selected value="滋賀県">滋賀県</option>
          <option selected value="京都府">京都府</option>
          <option selected value="大阪府">大阪府</option>
          <option selected value="兵庫県">兵庫県</option>
          <option selected value="奈良県">奈良県</option>
          <option selected value="和歌山県">和歌山県</option>
        </select>
      </div>
      <div class="tyugoku">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>中国地方</option>
          <option selected value="鳥取県">鳥取県</option>
          <option selected value="島根県">島根県</option>
          <option selected value="広島県">広島県</option>
          <option selected value="岡山県">岡山県</option>
          <option selected value="山口県">山口県</option>
        </select>
      </div>
      <div class="sikoku">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>四国地方</option>
          <option selected value="徳島県">徳島県</option>
          <option selected value="香川県">香川県</option>
          <option selected value="愛媛県">愛媛県</option>
          <option selected value="高知県">高知県</option>
        </select>
      </div>
      <div class="kyusyu">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>九州地方</option>
          <option selected value="福岡県">福岡県</option>
          <option selected value="佐賀県">佐賀県</option>
          <option selected value="長崎県">長崎県</option>
          <option selected value="熊本県">熊本県</option>
          <option selected value="大分県">大分県</option>
          <option selected value="宮崎県">宮崎県</option>
          <option selected value="鹿児島県">鹿児島県</option>
          <option selected value="沖縄県">沖縄県</option>
        </select>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data: function () {
    return { selected: "" }
  },
  methods: {
    gotopage(event) {
      console.log(event)
      this.$router.push("/Show/" + this.selected)
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
}
.header_1 {
  background: rgb(208, 240, 211);
}

ul {
  list-style: none;
}

.header_1 > .container {
  height: 60px;
  display: flex;
  align-items: center;
}

.area_logo_header .logo {
  display: block;
}

.area_logo_header .logo img {
  height: 40px;
  vertical-align: bottom;
}

.area_nav_header {
  margin-left: auto;
}

.list_nav_header {
  display: flex;
  align-items: center;
}

.list_nav_header > li + li {
  margin-left: 40px;
}

.list_nav_header a {
  color: rgb(80, 80, 80);
  font: 500 15px/1em "noto sans japanese", sans-serif;
  border-left: blanchedalmond;
}

.header2 {
  font-weight: bold;
  width: 100%;
  height: 50px;
  background: rgb(148, 204, 157);
  box-sizing: border-box;
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
}

.header2 .gnav .menu {
  display: flex;
}

.header2 .gnav .menu li {
  list-style: none;
}

.header2 .gnav .menu li + li {
  margin-left: 40px;
}
select {
  border: none;
  border-radius: 5px;
  color: rgb(109, 108, 108);
  font-size: 14px;
  padding: 0 10px;
  height: 30px;
  width: 100px;
  display: flex;
}

option[selected][disabled] {
  display: none;
}
.hokkai {
  position: absolute;
  top: 10px;
  right: 57%;
}
.tohoku {
  position: absolute;
  top: 10px;
  right: 50%;
}
.kanto {
  position: absolute;
  top: 10px;
  right: 43%;
}
.tyubu {
  position: absolute;
  top: 10px;
  right: 36%;
}
.kinki {
  position: absolute;
  top: 10px;
  right: 29%;
}
.tyugoku {
  position: absolute;
  top: 10px;
  right: 22%;
}
.sikoku {
  position: absolute;
  top: 10px;
  right: 15%;
}
.kyusyu {
  position: absolute;
  top: 10px;
  right: 8%;
}
</style>
