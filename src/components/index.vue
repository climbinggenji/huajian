<template>
  <div class="index">
    <div class="swiper" :class="'swiper'+ active">
      <Header></Header>
      <div class="content">
        <p>
          <router-link to="/work/retail">more</router-link>
        </p>
        <div class="pc">
          <img src="@/assets/imgs/view.png" alt />
        </div>
        <div class="mobile">
          <img class="mobile" src="@/assets/imgs/mindex.png" alt />
        </div>
      </div>
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
  data() {
    return {
      active: 1
    }
  },
  mounted() {
    setInterval(() => {
      if (this.active < 6) {
        this.active += 1
      } else {
        this.active = 1
      }
    }, 5000);
  }
};
</script>

<style lang="less" scoped>
.swiper {
  min-width: 1002px;
  @media screen and (min-width: 501px) {
    background-image: url(./../assets/imgs/swiper_1.png);
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity 1s;
  }
}
.swiper1 {
  @media screen and (min-width: 501px) {
    background-image: url(./../assets/imgs/swiper_1.png);
    opacity: 0;
    transition: opacity 1s;
    opacity: 1;
  }
}
.swiper2 {
  @media screen and (min-width: 501px) {
    background-image: url(./../assets/imgs/swiper_2.png);
    opacity: 0;
    transition: opacity 1s;
    opacity: 1;
  }
}
.swiper3 {
  @media screen and (min-width: 501px) {
    background-image: url(./../assets/imgs/swiper_3.png);
    opacity: 0;
    transition: opacity 1s;
    opacity: 1;
  }
}
.swiper4 {
  @media screen and (min-width: 501px) {
    background-image: url(./../assets/imgs/swiper_4.png);
    opacity: 0;
    transition: opacity 1s;
    opacity: 1;
  }
}
.swiper5 {
  @media screen and (min-width: 501px) {
    background-image: url(./../assets/imgs/swiper_5.png);
    opacity: 0;
    transition: opacity 1s;
    opacity: 1;
  }
}
.swiper6 {
  @media screen and (min-width: 501px) {
    background-image: url(./../assets/imgs/swiper_6.png);
    opacity: 0;
    transition: opacity 1s;
    opacity: 1;
  }
}
.index {
  min-height: 100vh;
  background: #000;
}
.header {
  background-color: transparent!important;
}
.content {
  position: relative;
  max-width: 1454px;min-width: 1002px;
  margin: 0 auto;
  padding-bottom: 50px;
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