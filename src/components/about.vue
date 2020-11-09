<template>
  <div>
    <Header :active="'/about'" :white="true"></Header>
    <div class="about">
      <div class="pc">
        <img src="@/assets/imgs/about.png" alt />
        <!-- <img src="@/assets/imgs/about_clients1.png" alt />
        <img src="@/assets/imgs/about_clients2.png" alt /> -->
      </div>
      <div class="mobile">
        <img src="@/assets/imgs/about_m1.png" />
        <p>
          CI-partners华见设计是一个极具创造性和前瞻性的零售商业咨询
与商业设计的专业团队，这里聚集着一群志同道合的行业顶级专家，
包括商业顾问、供应链管理专家、商业咨询专家、商业规划师、品牌
策略师、平面设计师、空间设计师等专业人才。我们为不同的商业
业态和品牌提供最具专业性的设计咨询服务，包含品牌发展战略与
定位、零售业态咨询与规划、零售业态研发与体验设计、平面与
品牌识别设计、建筑与空间设计、产品与包装设计、会展与推广
活动等服务。
        </p>
        <img src="@/assets/imgs/about_m2.png" />
      </div>
    </div>
    <Footer></Footer>
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
.about {
  max-width: 1454px;min-width: 1002px;
  margin: 0 auto;
  .pc {
    max-width: 1454px;min-width: 1002px;
    display: block;
    margin: 0 auto;
  }
  .mobile {
    display: none;
    p {
      padding: 30px;
      font-size: 14px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    min-width: 375px;
    .pc {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
  padding-bottom: 100px;
  img {
    width: 100%;
  }
}
</style>