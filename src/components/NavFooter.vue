<template>
  <div class="footer">
    <div class="footer-logo">
      <img class="logo-pic" src="./../assets/imgs/logo/logo-footer.png" alt />
      <a class="logo-txt" href>仿小米商城</a>
    </div>
    <div>
      <a class="footer-link" href="https://gitee.com/lufancode" target="_blank">码云主页</a>
      <span class="vertical-line">|</span>
      <a class="footer-link" href="https://github.com/lqc91" target="_blank">GitHub 主页</a>
      <span class="vertical-line">|</span>
      <a
        class="footer-link"
        href="https://lufancode.gitee.io/ecmall-vue/index"
        target="_blank"
      >Gitee Pages: 移动端 Vue 项目</a>
      <span class="vertical-line">|</span>
      <a
        class="footer-link"
        href="https://lqc91.github.io/ecmall-vue/index"
        target="_blank"
      >GitHub Pages: 移动端 Vue 项目</a>
    </div>
    <div class="copyright">
      Copyright ©2020
      <a
        class="copyright-link"
        href="https://lufancode.gitee.io/mimall-vue/index"
        target="_blank"
      >mimall-vue</a> All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.footer {
  width: 100%;
  height: 142px;
  padding: 46px 0;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  text-align: center;
  font-size: $fontI;
  color: $colorD;
  &-logo {
    .logo-pic {
      display: block;
      width: 53px;
      height: 36px;
      margin: 0 auto;
    }
    .logo-txt {
      display: block;
      margin: 12px 0 26px 0;
      color: $colorD;
    }
  }
  &-link {
    color: $colorD;
    &:hover {
      color: $colorA;
    }
  }
  .vertical-line {
    margin: 0 10px;
    font-size: $fontH;
  }
  .copyright {
    margin-top: 10px;
    &-link {
      color: $colorA;
    }
  }
}
</style>