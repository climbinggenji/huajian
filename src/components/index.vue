<template>
  <div class="index">
    <Header></Header>
    <div class="content">
      <p>
        <router-link to="/about">more</router-link>
      </p>
      <div class="pc">
        <img src="@/assets/imgs/index_banner.png" alt />
      </div>
      <div class="mobile">
        <img class="mobile" src="@/assets/imgs/mindex.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="less" scoped>
.index {
  min-height: 100vh;
  background-color: #000;
}
.content {
  position: relative;
  min-width: 1280px;
  @media screen and (max-width: 500px) {
    width: 100%;
    min-width: 375px;
  }
  p {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 33%;
    a {
      color: #fff;
      text-decoration: underline;
      font-size: 24px;
      &:hover {
        color: cornflowerblue;
      }
    }
  }
  img {
    width: 100%;
  }
  .pc {
    display: block;
    @media screen and (max-width: 500px) {
      width: 100%;
      display: none;
    }
  }
  .mobile {
    display: none;
    @media screen and (max-width: 500px) {
      width: 100%;
      display: block;
    }
  }
}
</style>