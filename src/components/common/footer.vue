<template>
  <div class="footer" :class="{black: black}">
      <div class="footer-l">
          <h2>华见设计（深圳）有限公司</h2>
          <p class="mt5">Add/ 深圳市罗湖区笋岗东路万通大厦615-616号</p>
          <p>Tel/ 0755-2511789</p>
          <p>E-mail/ ci_design@foxmail.com</p>
          <p class="mt40">© 2020 华见设计（深圳）有限公司&nbsp;&nbsp;&nbsp; 本网站设计、源代码及其中所展示之作品著作权均属于华见设计（深圳）有限公司</p>
      </div>
      <div class="footer-r">
          <div class="icon">
              <a href="https://www.behance.net/NavashiDesign" target="_blank"><img src="@/assets/imgs/Be.png"></a>
              <a href="https://www.zcool.com.cn/u/18144697" target="_blank"><img src="@/assets/imgs/zhanku.png"></a>
              <a href="https://weibo.com/p/1006066795396882/home?from=page_100606&mod=TAB&is_all=1#place" target="_blank"><img src="@/assets/imgs/weibo.png"></a>
          </div>
          <div class="ewm">
              <img src="@/assets/imgs/erweima.png">
              <p>华见公众平台</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
    black: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
    max-width: 1454px;min-width: 1002px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0 60px;
    border-top: 1px solid #e8e8e8;
    @media screen and (max-width: 500px) {
        display: none;
    }
    &-l {
        h2 {
            font-size: 15px;
            font-weight: 600;
            line-height: 38px;
        }
        p {
            font-size: 12px;
            line-height: 19px;
            color: #57585b;
            transform-origin: left;
            -moz-transform-origin: left;
            -webkit-transform-origin: left;
            -o-transform-origin: left;
            -moz-transform: scale(0.94);
            -webkit-transform: scale(0.94);
            -o-transform: scale(0.94);
            transform: scale(0.94);
        }
        .mt5 {
            margin-top: 5px;
        }
        .mt40 {
            margin-top: 40px;
        }
    }
    &-r {
        .icon {
            width: 180px;
            display: flex;
            justify-content: space-between;
        }
        .ewm {
            width: 100px;
            position: relative;
            left: 80px;
            img {
                margin-top: 40px;
                width: 100px;
                height: 100px;
            }
            p {
                text-align: center;
                font-size: 15px;
                margin-top: 12px;
            }
        }
    }
}
.black {
    background-color: #000;
    .footer-l {
        h2 {
            color: #fff;
        }
        p {
            color: #979797;
        }
    }
}
</style>