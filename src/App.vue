<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <header class="mb-0">
        <div>
          寿限無寿限無五劫のすりきれ海砂利水魚の水行末雲来末風来末食う寝るところに住むところやぶらこうじのぶらこうじパイポパイポパイポのシューリンガンシューリンガンのグーリンダイグーリンダイのポンポコピーのポンポコナの長久命の長助
        </div>
      </header>
    </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
header {
  margin: 0 auto 40px;
  width: 100%;
  font-size: 28px;
  text-align: center;
  overflow: hidden;
}
header div {
  margin: 0;
  display: inline-block;
  padding-left: 100%;
  white-space: nowrap;
  line-height: 1em;
  animation: scrollSample01 20s linear infinite;
}
@keyframes scrollSample01 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
