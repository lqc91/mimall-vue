<template>
  <div class="product">
    <product-param class="product-param">
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <section class="product-desc">
      <div class="desc-1">
        <h1 class="title">
          小米
          <span class="num">8</span>
        </h1>
        <h4 class="subtitle">8周年旗舰版</h4>
        <p class="feature">
          <span class="txt">全球首款双频 GPS</span>
          <span class="vertical-line">|</span>
          <span class="txt">骁龙845</span>
          <span class="vertical-line">|</span>
          <span class="txt">AI 变焦双摄</span>
          <span class="vertical-line">|</span>
          <span class="txt">红外人脸识别</span>
        </p>
        <div class="price">
          <p class="act">
            <span class="sign">￥</span>
            <span>2599</span>
          </p>
          <p class="origin">
            <span class="sign">￥</span>
            <span>2999</span>
          </p>
        </div>
      </div>
      <div class="desc-2">
        <div class="container"></div>
      </div>
      <div class="desc-3"></div>
      <div class="desc-4">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <img class="slide-img" :src="item.img" :alt="item.desc" />
          </swiper-slide>
          <template v-slot:pagination>
            <div class="swiper-pagination"></div>
          </template>
        </swiper>
        <p class="feature">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="desc-5">
        <h2 class="title">
          960帧超慢动作摄影
          <br />慢慢回味每一瞬间的精彩
        </h2>
        <h3 class="subtitle">
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </h3>
        <div class="container"></div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'product',
  components: {
    ProductParam,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay:true,
        loop:true,
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-sliver',
          bulletActiveClass: 'swiper-pagination-sliver-active'
        }
      },
      slideList: [
        {
          img: '/imgs/product/gallery-2.png',
          desc: '小米8 AI变焦双摄拍摄'
        },
        {
          img: '/imgs/product/gallery-3.png',
          desc: '小米8 AI变焦双摄拍摄'
        },
        {
          img: '/imgs/product/gallery-4.png',
          desc: '小米8 AI变焦双摄拍摄'
        },
        {
          img: '/imgs/product/gallery-5.jpg',
          desc: '小米8 AI变焦双摄拍摄'
        },
        {
          img: '/imgs/product/gallery-6.jpg',
          desc: '小米8 AI变焦双摄拍摄'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.product {
  &-param {
    z-index: 10;
  }
  &-desc {
    background-color: $colorG;
    padding-bottom: 45px;
    .desc-1 {
      @include bgImg(100%, 718px, "/imgs/product/product-bg-1.png", cover);
      color: $colorB;
      text-align: center;
      .title {
        font-size: $fontA;
        line-height: 100px;
        margin-top: 50px;
        .num {
          font-size: 100px;
          vertical-align: top;
        }
      }
      .subtitle {
        font-size: $fontE;
        line-height: 30px;
        letter-spacing: 20px;
        font-weight: normal;
      }
      .feature {
        font-size: $fontI;
        line-height: 20px;
        margin: 10px 0;
        .vertical-line {
          margin: 0 15px;
          color: #bfab9d;
        }
      }
      .price {
        margin-top: 25px;
        .act {
          display: inline-block;
          font-size: $fontB;
          margin-right: 10px;
          .sign {
            display: inline-block;
            font-size: $fontC;
            vertical-align: top;
          }
        }
        .origin {
          display: inline-block;
          text-decoration: line-through;
          font-size: $fontD;
          .sign {
            font-size: $fontG;
            vertical-align: top;
          }
        }
      }
    }
    .desc-2 {
      @include flex();
      padding: 40px 0;
      background-color: $colorG;
      .container {
        border: 1px dotted $colorB;
        @include bgImg(
          1226px,
          397px,
          "/imgs/product/product-bg-2.png",
          contain
        );
      }
    }
    .desc-3 {
      @include bgImg(100%, 638px, "/imgs/product/product-bg-3.png", cover);
      vertical-align: middle;
    }
    .desc-4 {
      text-align: center;
      background-color: $colorG;
      color: $colorB;
      .swiper-container {
        font-size: 0;
        padding: 35px 0;
      }
      .swiper-slide {
        .slide-img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
      .swiper-pagination {
        bottom: 0;
      }
      .feature {
        font-size: $fontH;
        padding: 20px 0 50px;
      }
    }
    .desc-5 {
      padding: 70px 0 120px;
      text-align: center;
      color: $colorG;
      background-color: #000;
      .title {
        font-size: 60px;
      }
      .subtitle {
        font-size: $fontE;
        line-height: 36px;
        font-weight: normal;
        padding: 40px 0 50px;
      }
      .container {
        @include bgImg(1226px, 540px, "/imgs/product/gallery-1.png", cover);
      }
    }
  }
}
</style>
<style lang="scss">
.swiper-pagination-sliver {
  display: inline-block;
  width: 30px;
  height: 3px;
  margin: 0 7px;
  background-color: #ccc;
}
.swiper-pagination-sliver-active {
  background-color: #666;
}
</style>