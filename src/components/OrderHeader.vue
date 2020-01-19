<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <router-link class="icon-logo" to="/index"></router-link>
      </div>
      <div class="title">
        <h2 class="name">{{title}}</h2>
        <span class="tip">{{tip}}</span>
      </div>
      <a class="username" href="javascript:;">{{username}}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'order-header',
  props: {
    title: String,
    tip: String
  },
  computed: {
    ...mapState(['username'])
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.order-header {
  padding: 30px 0;
  border-bottom: 2px solid $colorA;
  .header-logo {
    float: left;
  }
  .title {
    float: left;
    height: 55px;
    line-height: 55px;
    margin-left: 54px;
    color: $colorB;
    .name {
      display: inline-block;
      font-size: $fontC;
      font-weight: normal;
    }
    .tip {
      display: inline-block;
      font-size: $fontJ;
      color: $colorD;
      margin-left: 17px;
    }
  }
  .username {
    float: right;
    height: 54px;
    line-height: 54px;
    font-size: $fontI;
    color: $colorC;
  }
}
</style>