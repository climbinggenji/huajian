<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html, body{
  font-family: '微软雅黑';
  width: 100%;
}
.contain {
  width: 1280px;
  margin: 0 auto;
  @media screen and (max-width: 500px){
    width: 100%;
    min-width: 375px;
  }
}
ul, li {
  list-style: none;
}
/*包含以下五种的链接*/
a {
    text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
    text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
    text-decoration: none;
}
/* 正在点击的链接，鼠标在元素上按下还没有松开*/
a:active {
    text-decoration: none;
}
/* 获得焦点的时候 鼠标松开时显示的颜色*/
a:focus {
    text-decoration: none;
}

/* 路由动画 */
.scroll-up-enter-active,
.scroll-up-leave-active,
.scroll-left-enter-active,
.scroll-left-leave-active,
.scroll-right-enter-active,
.scroll-right-leave-active,
.scroll-down-enter-active,
.scroll-down-leave-active {
  will-change: transform;
  transition: all 500ms;
}
 
.scroll-up-enter {
  opacity: 0;
  transform: translateY(-100%);
}
 
.scroll-up-leave-active {
  opacity: 0;
  transform: translateY(100%);
}
 
.scroll-down-enter {
  opacity: 0;
  transform: translateY(100%);
}
 
.scroll-down-leave-active {
  opacity: 0;
  transform: translateY(-100%);
}

.scroll-left-enter {
  opacity: 0;
  transform: translateX(100%);
}
 
.scroll-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}

.scroll-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
 
.scroll-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
img {
  display: block;
}
</style>
