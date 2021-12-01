<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>ユーザーネーム <input type="text" class="UserName" /></div>
    <div>方言<input type="text" class="slang" /></div>
    <div>
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
    <div>年齢<input type="number" class="old" /></div>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      nandemo: 0,
    }
  },
}
</script>
