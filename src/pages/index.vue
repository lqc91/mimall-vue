<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a class="item-link" href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul class="children-list" v-for="(item, index) in menuList" :key="index">
                  <li class="children-item" v-for="(sub, idx) in item" :key="idx">
                    <router-link
                      class="citem-link"
                      :to="{name: 'product', params: {id: sub ? sub.id : 30}}"
                    >
                      <img
                        class="citem-img"
                        :src="sub ? sub.img : '/imgs/item-box-1.png'"
                        :alt="sub ? sub.name : '小米CC9'"
                      />
                      {{sub ? sub.name : '小米CC9'}}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a class="item-link" href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a class="item-link" href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a class="item-link" href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a class="item-link" href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a class="item-link" href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a class="item-link" href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a class="item-link" href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
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
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.index {
  .swiper-box {
    position: relative;
    .nav-menu {
      position: absolute;
      width: 234px;
      height: 450px;
      box-sizing: border-box;
      padding: 26px 0;
      z-index: 9;
      background-color: rgba(85, 88, 90, 0.5);
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .item-link {
            position: relative;
            display: inline-block;
            width: 100%;
            box-sizing: border-box;
            padding-left: 30px;
            font-size: $fontI;
            color: $colorG;
            &:after {
              content: "";
              position: absolute;
              top: 17.5px;
              right: 30px;
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          .children {
            display: none;
            position: absolute;
            top: 0;
            left: 234px;
            width: 992px;
            height: 450px;
            box-sizing: border-box;
            background-color: $colorG;
            border: 1px solid $colorH;
            .children-list {
              display: flex;
              justify-content: space-between;
              .children-item {
                flex: 1;
                height: 75px;
                line-height: 75px;
                .citem-link {
                  display: inline-block;
                  width: 100%;
                  box-sizing: border-box;
                  padding-left: 23px;
                  color: $colorB;
                  font-size: $fontJ;
                }
                .citem-img {
                  width: 42px;
                  height: 42px;
                  vertical-align: middle;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 450px;
      .swiper-button-prev {
        left: 244px;
      }
      .slide-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>