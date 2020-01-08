<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <router-link :to="{name: 'product', params: {id: item.id}}">
              <img class="slide-img" :src="item.img" :alt="item.name" />
            </router-link>
          </swiper-slide>
          <template v-slot:pagination>
            <div class="swiper-pagination"></div>
          </template>
          <template v-slot:button-prev>
            <div class="swiper-button-prev"></div>
          </template>
          <template v-slot:button-next>
            <div class="swiper-button-next"></div>
          </template>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ServiceBar from '../components/ServiceBar'
export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
    ServiceBar
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg',
          name: '小米CC9'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg',
          name: 'Redmi Note 7'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg',
          name: '小米全面屏电视E55A'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg',
          name: '米家互联网洗烘一体机'
        },
        {
          id: '',
          img: '/imgs/slider/slide-5.jpg',
          name: '米家智能门锁 青春版'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.index {
  .swiper-box {
    .swiper-container {
      height: 450px;
      .slide-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>