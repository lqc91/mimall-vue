<template>
  <div class="scan">
    <div class="mask"></div>
    <div class="pay-wrap">
      <div class="pay">
        <p class="title">
          微信支付
          <i class="icon-close" @click="close"></i>
        </p>
        <img class="qrcode" :src="payQRCode" alt="qrcode" />
        <p class="tip">
          请使用
          <span>微信</span>
          扫一扫
          <br />二维码完成支付
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wechat-pay",
  props: ["payQRCode"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config";
.scan {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .pay-wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("./../assets/imgs/icons/icon-scan.png") left/contain no-repeat;
    width: 296px;
    height: 485px;
    padding-right: 370px;
    .pay {
      position: absolute;
      top: 22px;
      left: 296px;
      width: 370px;
      height: 440px;
      background-color: $colorG;
      .title {
        height: 60px;
        line-height: 60px;
        text-indent: 18px;
        font-size: $fontH;
        color: $colorB;
        background-color: $colorJ;
        .icon-close {
          position: absolute;
          top: 23px;
          right: 23px;
          width: 13px;
          height: 13px;
          background: url("./../assets/imgs/icons/icon-close.png") center/contain no-repeat;
          cursor: pointer;
        }
      }
      .qrcode {
        width: 240px;
        height: 240px;
        margin: 44px 66px 22px;
      }
      .tip {
        text-align: center;
        font-size: $fontJ;
        line-height: 1.6;
        color: $colorB;
        span {
          color: $colorA;
        }
      }
    }
  }
}
</style>