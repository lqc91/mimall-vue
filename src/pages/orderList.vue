<template>
  <div class="order-list">
    <order-header title="订单列表" tip="请谨防钓鱼链接或诈骗电话，了解更多>"></order-header>
    <div class="list-wrap">
      <div class="container">
        <ul>
          <li class="order-item" v-for="(item, index) in orderList" :key="index">
            <div class="head">
              <p>
                <span class="time">{{item.createTime}}</span>
                <span class="vline">|</span>
                <span class="name">{{item.receiverName}}</span>
                <span class="vline">|</span>
                <span class="order-number">订单号：{{item.orderNo}}</span>
                <span class="vline">|</span>
                <span class="pay-type">{{item.paymentTypeDesc}}</span>
              </p>
              <p>
                应付金额：
                <span class="amount">{{item.payment}}</span>元
              </p>
            </div>
            <div class="product-wrap">
              <ul class="product-list">
                <li
                  class="product-item"
                  v-for="(product, idx) in item.orderItemVoList"
                  :key="idx"
                  @click="toProductDetail(product.productId)"
                >
                  <img class="product-img" v-lazy="product.productImage" alt="product image" />
                  <div class="product-detail">
                    <p>{{product.productName}}</p>
                    <p>{{product.currentUnitPrice}}元X{{product.quantity}}</p>
                  </div>
                </li>
              </ul>
              <a href="javascript:;" class="order-status" v-if="item.status === 20">
                <span>{{item.statusDesc}}</span>
                <i class="icon-arrow">></i>
              </a>
              <a href="javascript:;" class="order-status" @click="toPay(item.orderNo)">
                <span>{{item.statusDesc}}</span>
                <i class="icon-arrow">></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
export default {
  name: "order-list",
  components: {
    OrderHeader
  },
  data() {
    return {
      orderList: []
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.axios.get("/orders").then(res => {
        this.orderList = res.list;
      });
    },
    toProductDetail(id) {
      this.$router.push(`/product/${id}`);
    },
    toPay(orderNo) {
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config";
.order-list {
  .list-wrap {
    padding: 30px 0 80px;
    background-color: #f6f6f6;
    .container {
      margin: 0 auto;
      .order-item {
        border: 1px solid $colorJ;
        .head {
          display: flex;
          justify-content: space-between;
          height: 74px;
          line-height: 74px;
          padding: 0 44px;
          background-color: $colorK;
          font-size: $fontI;
          color: $colorC;
          .vline {
            font-size: $fontJ;
            color: $colorH;
            padding: 0 10px;
          }
          .amount {
            font-size: $fontD;
            color: $colorB;
          }
        }
        .product-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 44px;
          margin-bottom: 30px;
          background: #fff;
          .product-list {
            width: 950px;
            .product-item {
              display: flex;
              align-items: center;
              padding: 15px 0;
              cursor: pointer;
              .product-img {
                width: 112px;
              }
              .product-detail {
                display: inline-block;
                padding: 12px 0 12px 15px;
                p {
                  font-size: $fontH;
                  color: $colorB;
                  line-height: 1.8;
                }
              }
            }
          }
          .order-status {
            font-size: $fontH;
            color: $colorA;
            .icon-arrow {
              display: inline-block;
              font-size: $fontG;
              color: $colorA;
              padding:0 8px;
            }
          }
        }
      }
    }
  }
}
</style>