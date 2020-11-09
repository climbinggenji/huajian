<template>
  <div class="service">
    <div>
      <Header :active="'/service'"></Header>
    </div>
    <div class="pc">
      <img src="@/assets/imgs/service-pc.png" />
    </div>
    <div class="mobile">
      <img src="@/assets/imgs/service_m.png" />
    </div>
    <Footer :black="true"></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
export default {
  components: {
    Header,
    Footer
  },
};
</script>

<style lang="less" scoped>
.service {
  width: 100%;
  background-color: #000;
  img {
    width: 100%;
  }
  .pc {
    display: block;
    max-width: 1454px;min-width: 1002px;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }
}
</style>