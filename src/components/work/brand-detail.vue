<template>
  <div>
    <Header :active="'/work'" :white="true"></Header>
    <div class="head contain">
      <div class="name">{{name}}</div>
      <div class="tag">Branding</div>
      <div class="desc"><div>{{desc}}</div></div>
    </div>
    <div class="main contain">
      <img :src="img1" />
      <div v-if="text" class="text">
        <div></div>
        <div>{{text}}</div>
      </div>
      <div v-for="(item, index) in imgList" :key="index">
        <img :src="item" />
      </div>
    </div>
    <!-- <p class="next contain">
      <span>Next Project</span>
    </p> -->
  </div>
</template>

<script>
import Header from "@/components/common/header";
export default {
  components: {
    Header,
  },
  computed: {
    name() {
      return this.$route.query.name;
    },
    desc() {
      return this.$route.query.desc;
    },
    img1() {
      // if (window.innerWidth > 500) {
        return require("@/assets/imgs/brand/" +
          this.$route.query.file +
          "/1.jpg");
      // } else {
      //   return require("@/assets/imgs/brand/" +
      //     this.$route.query.file +
      //     "/mobile/1.jpg");
      // }
    },
    text() {
      if (!this.$route.query.text) {
        return false;
      }
      return this.$route.query.text;
    },
    imgList() {
      let arr = [];
      for (let index = 1; index < parseInt(this.$route.query.count); index++) {
        // if (window.innerWidth > 500) {
          arr.push(
            require("@/assets/imgs/brand/" +
              this.$route.query.file +
              "/" +
              (index + 1) +
              ".jpg")
          );
        // } else {
        //   arr.push(
        //     require("@/assets/imgs/brand/" +
        //       this.$route.query.file +
        //       "/mobile/" +
        //       (index + 1) +
        //       ".jpg")
        //   );
        // }
      }
      return arr;
    },
  },
  mounted() {
    document.body.style.backgroundColor = '#fff'
  }
};
</script>

<style lang="less" scoped>
.head {
  position: relative;
  padding-top: 50px;
  .name {
    font-size: 40px;
    font-weight: 700;
    color: #000;
    @media screen and (max-width: 500px) {
      text-indent: 20px;
    }
  }
  .tag {
    margin-top: 20px;
    color: #909090;
    font-size: 14px;
    @media screen and (max-width: 500px) {
      text-indent: 20px;
    }
  }
  .desc {
    width: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    line-height: 24px;
    font-family: '微软雅黑';
    @media screen and (max-width: 500px) {
      width: 100%;
      div {
        padding: 0 20px;
      }
      position: relative;
    }
  }
}
.main {
  padding-bottom: 100px;
  border-bottom: 5px solid #e3e4e5;
  img {
    width: 100%;
    margin-top: 20px;
  }
  .text {
    display: flex;
    justify-content: space-between;
    padding: 60px 20px 30px;
    div {
      width: 50%;
      font-size: 14px;
      line-height: 24px;
      font-family: '微软雅黑';
      @media screen and (max-width: 500px) {
        width: 100%;
      }
      &:first-child {
        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }
  }
}
.next {
  line-height: 40px;
  text-align: right;
  padding-bottom: 100px;
  span {
    color: #e61428;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>