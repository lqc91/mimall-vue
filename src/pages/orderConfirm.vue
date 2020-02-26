<template>
  <div class="order-confirm">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0px; height: 0px; overflow: hidden;"
    >
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          />
          <path
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path2"
          />
          <path
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path3"
          />
          <path
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path4"
          />
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div class="address">
        <p class="title">收获地址</p>
        <ul class="list">
          <li class="item" v-for="(item, index) in addrList" :key="index">
            <p class="name">{{item.receiverName}}</p>
            <p class="tel">{{item.receiverMobile}}</p>
            <p
              class="addr"
            >{{item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress}}</p>
            <p class="action">
              <svg class="icon icon-del">
                <use xlink:href="#icon-del" />
              </svg>
              <svg class="icon icon-edit">
                <use xlink:href="#icon-edit" />
              </svg>
            </p>
          </li>
          <li class="item">
            <a class="addr-add" href="javascript:;">
              <p class="icon-add"></p>
              <p>添加新地址</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="product">
        <p class="title">商品</p>
        <ul class="list">
          <li class="item" v-for="(item, index) in cartList" :key="index">
            <a class="link" href="javascript:;">
              <p class="name">
                <img class="picture" v-lazy="item.productMainImage" alt="item.productName" />
                <span>{{item.productName + ' ' + item.productSubtitle}}</span>
              </p>
              <p>{{item.productPrice}}元×{{item.quantity}}</p>
              <p class="product-total-price">{{item.productTotalPrice}}元</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="detail clearfix">
        <ul class="list-left">
          <li class="item">
            <p class="title">配送方式</p>
            <p>
              <span>包邮</span>
            </p>
          </li>
          <li class="item">
            <p class="title">发票</p>
            <p>
              <span>电子发票</span>
              <span>个人</span>
              <span>商品明细</span>
            </p>
          </li>
        </ul>
        <ul class="list-right">
          <li>
            <p class="name">商品件数：</p>
            <p class="content">{{count}}件</p>
          </li>
          <li>
            <p class="name">商品总价：</p>
            <p class="content">{{cartTotalPrice}}元</p>
          </li>
          <li>
            <p class="name">优惠活动：</p>
            <p class="content">0元</p>
          </li>
          <li>
            <p class="name">运费：</p>
            <p class="content">0元</p>
          </li>
          <li>
            <p class="name">应付总额：</p>
            <p class="content">
              <span class="total-price">{{cartTotalPrice}}</span>元
            </p>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button class="btn btn-large btn-base">返回购物车</button>
        <button class="btn btn-large">去结算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-confirm",
  data() {
    return {
      addrList: [], // 收货地址列表
      cartList: [], // 结算商品列表
      cartTotalPrice: 0, // 结算商品总金额
      count: 0 // 结算商品数量
    };
  },
  mounted() {
    this.getAddrList(), this.getCartList();
  },
  methods: {
    getAddrList() {
      this.axios.get("/shippings").then(res => {
        this.addrList = res.list;
      });
    },
    getCartList() {
      this.axios.get("/carts").then(res => {
        let list = res.cartProductVoList;
        this.cartTotalPrice = res.cartTotalPrice;
        this.cartList = list.filter(item => item.productSelected);
        this.cartList.map(item => {
          this.count += item.quantity;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
.order-confirm {
  background-color: #f6f6f6;
  padding: 30px 0 100px;
  .container {
    margin: 0 auto;
    padding: 36px 66px 60px;
    box-sizing: border-box;
    background-color: $colorG;
    .address {
      .title {
        font-size: $fontG;
        color: $colorB;
        font-weight: 200;
      }
      .list {
        display: flex;
        justify-content: flex-start;
        margin: 20px -15px 30px 0;
        .item {
          width: 270px;
          height: 180px;
          color: $colorB;
          font-weight: 200;
          line-height: 1.8;
          padding: 14px 24px;
          box-sizing: border-box;
          margin-right: 15px;
          border: 1px solid $colorH;
          .name {
            font-size: $fontH;
          }
          .tel {
            font-size: $fontJ;
          }
          .addr {
            font-size: $fontJ;
            height: 52px;
          }
          .action {
            display: flex;
            justify-content: space-between;
            padding: 15px 0;
            .icon {
              width: 20px;
              height: 20px;
              cursor: pointer;
              fill: $colorC;
            }
          }
          .addr-add {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            cursor: pointer;
            font-size: $fontJ;
            color: $colorD;
            .icon-add {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-bottom: 10px;
              background: url("/imgs/icon-add.png") center/14px 14px no-repeat,
                #e0e0e0;
            }
          }
        }
      }
    }
    .product {
      .title {
        font-size: $fontG;
        color: $colorB;
        font-weight: 200;
        line-height: 2.4;
      }
      .list {
        border-width: 1px 0;
        border-style: solid;
        border-color: $colorH;
        .item {
          .link {
            display: flex;
            justify-content: space-between;
            line-height: 30px;
            padding: 5px;
            margin: 5px;
            font-size: $fontI;
            color: $colorC;
            .name {
              width: 500px;
              .picture {
                width: 30px;
                height: 30px;
                vertical-align: middle;
                margin-right: 10px;
              }
            }
            .product-total-price{
              color:$colorA;
            }
          }
        }
      }
    }
    .detail {
      padding: 10px 0 30px;
      border-bottom: 1px solid $colorH;
      .list-left {
        .item {
          line-height: 45px;
          p,
          span {
            display: inline-block;
          }
          span {
            padding: 0 10px;
            font-size: $fontI;
            color: $colorA;
          }
          .title {
            width: 140px;
            font-size: $fontG;
            color: $colorB;
            font-weight: 300;
          }
        }
      }
      .list-right {
        float: right;
        text-align: right;
        font-size: $fontI;
        line-height: 1.8;
        .name {
          display: inline-block;
          width: 120px;
          color: $colorC;
        }
        .content {
          display: inline-block;
          width: 100px;
          color: $colorA;
          .total-price {
            font-size: $fontE;
            font-weight: 600;
          }
        }
      }
    }
    .btn-group {
      display: flex;
      justify-content: flex-end;
      margin: 36px -10px 0 0;
      .btn {
        cursor: pointer;
      }
      .btn-base {
        background-color: #fff;
        color: $colorD;
        border: 1px solid $colorF;
      }
    }
  }
}
</style>