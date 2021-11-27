<template>
  <div class="japan_map">
    <img alt="japan" src="../assets/jap.png" />
    <div class="tohoku">
      <select name="tohoku">
        <option selected disabled>北海道・東北</option>
        <option value="/.html">北海道</option>
        <option value="2">青森県</option>
        <option value="3">岩手県</option>
        <option value="4">宮城県</option>
        <option value="5">秋田県</option>
        <option value="6">山形県</option>
        <option value="7">福島県</option>
      </select>
    </div>
    <div class="kanto">
      <select name="kanto">
        <option selected disabled>関東</option>
        <option value="8">茨城県</option>
        <option value="9">栃木県</option>
        <option value="10">群馬県</option>
        <option value="11">埼玉県</option>
        <option value="12">千葉県</option>
        <option value="13">東京都</option>
        <option value="14">神奈川県</option>
      </select>
    </div>
    <div class="tyubu">
      <select name="tyubu">
        <option selected disabled>中部</option>
        <option value="8">新潟県</option>
        <option value="9">富山県</option>
        <option value="10">石川県</option>
        <option value="11">福井県</option>
        <option value="12">山梨県</option>
        <option value="13">岐阜都</option>
        <option value="14">静岡県</option>
        <option value="14">愛知県</option>
      </select>
    </div>
    <div class="kinki">
      <select name="kinki">
        <option selected disabled>近畿</option>
        <option value="8">三重県</option>
        <option value="9">滋賀県</option>
        <option value="10">京都府</option>
        <option value="11">大阪府</option>
        <option value="12">兵庫県</option>
        <option value="13">奈良県</option>
        <option value="14">和歌山県</option>
      </select>
    </div>
    <div class="tyugoku">
      <select name="tyugoku">
        <option selected disabled>中国</option>
        <option value="8">三重県</option>
        <option value="9">滋賀県</option>
        <option value="10">京都府</option>
        <option value="11">大阪府</option>
        <option value="12">兵庫県</option>
        <option value="13">奈良県</option>
        <option value="14">和歌山県</option>
      </select>
    </div>
  </div>
  <!-- <div class="japan_map">
    <img alt="japan" src="../assets/jap.png" />
    <span class="area_btn area1" data-area="1">北海道・東北</span>
    <span class="area_btn area2" data-area="2">関東</span>
    <span class="area_btn area3" data-area="3">中部</span>
    <span class="area_btn area4" data-area="4">近畿</span>
    <span class="area_btn area5" data-area="5">中国・四国</span>
    <span class="area_btn area6" data-area="6">九州・沖縄</span>

    <div class="pref_area">
      <div class="pref_list" data-list="1">
        <div data-id="1">北海道</div>
        <div data-id="2">青森県</div>
        <div data-id="3">岩手県</div>
        <div data-id="4">宮城県</div>
        <div data-id="5">秋田県</div>
        <div data-id="6">山形県</div>
        <div data-id="7">福島県</div>
        <div></div>
      </div>

      <div class="pref_list" data-list="2">
        <div data-id="8">茨城県</div>
        <div data-id="9">栃木県</div>
        <div data-id="10">群馬県</div>
        <div data-id="11">埼玉県</div>
        <div data-id="12">千葉県</div>
        <div data-id="13">東京都</div>
        <div data-id="14">神奈川県</div>
        <div></div>
      </div>

      <div class="pref_list" data-list="3">
        <div data-id="15">新潟県</div>
        <div data-id="16">富山県</div>
        <div data-id="17">石川県</div>
        <div data-id="18">福井県</div>
        <div data-id="19">山梨県</div>
        <div data-id="20">長野県</div>
        <div data-id="21">岐阜県</div>
        <div data-id="22">静岡県</div>
        <div data-id="23">愛知県</div>
        <div></div>
      </div>

      <div class="pref_list" data-list="4">
        <div data-id="24">三重県</div>
        <div data-id="25">滋賀県</div>
        <div data-id="26">京都府</div>
        <div data-id="27">大阪府</div>
        <div data-id="28">兵庫県</div>
        <div data-id="29">奈良県</div>
        <div data-id="30">和歌山県</div>
        <div></div>
      </div>

      <div class="pref_list" data-list="5">
        <div data-id="31">鳥取県</div>
        <div data-id="32">島根県</div>
        <div data-id="33">岡山県</div>
        <div data-id="34">広島県</div>
        <div data-id="35">山口県</div>
        <div data-id="36">徳島県</div>
        <div data-id="37">香川県</div>
        <div data-id="38">愛媛県</div>
        <div data-id="39">高知県</div>
        <div></div>
      </div>

      <div class="pref_list" data-list="6">
        <div data-id="40">福岡県</div>
        <div data-id="41">佐賀県</div>
        <div data-id="42">長崎県</div>
        <div data-id="43">熊本県</div>
        <div data-id="44">大分県</div>
        <div data-id="45">宮崎県</div>
        <div data-id="46">鹿児島県</div>
        <div data-id="47">沖縄県</div>
      </div>
    </div>
  </div> -->
</template>

<script></script>

<style scoped>
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 5px;
  color: #333;
  font-size: 16px;
  padding: 0 10px;
  height: 40px;
  width: 120px;
  position: relative;
  background: hsl(30, 30%, 89%);
}

option[selected][disabled] {
  display: none;
}

.japan_map {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  display: table;
  width: 20%;
}
.tohoku {
  position: absolute;
  top: 30%;
  right: 25%;
  width: 20%;
}
.kanto {
  position: absolute;
  top: 58%;
  right: 35%;
  width: 10%;
}
.tyubu{
  position: absolute;
  top: 62%;
  right: 45%;
  width: 10%;
}
.tyubu{
  position: absolute;
  top: 62%;
  right: 45%;
  width: 10%;
}
.tyubu{
  position: absolute;
  top: 62%;
  right: 45%;
  width: 10%;
}
.tyubu{
  position: absolute;
  top: 62%;
  right: 45%;
  width: 10%;
}
.tyubu{
  position: absolute;
  top: 62%;
  right: 45%;
  width: 10%;
}
/* .japan_map {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  display: table;
  width: 20%;
}

.japan_map .area_btn {
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  cursor: pointer;
  border: 3px solid #000000;
  border-radius: 5px;
  background-color: #fff;
  padding: 0.2em auto;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
}

.japan_map .area_btn.area1 {
  top: 30%;
  right: 25%;
  width: 20%;
}
.japan_map .area_btn.area2 {
  top: 58%;
  right: 35%;
  width: 10%;
}
.japan_map .area_btn.area3 {
  top: 62%;
  right: 45%;
  width: 10%;
}
.japan_map .area_btn.area4 {
  top: 70%;
  right: 54%;
  width: 10%;
}
.japan_map .area_btn.area5 {
  top: 60%;
  left: 16%;
  width: 20%;
}
.japan_map .area_btn.area6 {
  top: 80%;
  right: 72%;
  width: 20%;
}

/* 選択前は表示を隠す */
/* .japan_map .pref_area {
  display: none;
} */
</style>
