<template>
  <div>
    <router-link to="/"
      ><img src="./assets/日本地図.png" class="minijapan"
    /></router-link>
    <header>
      <ul>
        <li>
          <router-link to="/post">投稿画面</router-link>
        </li>
        <li>
          <router-link to="/check">閲覧画面</router-link>
        </li>
        <li>
          <router-link to="/random">ガチャ画面</router-link>
        </li>
      </ul>
    </header>
    <router-view />
  </div>
</template>

<style>
header {
  background-color: aqua;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
}
.minijapan {
  position: absolute;
  width: auto;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 2;
}

li {
  list-style: none;
  float: left;
  padding: 10px;
}
</style>
