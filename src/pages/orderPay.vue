<template>
  <div class="order-pay">
    <div class="container">
      <div class="detail">
        <div class="intro">
          <div class="left clearfix">
            <i class="icon-gou"></i>
            <div class="base">
              <p class="title">订单提交成功！去付款咯~</p>
              <p>
                请在
                <span>30分钟</span>
                内完成支付，超时后将取消订单
              </p>
              <p>收货信息：{{receiverInfo}}</p>
            </div>
          </div>
          <div class="right">
            <p>
              应付总额：
              <span>
                <em>{{payment}}</em>元
              </span>
            </p>
            <p>
              订单详情
              <i
                class="icon-down"
                :class="{'up': showOrderDetail}"
                @click="showOrderDetail = !showOrderDetail"
              ></i>
            </p>
          </div>
        </div>
        <ul class="info" v-if="showOrderDetail">
          <li class="item">
            <p class="name">订单号：</p>
            <p class="content highlight">{{orderId}}</p>
          </li>
          <li class="item">
            <p class="name">收货信息：</p>
            <p class="content">{{receiverInfo}}</p>
          </li>
          <li class="item">
            <p class="name">商品名称：</p>
            <div class="content">
              <p v-for="(item, index) in orderDetail" :key="index">{{item.productName}}</p>
            </div>
          </li>
          <li class="item">
            <p class="name">发票信息：</p>
            <p class="content">电子发票 个人</p>
          </li>
        </ul>
      </div>
      <div class="pay-mode">
        <p class="title">选择以下支付方式付款</p>
        <div>
          <p class="content">支付平台</p>
          <button class="alipay" :class="{'checked': payType === 1}" @click="paySubmit(1)"></button>
          <button class="wechat" :class="{'checked': payType === 2}" @click="paySubmit(2)"></button>
        </div>
      </div>
    </div>
    <wechat-pay v-if="showPayModal" @close="closePayModal" :payQRCode="payQRCode"></wechat-pay>
    <modal
      title="支付确认"
      btnType="3"
      :showModal="confirmPayModal"
      confirmTxt="已支付"
      cancelTxt="未支付"
      @cancel="confirmPayModal=false"
      @submit="goOrderList"
    >
      <template v-slot:modal-body>
        <p>请确认是否已完成支付</p>
      </template>
    </modal>
  </div>
</template>

<script>
import QRCode from "qrcode";
import WechatPay from "./../components/WechatPay";
import Modal from "./../components/Modal";
export default {
  name: "order-pay",
  components: {
    WechatPay,
    Modal
  },
  data() {
    return {
      orderId: this.$route.query.orderNo, // 订单号
      receiverInfo: "", // 收货人信息：姓名，电话，地址
      payment: 0, // 订单金额
      orderDetail: {}, // 订单详情
      showOrderDetail: false, // 是否显示订单详情
      payType: 0, // 支付类型，1 为支付宝，2 为微信
      showPayModal: false, // 是否显示微信支付二维码
      payQRCode: "", // 微信支付二维码
      confirmPayModal: false, // 确认支付弹窗
      T: "" // 定时器ID
    };
  },
  mounted() {
    this.getOrderDetail();
  },
  methods: {
    getOrderDetail() {
      this.axios.get(`/orders/${this.orderId}`).then(res => {
        let item = res.shippingVo;
        let num = item.receiverMobile.replace(
          /(\d{3})\d{4}(\d{4})/,
          "$1****$2"
        );
        this.receiverInfo = `${item.receiverName} ${num} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
        this.payment = res.payment;
        this.orderDetail = res.orderItemVoList;
      });
    },
    paySubmit(payType) {
      this.payType = payType;
      if (payType === 1) {
        this.axios.get(`/orders/${this.orderId}`).then(res => {
          if (res.status === 10) {
            window.open(`/#/order/alipay?orderId=${this.orderId}`, "_blank");
          } else if (
            res.status === 20 ||
            res.status === 40 ||
            res.status === 50
          ) {
            this.$message.info("该订单已完成支付，请勿重复支付");
          } else if (res.status === 0) {
            this.$message.info("该订单已取消");
          } else if (res.status === 60) {
            this.$message.info("该交易已关闭");
          } else {
            this.$message.info("出现异常，请稍后重试，或取消订单");
          }
        });
      }
      if (payType === 2) {
        this.axios
          .post("/pay", {
            orderId: this.orderId,
            orderName: "Vue高仿小米商城",
            amount: 0.01,
            payType: 2
          })
          .then(res => {
            QRCode.toDataURL(res.content)
              .then(url => {
                this.showPayModal = true;
                this.payQRCode = url;
                this.loopOrderState();
              })
              .catch(() => {
                this.$message.error("微信二维码生成失败，请稍后重试");
              });
          });
      }
    },
    closePayModal() {
      this.showPayModal = false;
      clearInterval(this.T);
      this.confirmPayModal = true;
    },
    // 轮询当前订单支付状态
    loopOrderState() {
      this.T = setInterval(() => {
        this.axios.get(`/orders/${this.orderId}`).then(res => {
          if (res.status === 20) {
            clearInterval(this.T);
            this.goOrderList();
          }
        });
      }, 500);
    },
    goOrderList() {
      this.$router.push("/order/list");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.order-pay {
  padding: 30px 0 100px;
  background-color: #f6f6f6;
  .container {
    margin: 0 auto;
    .detail {
      margin-bottom: 30px;
      padding: 0 50px;
      background-color: #fff;
      .intro {
        display: flex;
        justify-content: space-between;
        padding: 45px 0;
        .left {
          .icon-gou {
            float: left;
            margin-right: 40px;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: url("/imgs/icon-gou.png") no-repeat center, #81c58c;
          }
          .base {
            float: left;
            .title {
              font-size: $fontF;
              color: $colorB;
              line-height: 2;
            }
            p {
              font-size: $fontJ;
              color: $colorC;
              line-height: 1.8;
              span {
                color: $colorA;
              }
            }
          }
        }
        .right {
          text-align: right;
          p {
            font-size: $fontJ;
            color: $colorC;
            line-height: 40px;
            span {
              color: $colorA;
              em {
                font-style: normal;
                font-size: $fontE;
              }
            }
            .icon-down {
              display: inline-block;
              width: 14px;
              height: 10px;
              margin-left: 10px;
              cursor: pointer;
              background: url("/imgs/icon-down.png") center/contain no-repeat;
              &.up {
                transition: all 0.5s;
                transform: rotate(180deg);
              }
            }
          }
        }
      }
      .info {
        padding: 45px 0 45px 130px;
        border-top: 1px solid $colorF;
        font-size: $fontJ;
        color: $colorB;
        text-align: left;
        line-height: 2;
        .name {
          display: inline-block;
          width: 100px;
          vertical-align: top;
        }
        .content {
          display: inline-block;
        }
        .highlight {
          color: $colorA;
        }
      }
    }
    .pay-mode {
      color: $colorB;
      padding: 0 50px 60px;
      background-color: $colorG;
      .title {
        font-size: $fontG;
        line-height: 3;
      }
      .content {
        font-size: $fontH;
        line-height: 4;
        border-top: 1px solid $colorF;
      }
      .alipay,
      .wechat {
        width: 188px;
        height: 64px;
        margin-right: 20px;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid $colorF;
        background-color: $colorG;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-origin: content-box;
        &.checked {
          border-color: $colorA;
        }
      }
      .alipay {
        padding: 12px 41px;
        background-image: url("/imgs/pay/icon-ali.png");
      }
      .wechat {
        padding: 15px 37px;
        background-image: url("/imgs/pay/icon-wechat.png");
      }
    }
  }
}
</style>