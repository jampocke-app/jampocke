<template>
  <div class="japan_map">
    <Header />
    <div class="japan_graph">
      <tr>
        <div class="retu">
          <th scope="row">北海道</th>
          <router-link to="/Show/北海道" v-on:click.native="北海道;"
            ><td>北海道</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">東北地方</th>
          <router-link to="/Show/青森" v-on:click.native="青森県;"
            ><td>青森県</td></router-link
          >
          <router-link to="/Show/Iwate" v-on:click.native="Iwate"
            ><td>岩手県</td></router-link
          >
          <router-link to="/Show/Miyagi" v-on:click.native="Miyagi"
            ><td>宮城県</td></router-link
          >
          <router-link to="/Show/Akita" v-on:click.native="Akita"
            ><td>秋田県</td></router-link
          >
          <router-link to="/Show/Yamagata" v-on:click.native="Yamagata"
            ><td>山形県</td></router-link
          >
          <router-link to="/Show/Hukusima" v-on:click.native="Hukusima"
            ><td>福島県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">関東地方</th>
          <router-link to="/Show/Ibaraki" v-on:click.native="Ibaraki"
            ><td>茨城県</td></router-link
          >
          <router-link to="/Show/Totigi" v-on:click.native="Totigi"
            ><td>栃木県</td></router-link
          >
          <router-link to="/Show/Gunma" v-on:click.native="Gunma"
            ><td>群馬県</td></router-link
          >
          <router-link to="/Show/Saitama" v-on:click.native="Saitama"
            ><td>埼玉県</td></router-link
          >
          <router-link to="/Show/Tiba" v-on:click.native="Tiba"
            ><td>千葉県</td></router-link
          >
          <router-link to="/Show/Tokyo" v-on:click.native="Tokyo"
            ><td>東京都</td></router-link
          >
          <router-link to="/Show/Kanagawa" v-on:click.native="Kanagawa"
            ><td>神奈川県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">中部地方</th>
          <router-link to="/Show/Niigata" v-on:click.native="Niigata"
            ><td>新潟県</td></router-link
          >
          <router-link to="/Show/Toyama" v-on:click.native="Toyama"
            ><td>富山県</td></router-link
          >
          <router-link to="/Show/Isikawa" v-on:click.native="Isikawa"
            ><td>石川県</td></router-link
          >
          <router-link to="/Show/Hukui" v-on:click.native="Hukui"
            ><td>福井県</td></router-link
          >
          <router-link to="/Show/Yamanasi" v-on:click.native="Yamanasi"
            ><td>山梨県</td></router-link
          >
          <router-link to="/Show/Nagano" v-on:click.native="Nagano"
            ><td>長野県</td></router-link
          >
          <router-link to="/Show/Gihu" v-on:click.native="Gihu"
            ><td>岐阜県</td></router-link
          >
          <router-link to="/Show/Shizuoka" v-on:click.native="Shizuoka"
            ><td>静岡県</td></router-link
          >
          <router-link to="/Show/Aiti" v-on:click.native="Aiti"
            ><td>愛知県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">近畿地方</th>
          <router-link to="/Show/Mie" v-on:click.native="Mie"
            ><td>三重県</td></router-link
          >
          <router-link to="/Show/Mie" v-on:click.native="Mie"
            ><td>滋賀県</td></router-link
          >
          <router-link to="/Show/Kyoto" v-on:click.native="Kyoto"
            ><td>京都府</td></router-link
          >
          <router-link to="/Show/Osaka" v-on:click.native="Osaka"
            ><td>大阪府</td></router-link
          >
          <router-link to="/Show/Hyogo" v-on:click.native="Hyogo"
            ><td>兵庫県</td></router-link
          >
          <router-link to="/Show/Nara" v-on:click.native="Nara"
            ><td>奈良県</td></router-link
          >
          <router-link to="/Show/Wakayama" v-on:click.native="Wakayama"
            ><td>和歌山県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">中国地方</th>
          <router-link to="/Show/Tottori" v-on:click.native="Tottori"
            ><td>鳥取県</td></router-link
          >
          <router-link to="/Show/Simane" v-on:click.native="Simane"
            ><td>島根県</td></router-link
          >
          <router-link to="/Show/Hirosima" v-on:click.native="Hirosima"
            ><td>広島県</td></router-link
          >
          <router-link to="/Show/Okayama" v-on:click.native="Okayama"
            ><td>岡山県</td></router-link
          >
          <router-link to="/Show/Yamaguti" v-on:click.native="Yamaguti"
            ><td>山口県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">四国地方</th>
          <router-link to="/Show/Tokusima" v-on:click.native="Tokusima"
            ><td>徳島県</td></router-link
          >
          <router-link to="/Show/Kagawa" v-on:click.native="Kagawa"
            ><td>香川県</td></router-link
          >
          <router-link to="/Show/Ehime" v-on:click.native="Kagawa"
            ><td>愛媛県</td></router-link
          >
          <router-link to="/Show/Kouti" v-on:click.native="Kouti"
            ><td>高知県</td></router-link
          >
        </div>
      </tr>
      <tr>
        <div class="retu">
          <th scope="row">九州地方</th>
          <router-link to="/Show/Hukuoka" v-on:click.native="Hukuoka"
            ><td>福岡県</td></router-link
          >
          <router-link to="/Show/Saga" v-on:click.native="Saga"
            ><td>佐賀県</td></router-link
          >
          <router-link to="/Show/Nagasaki" v-on:click.native="Nagasaki"
            ><td>長崎県</td></router-link
          >
          <router-link to="/Show/Kumamoto" v-on:click.native="Kumamoto"
            ><td>熊本県</td></router-link
          >
          <router-link to="/Show/Ooita" v-on:click.native="Ooita"
            ><td>大分県</td></router-link
          >
          <router-link to="/Show/Miyazaki" v-on:click.native="Miyazaki"
            ><td>宮崎県</td></router-link
          >
          <router-link to="/Show/Kagosima" v-on:click.native="Kagosima"
            ><td>鹿児島県</td></router-link
          >
          <router-link to="/Show/Okinawa" v-on:click.native="Okinawa"
            ><td>沖縄県</td></router-link
          >
        </div>
      </tr>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  name: "japan",
  components: {
    Header,
  },
}
</script>

<style scoped>
.japan_map {
  /* background-image: url("../assets/jap.png");
  background-repeat: no-repeat;
  background-position: center;
  background-color: beige;
  background-size: cover;
  padding-top: 200px; */
}

.japan_graph {
  margin-top: 130px;
}

.retu {
  display: flex;
}
/* td,
th {
  border: 1px solid rgb(179, 167, 167);
  height: 30px;
  padding: 15px;
  font-weight: bold;
  color: rgb(41, 41, 41);
}

td {
  width: 100px;
  vertical-align: top;
  color: rgb(124, 124, 124);
}

th[scope="col"] {
  background-color: #cccaca;
  color: rgb(212, 209, 209);
}

th[scope="row"] {
  background-color: #d7d9f2;
} */
</style>
