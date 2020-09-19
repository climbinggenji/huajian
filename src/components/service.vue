<template>
  <div class="service">
    <div>
      <Header :active="'/service'"></Header>
    </div>
    <div class="pc">
      <img src="@/assets/imgs/service_retail.png" />
      <img src="@/assets/imgs/service_branding.png" />
      <img src="@/assets/imgs/service_crative.png" />
    </div>
    <div class="mobile">
      <img src="@/assets/imgs/service_m.png" />
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
.service {
  img {
    width: 100%;
  }
  .pc {
    display: block;
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