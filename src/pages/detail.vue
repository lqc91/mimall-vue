<template>
  <div class="detail">
    <product-param class="product-param" :title="product.name"></product-param>
    <div class="main">
      <div class="container">
        <swiper :options="swiperOption" class="swiper-container">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <img class="slide-img" :src="item" alt="手机图片" />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="info">
          <div class="base">
            <h2 class="title">{{product.name}}</h2>
            <p class="subtitle">{{product.subtitle}}</p>
            <p class="tag">小米自营</p>
            <p class="price">{{product.price}}元</p>
          </div>
          <div class="addr">
            <p class="default">
              <i class="icon-loc"></i>
              <span>北京 北京市 朝阳区 安定门街道</span>
            </p>
            <p class="stock" v-if="product.stock">有现货</p>
            <p class="stock" v-else>该地区暂时缺货</p>
          </div>
          <div class="type">
            <h3 class="title">选择版本</h3>
            <ul>
              <li class="item" :class="{checked: version === 1}" @click="version = 1">
                <span class="name">6GB+64GB 全网通</span>
                <span class="price">{{product.price}}元</span>
              </li>
              <li class="item" :class="{checked: version === 2}" @click="version = 2">
                <span class="name">4GB+64GB 移动4G</span>
                <span class="price">{{product.price}}元</span>
              </li>
            </ul>
          </div>
          <div class="type">
            <h3 class="title">选择颜色</h3>
            <ul>
              <li class="item checked">
                <i class="icon-color"></i>
                <span class="name">深空灰</span>
              </li>
            </ul>
          </div>
          <div class="selected">
            <ul>
              <li class="item">
                <p
                  class="version"
                >{{product.name}} {{version === 1 ? '6GB+64GB 全网通' : '4GB+64GB 移动4G'}} 深灰色</p>
                <p class="price">{{product.price}}元</p>
              </li>
            </ul>
            <p class="total-price">总计：{{product.price}}元</p>
          </div>
          <div class="btn-group">
            <button class="btn-huge add-cart" @click="addCart">加入购物车</button>
            <button class="prefer">
              <i class="icon-heart"></i>
              <span>喜欢</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="tip">
      <div class="container">
        <h3 class="title">价格说明</h3>
        <img src="./../assets/imgs/detail/item-price.jpeg" alt="价格说明" />
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam';
import ServiceBar from './../components/ServiceBar';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'detail',
  components: {
    ProductParam,
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      productId: this.$route.params.id, // 获取商品 id
      version: 1, // 商品版本切换
      product: {}, // 商品信息
      swiperOption: {
        autoplay:true,
        loop: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-sliver',
          bulletActiveClass: 'swiper-pagination-sliver-active'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList: [
        require('./../assets/imgs/detail/phone-1.jpg'),
        require('./../assets/imgs/detail/phone-2.jpg'),
        require('./../assets/imgs/detail/phone-3.jpg'),
        require('./../assets/imgs/detail/phone-4.jpg')
      ]
    }
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      this.axios.get(`/products/${this.productId}`).then(res => {
        this.product = res;
      })
    },
    addCart() {
      this.axios.post('/carts', {
        productId: this.productId,
        selected: true
      }).then((res = {cartTotalQuantity: 0}) => {
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
        this.$router.push('/cart');
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../assets/scss/base.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.detail {
  .main {
    background-color: $colorG;
    .container {
      display: flex;
      justify-content: space-between;
      .swiper-container {
        width: 560px;
        height: 560px;
        padding: 0 20px;
        margin: 0;
        .slide-img {
          width: 100%;
          height: 100%;
        }
        .swiper-button-prev {
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23cccccc'%2F%3E%3C%2Fsvg%3E");
        }
        .swiper-button-next {
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23cccccc'%2F%3E%3C%2Fsvg%3E");
        }
      }
      .info {
        width: 584px;
        padding-bottom: 50px;
        .base {
          padding: 20px 0;
          border-bottom: 1px solid $colorH;
          .title {
            font-size: $fontC;
            color: $colorB;
            padding: 8px 0;
          }
          .subtitle {
            font-size: $fontJ;
            color: $colorD;
            line-height: 25px;
          }
          .tag {
            font-size: $fontI;
            color: $colorA;
            padding: 15px 0 10px;
          }
          .price {
            font-size: $fontG;
            color: $colorA;
          }
        }
        .addr {
          margin: 28px 0 20px;
          padding: 30px 34px;
          border: 1px solid $colorH;
          background-color: #fafafa;
          .default {
            font-size: $fontJ;
            color: $colorC;
            .icon-loc {
              @include bgImg(20px, 22px, "./../assets/imgs/icons/icon-loc.png", contain);
              margin-right: 10px;
              vertical-align: middle;
            }
          }
          .stock {
            color: $colorA;
            margin: 15px 0 0 30px;
          }
        }
        .type {
          margin: 10px -10px 0 0;
          .title {
            font-size: $fontH;
          }
          .item {
            display: inline-block;
            width: 285px;
            text-align: center;
            margin: 20px 10px 20px 0;
            padding: 15px 0;
            border: 1px solid $colorH;
            font-size: $fontI;
            cursor: pointer;
            .name {
              color: $colorI;
            }
            .price {
              display: inline-block;
              margin-left: 12px;
              color: $colorC;
            }
            .icon-color {
              display: inline-block;
              width: 14px;
              height: 16px;
              vertical-align: middle;
              margin: -2px 10px 0 0;
              background-color: $colorC;
            }
            &.checked {
              border-color: $colorA;
              .name {
                color: $colorA;
              }
            }
          }
        }
        .selected {
          margin: 30px 0;
          padding: 22px 35px;
          background-color: #fafafa;
          .item {
            display: flex;
            justify-content: space-between;
            color: $colorB;
            font-size: $fontJ;
          }
          .total-price {
            color: $colorA;
            font-size: $fontE;
            margin-top: 15px;
          }
        }
        .btn-group {
          .add-cart {
            font-size: $fontI;
            color: $colorG;
            border: none;
            cursor:pointer;
            background-color: $colorA;
          }
          .prefer {
            width: 142px;
            height: 54px;
            cursor:pointer;
            color: $colorG;
            font-size: $fontI;
            background-color: #bbb;
            border: none;
            margin-left: 20px;
            .icon-heart {
              @include bgImg(18px, 16px, "./../assets/imgs/icons/icon-heart.png", contain);
              vertical-align: middle;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
  .tip {
    padding-bottom: 60px;
    background-color: #f3f3f3;
    .title {
      color: $colorB;
      font-size: $fontE;
      font-weight: 400;
      padding: 35px 0 25px;
    }
  }
}
</style>