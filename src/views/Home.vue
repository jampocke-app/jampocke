<template>
  <div class="home">
    <div>
      <h5>ユーザーネーム</h5>
      <input type="text" class="UserName" v-mosel="UesrName" />
    </div>
    <div>
      <h5>年齢</h5>
      <input type="number" class="old" />
    </div>
    <div>
      <h5>方言</h5>
      <input type="text" class="slang" v-model="slang" />
    </div>
    <div>
      <h5>都道府県選択</h5>
      <select v-model="nandemo">
        <option value="0" disabled>関東</option>
        <option value="1">東京</option>
        <option value="2">神奈川</option>
        <option value="3">埼玉</option>
        <option value="4">千葉</option>
        <option value="5">栃木</option>
        <option value="6">茨城</option>
        <option value="7">群馬</option>
      </select>

      <select v-model="nandemo">
        <option value="0" disabled>北海道・東北</option>
        <option value="11">東京</option>
        <option value="12">神奈川</option>
        <option value="13">埼玉</option>
        <option value="14">千葉</option>
        <option value="15">栃木</option>
        <option value="16">茨城</option>
        <option value="17">群馬</option>
      </select>

      <select v-model="nandemo">
        <option value="0" disabled>中部</option>
        <option value="21">東京</option>
        <option value="22">神奈川</option>
        <option value="23">埼玉</option>
        <option value="24">千葉</option>
        <option value="25">栃木</option>
        <option value="26">茨城</option>
        <option value="27">群馬</option>
      </select>

      <select v-model="nandemo">
        <option value="0" disabled>近畿</option>
        <option value="31">東京</option>
        <option value="32">神奈川</option>
        <option value="33">埼玉</option>
        <option value="34">千葉</option>
        <option value="35">栃木</option>
        <option value="36">茨城</option>
        <option value="37">群馬</option>
      </select>

      <select v-model="nandemo">
        <option value="0" disabled>中国・四国</option>
        <option value="41">東京</option>
        <option value="42">神奈川</option>
        <option value="43">埼玉</option>
        <option value="44">千葉</option>
        <option value="45">栃木</option>
        <option value="46">茨城</option>
        <option value="47">群馬</option>
      </select>

      <select v-model="nandemo">
        <option value="0" disabled>九州</option>
        <option value="51">東京</option>
        <option value="52">神奈川</option>
        <option value="53">埼玉</option>
        <option value="54">千葉</option>
        <option value="55">栃木</option>
        <option value="56">茨城</option>
        <option value="57">群馬</option>
      </select>
    </div>

    <div>
      <h5>エピソード</h5>
      <textarea
        class="episode"
        cols="30"
        rows="10"
        v-model="episodo"
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
    <input type="submit" class="submit" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
      nandemo: 0,
    }
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
