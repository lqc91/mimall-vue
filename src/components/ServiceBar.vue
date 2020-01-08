<template>
  <div class="service">
    <div class="container">
      <ul>
        <li class="service-item">
          <span class="icon icon-setting"></span>
          预约维修服务
        </li>
        <li class="service-item">
          <span class="icon icon-7day"></span>
          7天无理由退货
        </li>
        <li class="service-item">
          <span class="icon icon-15day"></span>
          15天免费换货
        </li>
        <li class="service-item">
          <span class="icon icon-post"></span>
          满150元包邮
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'server-bar'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.service {
  padding: 22px 0;
  font-size: $fontI;
  color: $colorC;
  &-item {
    display: inline-block;
    width: 24.9%;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-right: 1px solid $colorH;
    &:last-child {
      border-right: 0;
    }
    .icon {
      margin-right: 5px;
      vertical-align: middle;
    }
    .icon-setting {
      @include bgImg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bgImg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bgImg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-post {
      @include bgImg(20px, 20px, "/imgs/icon-post.png");
    }
  }
}
</style>