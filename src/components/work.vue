<template>
  <div>
    <Header :active="'/work'" :white="true"></Header>
    <div class="work contain">
      <div class="head">
        <h2 class="title">Work</h2>
        <ul>
          <li :class="{'active': active=='retail'}" @click="handleNav('retail')">RETAIL <span>零售空间</span></li>
          <li :class="{'active': active=='brand'}" @click="handleNav('brand')">BRAND <span>品牌设计</span></li>
          <li :class="{'active': active=='creativity'}" @click="handleNav('creativity')">CREATIVE <span>创意设计</span></li>
          <li :class="{'active': active=='interior'}" @click="handleNav('interior')">INTERIOR <span>地产设计</span></li>
        </ul>
      </div>
      <transition :name="scroll" mode="out-in">
        <router-view class="work-content"></router-view>
      </transition>
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
  data() {
    return {
      active: "",
      scroll: "",
    };
  },
  created() {
    this.active = this.$route.name;
    document.body.style.backgroundColor = '#fff'
  },
  methods: {
    handleNav(path) {
      if (this.active != path) {
        this.active = path;
        this.$router.push("/work/" + path);
      }
    },
  },
  watch: {
    $route(to, from) {
      console.log(to.name, from.name)
      if (from.name == 'retail') {
        this.scroll = "scroll-left";
      }
      if (from.name == 'brand') {
        if (to.name == 'retail') {
          this.scroll = "scroll-right";
        } else {
          this.scroll = "scroll-left";
        }
      }
      if (from.name == 'creativity') {
        if (to.name == 'interior') {
          this.scroll = "scroll-left";
        } else {
          this.scroll = "scroll-right";
        }
      }
      if (from.name == 'interior') {
        this.scroll = "scroll-right"
      }
    },
  },
};
</script>

<style lang="less" scoped>
.work {
  padding-bottom: 100px;
  .head {
    line-height: 56px;
    position: relative;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgb(227, 228, 229);
    @media screen and (max-width: 500px) {
      display: block;
    }
    .title {
      position: absolute;
      left: 0;
      font-size: 40px;
      color: #b6b6b6;
      @media screen and (max-width: 500px) {
        position: relative;
        display: none;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      width: 700px;
      @media screen and (max-width: 500px) {
        width: 100%;
      }
      li {
        color: #b6b6b6;
        font-size: 14px;
        font-family: NeueHaas, "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 0 15px;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        @media screen and (max-width: 500px) {
          span {
            display: none;
          }
        }
      }
      .active {
        color: #c3ac90;
        border-bottom: 2px solid rgb(26, 26, 26);
        span {
          color: #000;
        }
      }
    }
  }

  &-content {
    padding-top: 60px;
    @media screen and (max-width: 500px) {
      padding-top: 0;
    }
  }
}
</style>