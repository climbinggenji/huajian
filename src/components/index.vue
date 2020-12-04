<template>
  <div class="index">
    <transition-group tag="ul" id="ul" name="img">
      <li v-for="(item, index) in list" :key="'img' + index" v-show="index == active" :class="{active:index == active}">
        <div class="swiper" :style="{backgroundImage: 'url('+item.img+')'}">
          <Header></Header>
          <div class="content">
            <div class="pc">
              <div class="text">
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.desc}}</div>
                <router-link :to="item.url">Learn more ></router-link>
              </div>
              <img src="@/assets/imgs/view.png" alt />
            </div>
          </div>
        </div>
      </li>
    </transition-group>
    <Footer :black="true"></Footer>
    <div class="mobile">
      <Header></Header>
      <img class="mobile" src="@/assets/imgs/mindex.png" alt />
    </div>
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
      active: 0,
      list: [
        {
          img: require('@/assets/imgs/swiper_1.png'),
          title: '博鳌国际时尚周',
          desc: '创新的格局和时尚设计氛围注入商业活力',
          url: '/brand-detail?name=博鳌国际时尚周&desc=海南岛在进行国际化建设的进程中举办大型国际时尚活动势在必行；本次博鳌国际时尚周通过世界级各平台的宣传、国内媒体的持续报道、世界各大平台的参与以及后续活动的持续炒热必将引起国际新的时尚风暴；促进琼海与国际文化的接轨，同时也符合琼海市的国际化大环境发展利益，顺应了地区和全球的合作潮流。&text=时尚周邀请来自国际的时尚团队及来自中国从事时尚艺术音乐行业相关的专业团队，将博鳌国际时尚周从一个简单的作品发布平台逐步链接贯穿至整个时尚、科技生活、商贸交易等产业链，不断打破传统时装周的运行模式，通过时尚、艺术和音乐，使琼海突破海岛旅游等单一产业，创新的格局和时尚设计氛围注入商业活力。主视觉设计“鳌”，源自古典神话南海龙王女儿之子，龙头龟背麒麟尾。而时尚源自西方，博鳌时装周是一次东西方文化的碰撞、交流。通过上部的现代感文字处理结合下部书法体，体现中西文化交流结合出的全新文化符号，凸显博鳌地区的文化特殊性以及此次时装周的时代意义。&file=博鳌&count=5'
        },
        {
          img: require('@/assets/imgs/swiper_2.png'),
          title: '華見 Supervalues',
          desc: '体现高品质更低价的核心理念',
          url: 'retail-detail?name=华见%20Supervalues&desc=打造中国未来的全新主力业态——生鲜食品折扣超市，体现高品质更低价的核心理念，不奢华但有趣而时尚，满足中产家庭生活必需及高频消费诉求。&text=我们秉持现代的设计理念，去繁为简，打造面向大众中产阶层的简洁高效店铺采用独创的华见零售设计思维，从设计、辨识度、告诉反馈、高效投入的角度，思考零售本源，将动线布局、视觉识别、陈列功能作为主要功能体现，将顾客视点从繁复的装饰空间中拉回到商品上，通过视觉传递商品信息，通过陈列凸显商品品质，通过灯光加强空间场域的氛围。空间中的造型设计体现功能与美的结合，有用且美观。商品本身的优质价廉成为卖场核心的吸引力，整体环境舒适、明亮，为上品服务，让顾客内心的愉悦，成为真正的购物体验&file=huajian&count=11'
        },
        {
          img: require('@/assets/imgs/swiper_3.png'),
          title: '',
          desc: '',
          url: 'retail-detail?name=昇菘超市&desc=昇菘集团由林福星和他的兄弟——哥哥林福荣和弟弟林佑龙，在1985年一起创立。如今，昇菘超市的零售店面遍布新加坡全岛37个地点，2016年昇菘超市中国首店落户昆明。&text=以创作能够充分体现新鲜、健康、品质、贴心的店铺设计，并受大众中产阶层喜欢的店铺为目标。这里吃的东西非常丰富，新鲜而有营养，%20店面形象具备天然健康、有机的品质。%20华见在理解上述经营理念的基础上，提出简单→削除浪费的设计，店铺的定位是大众中产阶层，去掉不要太多的华丽复杂的造型。%20另外简单的内装在费用上有很多好处，对于实际中的多店复制也十分有效。&file=昇菘&count=9'
        },
        {
          img: require('@/assets/imgs/swiper_4.png'),
          title: '溪涌 RESORT',
          desc: 'Wake up here 生活从这里醒来',
          url: '/work/retail'
        },
        {
          img: require('@/assets/imgs/swiper_5.png'),
          title: '拓东酱油',
          desc: '绿辰集团旗下百年老字号调味品牌',
          url: 'brand-detail?name=TUODONG%20拓东旗舰店&desc=拓东公司始创于公元1684年永香斋酱园，经过三百多年的传承和发展，现已发展成为中国调味品著名品牌企业50强的中华老字号企业。目前拥有“拓东”、“永香斋”“昆湖”“滇池”“山茶花”等不同类别的八个注册商标，主要有酱油、食醋、酱类、酱咸菜四大类30多个产品，多年来昆明百姓排队购买拓东酱油已成为一道独特的风景线，其产品行销省内外，特别是云南玫瑰大头菜曾远销香港、新加坡、马来西亚等海外市场。&text=对于一个百年老字号品牌来说，不论是生产加工，还是终端营销，都要做变革，要融入现代商业模式之中，不变的是味道。通过品牌升级和店铺设计，让大众重新认识拓东，并对酱油有新的认识引领大众追求“讲究”的品质生活态度。我们分三个维度进行店铺规划：生产line——强调酿造工艺，产品line——强调零售本质酱油主题店，品牌文化line——品牌价值传递、寿司体验中心。选用原生态材质强调品质与经典，体现品牌文化与历史沉淀，围绕酱油主题的生活氛围。&file=拓东&count=8'
        },
        {
          img: require('@/assets/imgs/swiper_6.png'),
          title: '宜百佳生活超市',
          desc: '为每一位顾客提供高品质的便利服务',
          url: 'retail-detail?name=宜百佳&desc=宜百佳生活超市创立于2009年，秉承“新鲜、便宜、品质、便利、舒适”的宗旨，为每一位顾客提供高品质的便利服务。经过多年的打磨与锤炼，至今已在全国范围内发展了多家生活超市及便利店，服务面积达3000㎡,门店数量36家。&text=选用暖灰色地板及深灰色天花，凸显卖场内的商品色彩，配合浅色木纹中和卖场中的灰色调。品牌主识别色以黄色为主，强调新鲜，阳光，自然。&file=宜百佳&count=7'
        },
      ]
    }
  },
  mounted() {
    document.body.style.backgroundColor = '#000'
    this.play()
    if (document.body.clientWidth>1454) {
      document.getElementById('ul').style.height = '1027px'
    } else if (document.body.clientWidth > 1002 && document.body.clientWidth<=1454) {
      document.getElementById('ul').style.height = (document.body.clientWidth*936)/1296 + 'px'
    } else {
      document.getElementById('ul').style.height = '767px'
    }
    const that = this
    window.onresize = () => {
      console.log(document.body.clientWidth)
      return (() => {
        document.getElementById('ul').style.height = document.getElementsByClassName('active')[0].clientHeight + 'px'
      })()
    }
  },
  methods: {
    autoPlay() {
      if (this.active<this.list.length-1) {
        this.active++
      } else {
        this.active = 0
      }
    },
    play() {
      setInterval(this.autoPlay, 5000)
    }
  }
};
</script>

<style lang="less" scoped>
.swiper {
  min-width: 1002px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#ul {
  @media screen and (max-width: 501px) {
    display: none;
  }
}
ul {
  position: relative;
  li {
    position: absolute;
    width: 100%;
  }
}
.img-enter-active, 
.img-leave-active {
  transition: all .2s;
}

.img-enter,
.img-leave-to {
  opacity: 0;
}

.img-enter-to,
.img-leave {
  opacity: 1;
}

.img-enter {
  position: absolute;
  left: 0;
  top: 0;
}

.index {
  min-height: 100vh;
  background: #000;
  position: relative;
}
.banner {
  min-width: 1002px;
  img {
    width: 100%;
  }
}
.main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
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
    position: relative;
    .text {
      position: absolute;
      right: 80px;
      bottom: 50px;
      text-align: end;
      color: #fff;
      letter-spacing: 1px;
      .title {
        font-size: 32px;
        padding-bottom: 12px;
      }
      .desc {
        font-size: 18px;
        padding-bottom: 24px;
      }
      a {
        font-size: 18px;
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      display: none;
    }
  }
}
.mobile {
  display: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: block;
  }
}
</style>