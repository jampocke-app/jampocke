<template>
  <div class="header">
    <h1>方言アプリ</h1>
    <nav class="gnav">
      <ul class="menu">
        <li><a href="">マイページ</a></li>
        <li><a href="">ガチャ</a></li>
        <li><a href="">ログアウト</a></li>
      </ul>
    </nav>
    <div class="header2">
      <nav class="gnav">
        <div class="hokkai">
          <select name="hokkai">
            <option value="1">北海道</option>
          </select>
        </div>
        <div class="tohoku">
          <select name="tohoku">
            <option selected disabled>東北</option>
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
            <option value="15">新潟県</option>
            <option value="16">富山県</option>
            <option value="17">石川県</option>
            <option value="18">福井県</option>
            <option value="19">山梨県</option>
            <option value="20">長野県</option>
            <option value="21">岐阜都</option>
            <option value="22">静岡県</option>
            <option value="23">愛知県</option>
          </select>
        </div>
        <div class="kinki">
          <select name="kinki">
            <option selected disabled>近畿</option>
            <option value="24">三重県</option>
            <option value="25">滋賀県</option>
            <option value="26">京都府</option>
            <option value="27">大阪府</option>
            <option value="28">兵庫県</option>
            <option value="29">奈良県</option>
            <option value="30">和歌山県</option>
          </select>
        </div>
        <div class="tyugoku">
          <select name="tyugoku">
            <option selected disabled>中国</option>
            <option value="31">鳥取県</option>
            <option value="32">島根県</option>
            <option value="33">岡山県</option>
            <option value="34">広島県</option>
            <option value="35">山口県</option>
          </select>
        </div>
        <div class="sikoku">
          <select name="tyugoku">
            <option selected disabled>四国</option>
            <option value="36">徳島県</option>
            <option value="37">香川県</option>
            <option value="38">愛媛県</option>
            <option value="39">高知県</option>
          </select>
        </div>
        <div class="kyusyu">
          <select name="tyugoku">
            <option selected disabled>九州</option>
            <option value="40">福岡県</option>
            <option value="41">佐賀県</option>
            <option value="42">長崎県</option>
            <option value="43">熊本県</option>
            <option value="44">大分県</option>
            <option value="45">宮崎県</option>
            <option value="46">長崎県</option>
            <option value="47">沖縄県</option>
          </select>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "site-footer",
}
</script>

<style scoped>
body {
  padding-top: 90px; /* ヘッダーの後ろに要素が隠れないようにするため */
}

h1 {
  padding-right: 800px;
}

.header {
  width: 100%; /* 幅いっぱいを指定 */
  height: 50px; /* 高さを50pxに指定 */
  background: #ccc; /* 背景色にグレーを指定 */
  padding: 20px 50px; /* ヘッダーに上下左右それぞれ余白を指定 */
  box-sizing: border-box; /* padding分を含んで幅を100%にするため */
  position: fixed; /* ウィンドウを基準に画面に固定 */
  top: 0; /* 上下の固定位置を上から0pxにする */
  left: 0; /* 左右の固定位置を左から0pxにする */
  display: flex; /* 中の要素を横並びにする */
  align-items: center; /* 中の要素を上下中央に並べる */
}

.header .gnav .menu {
  display: flex; /* 中の要素を横並びにする */
}

.header .gnav .menu li {
  list-style: none; /* リストの[・]を消す */
}

.header .gnav .menu li + li {
  margin-left: 40px; /* メニューそれぞれに間隔をあけるため */
}

.header2 {
  width: 100%; /* 幅いっぱいを指定 */
  height: 50px; /* 高さを50pxに指定 */
  background: rgb(231, 204, 204); /* 背景色にグレーを指定 */
  padding: 20px 50px; /* ヘッダーに上下左右それぞれ余白を指定 */
  box-sizing: border-box; /* padding分を含んで幅を100%にするため */
  position: fixed; /* ウィンドウを基準に画面に固定 */
  top: 50px; /* 上下の固定位置を上から0pxにする */
  left: 0; /* 左右の固定位置を左から0pxにする */
  display: flex; /* 中の要素を横並びにする */
  align-items: center; /* 中の要素を上下中央に並べる */
}

.header2 .gnav .menu {
  display: flex; /* 中の要素を横並びにする */
}

.header2 .gnav .menu li {
  list-style: none; /* リストの[・]を消す */
}

.header2 .gnav .menu li + li {
  margin-left: 40px; /* メニューそれぞれに間隔をあけるため */
}
select {
  border: none;
  border-radius: 5px;
  color: #333;
  font-size: 16px;
  padding: 0 10px;
  height: 30px;
  width: 100px;
  display: flex; /* 中の要素を横並びにする */
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
