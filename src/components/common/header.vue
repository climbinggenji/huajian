<template>
  <div class="header" :class="{white: white,showMenu: showMenu}">
    <div class="contain">
      <div class="header-content">
        <router-link to="/">
          <img :src="imgSrc" />
        </router-link>
        <img class="icon" src="@/assets/imgs/menu.png" @click="handleMenu" />
        <ul>
          <li :class="{active: active == '/work'}">
            <router-link to="/work/retail">WORK</router-link>
          </li>
          <li :class="{active: active == '/about'}">
            <router-link to="/about">ABOUT</router-link>
          </li>
          <li :class="{active: active == '/service'}">
            <router-link to="/service">SERVICE</router-link>
          </li>
          <li :class="{active: active == '/contact'}">
            <router-link to="/contact">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: String,
    white: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    imgSrc() {
      if (this.white) {
        return require("@/assets/imgs/logo2.png");
      } else {
        return require("@/assets/imgs/logo1.png");
      }
    },
  },
  methods: {
    handleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  background-color: #000000;
  padding: 30px 0;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 10px 0;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    img {
      width: 51px;
      height: 48px;
      margin-top: 10px;
      @media screen and (max-width: 500px) {
        margin-top: 0;
        margin-left: 20px;
        width: 40px;
        height: 40px;
      }
    }
    .icon {
      width: 24px;
      height: 24px;
      margin-top: 8px;
      margin-right: 20px;
      display: none;
      cursor: pointer;
      @media screen and (max-width: 500px) {
        display: block;
      }
    }
    ul {
      @media screen and (max-width: 500px) {
        position: absolute;
        top: 50px;
        width: 100%;
        display: none;
        li {
          width: 100%;
          text-align: center;
        }
      }
      width: 500px;
      display: flex;
      justify-content: space-between;
      li {
        line-height: 80px;
        font-weight: 700;
        font-size: 13px;
        a {
          color: #b6b6b6;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .active {
        a {
          color: #fff;
        }
      }
    }
  }
}
.showMenu {
  @media screen and (max-width: 500px) {
    position: fixed;
    z-index: 10;
    .header-content{
      ul {
        display: block;
      }
    }
  }
}
.white {
  background-color: #fff;
  .header-content {
    ul {
      background-color: #fff;
      .active {
        a {
          color: #000;
        }
      }
    }
  }
}
</style>