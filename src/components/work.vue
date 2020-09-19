<template>
  <div>
    <Header :active="'/work'" :white="true"></Header>
    <div class="work contain">
      <div class="head">
        <h2 class="title">Work</h2>
        <ul>
          <li :class="{'active': active=='retail'}" @click="handleNav('retail')">RETAIL</li>
          <li :class="{'active': active=='brand'}" @click="handleNav('brand')">BRAND</li>
          <li :class="{'active': active=='creativity'}" @click="handleNav('creativity')">CREATIVE</li>
        </ul>
      </div>
      <transition :name="scroll" mode="out-in">
        <router-view class="work-content"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      active: "",
      scroll: "",
    };
  },
  created() {
    this.active = this.$route.name;
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
        this.scroll = "scroll-right";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.work {
  padding-bottom: 100px;
  .head {
    line-height: 64px;
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
      font-size: 55px;
      @media screen and (max-width: 500px) {
        position: relative;
        display: none;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      width: 500px;
      @media screen and (max-width: 500px) {
        width: 100%;
      }
      li {
        color: rgb(153, 153, 153);
        font-size: 20px;
        font-family: NeueHaas, "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 0 15px;
        &:hover {
          cursor: pointer;
          color: rgb(26, 26, 26);
        }
      }
      .active {
        color: rgb(26, 26, 26);
        border-bottom: 2px solid rgb(26, 26, 26);
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