<template>
  <div class="contact">
    <Header :active="'/contact'"></Header>
    <div class="contain">
      <div class="contact-contain">
        <div class="contact-form">
          <h1>Contacts</h1>
          <form action>
            <div class="line">
              <input type="text" id="name" placeholder="称呼*" />
              <input type="text" id="email" placeholder="邮箱*" />
            </div>
            <input type="text" id="phone" placeholder="电话*" />
            <input type="text" id="hangye" placeholder="所属行业" />
            <textarea style="width:100%" rows="8" id="demand" placeholder="设计需求简述" />
            <div class="btn">提交</div>
          </form>
        </div>
        <!-- <div class="contact-foot">
          <div class="contact-left-box">
            <h5>华见设计（深圳）有限公司</h5>
            <p>Add/ 深圳市罗湖区笋岗东路万通大厦615-616号</p>
            <p>Tel/ 0755-2511789</p>
            <p>E-mail/ ci_design@foxmail.com</p>
            <router-link to="/">
              <div class="link">返回首页</div>
            </router-link>
          </div>
        </div> -->
      </div>
      <div class="contact-pic">
        <img src="@/assets/imgs/contact_pic.png">
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
  mounted() {
    document.body.style.backgroundColor = '#000'
  }
};
</script>

<style lang="less" scoped>
@import "./../common/font/font.css";
.contact {
  background-color: #000;
  @media screen and (max-width: 500px) {
    min-width: 100%;
    .contact-pic {
      display: none;
    }
  }
  .contain {
    max-width: 1454px;min-width: 1002px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  &-contain {
    width: 600px;
    padding-bottom: 60px;
    .contact-form {
      h1 {
        font-family: "KabelITCBQ-Bold";
        font-size: 40px;
        margin-top: 40px;
        font-weight: 300;
        color: #fff;
      }
      h3 {
        font-size: 30px;
        position: relative;
        top: -10px;
      }
      form {
        margin-top: 30px;
        input {
          width: 100%;
          margin-bottom: 20px;
          line-height: 50px;
          background-color: transparent;
          border: none;
          font-size: 18px;
          color: #fff;
          border-bottom: 1px solid rgb(69, 69, 69);
          &:focus {
            outline: none;
            border-bottom: 1px solid rgb(69, 69, 69);
          }
        }
        textarea {
          border: none;
          font-size: 18px;
          border-bottom: 1px solid rgb(69, 69, 69);
          background-color: #000;
          resize: none;
          height: 260px;
          color: #fff;
          &:focus {
            outline: none;
            border-bottom: 1px solid rgb(69, 69, 69);
          }
        }
        .line {
          display: flex;
          justify-content: space-between;
          input {
            width: 48%;
          }
        }
        .btn {
          display: inline-block;
          cursor: pointer;
          font-size: 24px;
          color: #fff;
          outline: none;
          margin-top: 30px;
          line-height: 40px;
          border-bottom: 1px solid #fff;
        }
      }
    }
    .contact-foot {
      margin-top: 100px;
      h5 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 30px;
        color: #fff;
      }
      p {
        font-size: 15px;
        line-height: 30px;
        color: #000;
      }
      .link {
        display: inline-block;
        font-size: 14px;
        line-height: 24px;
        border-bottom: 1px solid #999;
        color: #999;
        margin-top: 40px;
      }
    }
  }
}
</style>