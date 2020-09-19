<template>
  <div class="contact">
    <Header></Header>
    <div class="contact-contain contain">
      <div class="contact-left">
        <div class="contact-left-box">
          <h5>华见设计（深圳）有限公司</h5>
          <p>Add/ 深圳市罗湖区笋岗东路万通大厦615-616号</p>
          <p>Tel/ 0755-2511789</p>
          <p>E-mail/ ci_design@foxmail.com</p>
          <router-link to="/">
            <div class="link">返回首页</div>
          </router-link>
        </div>
      </div>
      <div class="contact-right">
        <h1>Contacts</h1>
        <h3>联系我们</h3>
        <form action>
          <input type="text" id="name" placeholder="你的名字" />
          <input type="text" id="email" placeholder="你的邮箱" />
          <input type="text" id="demand" placeholder="你的需求" />
          <input type="button" value="提 交" />
        </form>
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
@import "./../common/font/font.css";
.contact {
  background-color: rgb(210, 210, 210);
  &-contain {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
      display: block;
      .contact-left {
          text-align: center;
          &-box {
              width: 100%;
          }
      }
    }
    .contact-left {
      height: 800px;
      display: flex;
      align-items: center;
      color: #999;
      h5 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 30px;
      }
      p {
        font-size: 12px;
        line-height: 30px;
      }
      .link {
        font-size: 14px;
        text-decoration: underline;
        color: #999;
        margin-top: 60px;
      }
    }
    .contact-right {
      width: 600px;
      @media screen and (max-width: 500px) {
        display: none;
      }
      h1 {
        font-family: "KabelITCBQ-Bold";
        font-size: 68px;
        margin-top: 100px;
        font-weight: 300;
      }
      h3 {
        font-size: 30px;
        position: relative;
        top: -10px;
      }
      form {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        input[type="text"] {
          margin-bottom: 20px;
          line-height: 50px;
          background-color: transparent;
          border: none;
          font-size: 30px;
          border-bottom: 2px solid rgb(151, 151, 151);
          &:focus {
            outline: none;
            border-bottom: 2px solid #fff;
          }
        }
        input[type="button"] {
          cursor: pointer;
          width: 160px;
          height: 48px;
          line-height: 48px;
          font-size: 30px;
          font-weight: 300;
          text-align: center;
          background-color: rgb(41, 41, 41);
          color: #fff;
          outline: none;
          border: 1px solid rgb(41, 41, 41);
          &:hover {
            background-color: #fff;
            color: rgb(41, 41, 41);
          }
        }
      }
    }
  }
}
</style>