<template>
  <div class="header">
    <header class="header_1">
      <div class="container">
        <div class="area_logo_header">
          <a class="logo" href="/">
            <img src="../assets/logo.png" />
          </a>
        </div>
        <nav class="area_nav_header">
          <ul class="list_nav_header">
            <li><a href="/">マイページ</a></li>
            <li><a href="/">ガチャ</a></li>
            <li><a href="/">ログアウト</a></li>
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
          <option selected value="Hukusima">福島県</option>
        </select>
      </div>
      <div class="kanto">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>関東地方</option>
          <option selected value="Ibaraki">茨城県</option>
          <option selected value="Totigi">栃木県</option>
          <option selected value="Gunma">群馬県</option>
          <option selected value="Saitama">埼玉県</option>
          <option selected value="Tiba">千葉県</option>
          <option selected value="Tokyo">東京都</option>
          <option selected value="Kanagawa">神奈川県</option>
        </select>
      </div>
      <div class="tyubu">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>中部地方</option>
          <option selected value="Niigata">新潟県</option>
          <option selected value="Toyama">富山県</option>
          <option selected value="Isikawa">石川県</option>
          <option selected value="Hukui">福井県</option>
          <option selected value="Yamanasi">山梨県</option>
          <option selected value="Nagano">長野県</option>
          <option selected value="Gihu">岐阜県</option>
          <option selected value="Shizuoka">静岡県</option>
          <option selected value="Aiti">愛知県</option>
        </select>
      </div>
      <div class="kinki">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>近畿地方</option>
          <option selected value="Mie">三重県</option>
          <option selected value="Siga">滋賀県</option>
          <option selected value="Kyoto">京都府</option>
          <option selected value="Osaka">大阪府</option>
          <option selected value="Hyogo">兵庫県</option>
          <option selected value="Nara">奈良県</option>
          <option selected value="Wakayama">和歌山県</option>
        </select>
      </div>
      <div class="tyugoku">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>中国地方</option>
          <option selected value="Tottori">鳥取県</option>
          <option selected value="Simane">島根県</option>
          <option selected value="Hirosima">広島県</option>
          <option selected value="Okayama">岡山県</option>
          <option selected value="Yamaguti">山口県</option>
        </select>
      </div>
      <div class="sikoku">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>四国地方</option>
          <option selected value="Tokusima">徳島県</option>
          <option selected value="Kagawa">香川県</option>
          <option selected value="Ehime">愛媛県</option>
          <option selected value="Kouti">高知県</option>
        </select>
      </div>
      <div class="kyusyu">
        <select v-model="selected" v-on:change="gotopage">
          <option value="" disabled selected>九州地方</option>
          <option selected value="Hukuoka">福岡県</option>
          <option selected value="Saga">佐賀県</option>
          <option selected value="Nagasaki">長崎県</option>
          <option selected value="Kumamoto">熊本県</option>
          <option selected value="Ooita">大分県</option>
          <option selected value="Miyazaki">宮崎県</option>
          <option selected value="Kagosima">鹿児島県</option>
          <option selected value="Okinawa">沖縄県</option>
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
body {
  padding: 80px;
}

.container {
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
}
.header_1 {
  color: aqua;
  background: black;
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
  height: 25px;
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
  color: #fff;
  font: 500 15px/1em "noto sans japanese", sans-serif;
  border-left: blanchedalmond;
}

.header .header2 {
  font-weight: bold;
  width: 99%;
  height: 50px;
  background: rgb(231, 204, 204);
  box-sizing: border-box;
  position: fixed;
  top: 68px;
  margin-left: 8px;
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
  color: #333;
  font-size: 14px;
  padding: 0 10px;
  height: 30px;
  width: 100px;
  display: flex;
  position: relative;
}

option[selected][disabled] {
  display: none;
}
.hokkai {
  position: absolute;
  top: 10px;
  right: 61%;
}
.tohoku {
  position: absolute;
  top: 10px;
  right: 53%;
}
.kanto {
  position: absolute;
  top: 10px;
  right: 45%;
}
.tyubu {
  position: absolute;
  top: 10px;
  right: 37%;
}
.kinki {
  position: absolute;
  top: 10px;
  right: 29%;
}
.tyugoku {
  position: absolute;
  top: 10px;
  right: 21%;
}
.sikoku {
  position: absolute;
  top: 10px;
  right: 13%;
}
.kyusyu {
  position: absolute;
  top: 10px;
  right: 5%;
}
</style>
