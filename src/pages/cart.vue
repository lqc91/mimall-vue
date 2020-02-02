<template>
  <div class="cart">
    <order-header title="我的购物车" tip="温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算"></order-header>
    <div class="main">
      <div class="container">
        <div class="list">
          <div class="list-head">
            <p class="check">
              <i class="check-icon checked"></i>
              <span class="check-txt">全选</span>
            </p>
            <p class="product-name">商品名称</p>
            <p class="unit-price">单价</p>
            <p class="quantity">数量</p>
            <p class="total-price">小计</p>
            <p class="operate">操作</p>
          </div>
          <ul>
            <li class="list-item">
              <p class="check">
                <i class="check-icon"></i>
              </p>
              <a class="product-link" href="javascript:;">
                <img
                  class="product-img"
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg"
                  alt="小米8 6GB 全息幻彩紫 64GB"
                />
                <span class="product-name ellipsis">小米8 6GB 全息幻彩紫 64GB</span>
              </a>
              <p class="unit-price">1999元</p>
              <p class="quantity">
                <button class="button-minus">-</button>
                <input class="quantity-num" type="text" value="1" />
                <button class="button-plus">+</button>
              </p>
              <p class="total-price">1999元</p>
              <p class="operate">
                <i class="icon-delete"></i>
              </p>
            </li>
            <li class="list-item">
              <p class="check">
                <i class="check-icon"></i>
              </p>
              <a class="product-link" href="javascript:;">
                <img
                  class="product-img"
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg"
                  alt="小米8 6GB 全息幻彩紫 64GB"
                />
                <span class="product-name ellipsis">小米8 6GB 全息幻彩紫 64GB</span>
              </a>
              <p class="unit-price">1999元</p>
              <p class="quantity">
                <button class="button-minus">-</button>
                <input class="quantity-num" type="text" value="1" />
                <button class="button-plus">+</button>
              </p>
              <p class="total-price">1999元</p>
              <p class="operate">
                <i class="icon-delete"></i>
              </p>
            </li>
            <li class="list-item">
              <p class="check">
                <i class="check-icon"></i>
              </p>
              <a class="product-link" href="javascript:;">
                <img
                  class="product-img"
                  src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg"
                  alt="小米8 6GB 全息幻彩紫 64GB"
                />
                <span class="product-name ellipsis">小米8 6GB 全息幻彩紫 64GB</span>
              </a>
              <p class="unit-price">1999元</p>
              <p class="quantity">
                <button class="button-minus">-</button>
                <input class="quantity-num" type="text" value="1" />
                <button class="button-plus">+</button>
              </p>
              <p class="total-price">1999元</p>
              <p class="operate">
                <i class="icon-delete"></i>
              </p>
            </li>
          </ul>
        </div>
        <div class="grand-total">
          <div class="left">
            <a class="shopping" href="javascript:;">继续购物</a>
            <span class="vertical-line">|</span>
            <span>
              共
              <span class="num">3</span> 件商品，已选择
              <span class="num">3</span> 件
            </span>
          </div>
          <div class="right">
            <span>
              合计：
              <span class="cart-total-price">2897</span>元
            </span>
            <button class="settle btn-large">去结算</button>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from '../components/NavFooter'

export default {
  name: 'cart',
  components: {
    OrderHeader,
    ServiceBar,
    NavFooter
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.cart {
  .main {
    padding: 30px 0 90px;
    background-color: $colorJ;
    .container {
      .list {
        padding: 0 42px;
        text-align: center;
        background-color: $colorG;
        &-head .check,
        &-item .check {
          position: relative;
          display: inline-block;
          padding: 0 74px 0 20px;
          &-icon {
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            border: 1px solid $colorH;
            cursor: pointer;
            &.checked {
              @include bgImg(16px, 12px, "/imgs/icon-gou.png", contain);
              background-color: $colorA;
              background-origin: content-box;
              border: none;
              padding: 5px 3px;
            }
          }
        }
        &-head {
          display: flex;
          align-items: center;
          height: 80px;
          line-height: 80px;
          color: $colorC;
          font-size: $fontJ;
          .check {
            .check-txt {
              position: absolute;
              left: 60px;
            }
          }
          .product-name {
            display: inline-block;
            width: 400px;
            text-align: left;
            margin-left: 110px;
          }
          .unit-price {
            width: 120px;
          }
          .quantity {
            width: 200px;
          }
          .total-price {
            width: 120px;
          }
          .operate {
            width: 76px;
          }
        }
        &-item {
          display: flex;
          align-items: center;
          height: 124px;
          color: $colorB;
          font-size: $fontI;
          border-top: 1px solid $colorH;
          .product-link {
            display: flex;
            align-items: center;
            height: 100%;
            .product-img {
              display: inline-block;
              width: 80px;
              height: 80px;
            }
            .product-name {
              display: flex;
              align-items: center;
              width: 400px;
              height: 60px;
              color: $colorB;
              font-size: $fontH;
              line-height: 30px;
              padding-left: 30px;
              overflow: hidden;
            }
          }
          .unit-price {
            width: 120px;
          }
          .quantity {
            width: 150px;
            height: 40px;
            margin: 0 25px;
            box-sizing: border-box;
            border: 1px solid $colorH;
            &-num {
              display: inline-block;
              width: 67px;
              height: 37px;
              text-align: center;
              border: none;
            }
            .button-minus,
            .button-plus {
              width: 40px;
              height: 37px;
              border: none;
              cursor: pointer;
              font-size: $fontJ;
              background-color: $colorG;
            }
          }
          .total-price {
            width: 120px;
            color: $colorA;
          }
          .operate {
            width: 76px;
            .icon-delete {
              @include bgImg(14px, 12px, "/imgs/icon-close.png", contain);
              vertical-align: middle;
              cursor: pointer;
            }
          }
        }
      }
      .grand-total {
        display: flex;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        padding-top: 20px;
        font-size: $fontJ;
        .left {
          .shopping {
            color: $colorC;
          }
          .vertical-line {
            padding: 0 16px 0 18px;
            color: $colorH;
          }
          .num {
            color: $colorA;
          }
        }
        .right {
          color: $colorA;
          .cart-total-price {
            font-size: $fontG;
          }
          .settle {
            margin-left: 30px;
            border: none;
            color: $colorG;
            background-color: $colorA;
          }
        }
      }
    }
  }
}
</style>