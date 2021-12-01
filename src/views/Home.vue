<template>
  <div class="japan_map">
    <Header />
    <!-- <tr>
      <th scope="col">北海道</th>
      <th scope="col">東北</th>
      <th scope="col">関東</th>
    </tr> -->
    <div class="japan_graph">
      <tr>
        <th scope="row">北海道</th>
        <td>北海道</td>
      </tr>
      <tr>
        <th scope="row">東北地方</th>
        <td>青森県</td>
        <td>岩手県</td>
        <td>宮城県</td>
        <td>秋田県</td>
        <td>山形県</td>
        <td>福島県</td>
      </tr>
      <tr>
        <th scope="row">関東地方</th>
        <td>茨城県</td>
        <td>栃木県</td>
        <td>群馬県</td>
        <td>埼玉県</td>
        <td>千葉県</td>
        <td>東京都</td>
        <td>神奈川県</td>
      </tr>
      <tr>
        <th scope="row">中部地方</th>
        <td>新潟県</td>
        <td>富山県</td>
        <td>石川県</td>
        <td>福井県</td>
        <td>山梨県</td>
        <td>長野県</td>
        <td>岐阜都</td>
        <td>静岡県</td>
        <td>愛知県</td>
      </tr>
      <tr>
        <th scope="row">近畿地方</th>
        <td>三重県</td>
        <td>滋賀県</td>
        <td>京都府</td>
        <td>大阪府</td>
        <td>兵庫県</td>
        <td>奈良県</td>
        <td>和歌山県</td>
      </tr>
      <tr>
        <th scope="row">中国地方</th>
        <td>鳥取県</td>
        <td>島根県</td>
        <td>岡山県</td>
        <td>広島県</td>
        <td>山口県</td>
      </tr>
      <tr>
        <th scope="row">四国地方</th>
        <td>徳島県</td>
        <td>香川県</td>
        <td>愛媛県</td>
        <td>高知県</td>
      </tr>
      <tr>
        <th scope="row">九州地方</th>
        <td>福岡県</td>
        <td>佐賀県</td>
        <td>長崎県</td>
        <td>熊本県</td>
        <td>大分県</td>
        <td>宮崎県</td>
        <td>長崎県</td>
        <td>沖縄県</td>
      </tr>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  name: "home",
  components: {
    Header,
  },
}
</script>

<style scoped>
.japan_map {
  width: 100%;
  height: 95vh;
  background-repeat: no-repeat;
  background-position: center 100px;
  background-image: url("../assets/jap.png");
}

.japan_graph {
  padding: 130px 200px;
}

td,
th {
  border: 1px solid rgb(179, 167, 167);
  width: 280px;
  padding: 15px;
  font-weight: bold;
}

td {
  width: 350px;
  /* padding: 20px; */
  vertical-align: top;
}

th[scope="col"] {
  background-color: #696969;
  color: #fff;
}

th[scope="row"] {
  background-color: #d7d9f2;
}
</style>
