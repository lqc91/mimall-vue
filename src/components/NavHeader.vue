<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a class="topbar-link" href="https://www.mi.com/index.html">小米商城</a>
          <a class="topbar-link" href="https://www.miui.com/">MIUI</a>
          <a class="topbar-link" href="https://i.mi.com/">云服务</a>
          <a class="topbar-link" href="https://www.mi.com/aptitude/list/">协议规则</a>
        </div>
        <div class="topbar-user">
          <a class="topbar-link" href="javascript:;" v-if="username">{{username}}</a>
          <a class="topbar-link" to="/login" v-if="username" @click="logout">退出</a>
          <router-link class="topbar-link" to="/login" v-else>登录</router-link>
          <router-link class="topbar-link" to="/order" v-if="username">我的订单</router-link>
          <router-link class="topbar-link topbar-cart" to="/cart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})
          </router-link>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <router-link class="icon-logo" to="/index"></router-link>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span class="item-name">小米手机</span>
            <ul class="children clearfix">
              <li class="product" v-for="(item, index) in phoneList" :key="index">
                <router-link
                  class="product-link"
                  :to="{name: 'product', params: {id: item.id}}"
                  target="_blank"
                >
                  <img class="product-img" v-lazy="item.mainImage" :alt="item.name" />
                  <span class="product-name">{{item.name}}</span>
                  <span class="product-price">{{item.price | currency}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="item-menu">
            <span class="item-name">Redmi 红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span class="item-name">电视</span>
            <ul class="children clearfix">
              <li class="product">
                <a class="product-link" href="https://www.mi.com/redmitv/70" target="_blank">
                  <img
                    class="product-img"
                    v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg'"
                    alt
                  />
                  <span class="product-name">Redmi 红米电视 70英寸 R70A</span>
                  <span class="product-price">￥2999.00元</span>
                </a>
              </li>
              <li class="product">
                <a class="product-link" href="https://www.mi.com/arttv/" target="_blank">
                  <img
                    class="product-img"
                    v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg'"
                    alt
                  />
                  <span class="product-name">小米壁画电视 65英寸</span>
                  <span class="product-price">￥6999.00元</span>
                </a>
              </li>
              <li class="product">
                <a
                  class="product-link"
                  href="https://www.mi.com/mitvall-screen/e55a/"
                  target="_blank"
                >
                  <img
                    class="product-img"
                    v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg'"
                    alt
                  />
                  <span class="product-name">小米全面屏电视E55A</span>
                  <span class="product-price">￥1899.00元</span>
                </a>
              </li>
              <li class="product">
                <a class="product-link" href="https://www.mi.com/mitv4A/32/" target="_blank">
                  <img
                    class="product-img"
                    v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png'"
                    alt
                  />
                  <span class="product-name">小米电视4A 32英寸</span>
                  <span class="product-price">￥699.00元</span>
                </a>
              </li>
              <li class="product">
                <a class="product-link" href="https://www.mi.com/mitv4A/55/" target="_blank">
                  <img
                    class="product-img"
                    v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg'"
                    alt
                  />
                  <span class="product-name">小米电视4A 55英寸</span>
                  <span class="product-price">￥1799.00元</span>
                </a>
              </li>
              <li class="product">
                <a class="product-link" href="https://www.mi.com/mitv4A/65" target="_blank">
                  <img
                    class="product-img"
                    v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bd922870295a97a0972eaba5af92129e.jpg'"
                    alt
                  />
                  <span class="product-name">小米电视4A 65英寸</span>
                  <span class="product-price">￥2699.00元</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input class="search-ipt" type="text" name="keyword" />
            <a class="icon-search" href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: []
    };
  },
  computed: {
    // 不使用 mapState
    // username() {
    //   return this.$store.state.username;
    // },
    // cartCount() {
    //   return this.$store.state.cartCount;
    // }
    // 使用 mapState
    ...mapState(["username", "cartCount"])
  },
  mounted() {
    this.getProductList();
    let params = this.$route.params;
    if (params && params.from === "login") {
      this.getCartCount();
    }
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6
          }
        })
        .then(res => {
          this.phoneList = res.list;
        });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
    logout() {
      this.axios.post("/user/logout").then(() => {
        this.$cookie.set("userId", "", {
          expires: "-1"
        });
        this.$store.dispatch("saveUserName", "");
        this.$store.dispatch("saveCartCount", 0);
        this.$message.success("退出成功");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    color: #b0b0b0;
    background-color: $colorB;
    .container {
      @include flex();
      .topbar-link {
        display: inline-block;
        color: #b0b0b0;
      }
      .topbar-menu {
        .topbar-link {
          margin-right: 17px;
        }
      }
      .topbar-user {
        .topbar-link {
          height: 39px;
          margin-right: 19px;
          cursor: pointer;
        }
        .topbar-cart {
          width: 110px;
          color: $colorG;
          background-color: $colorA;
          text-align: center;
          margin-right: 0;
          .icon-cart {
            @include bgImg(16px, 12px, "./../assets/imgs/icons/icon-cart-checked.png");
            margin-right: 4px;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      @include flex();
      height: 112px;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        overflow: hidden;
        background-color: $colorA;
        .icon-logo {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: "";
            @include bgImg(55px, 55px, "./../assets/imgs/logo/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &:after {
            content: "";
            @include bgImg(55px, 55px, "./../assets/imgs/logo/mi-home.png", 55px);
          }
          &:hover:before {
            margin-left: -55px;
          }
        }
      }
      .header-menu {
        position: absolute;
        left: 264px;
        display: inline-block;
        .item-menu {
          display: inline-block;
          line-height: 112px;
          color: $colorB;
          font-size: $fontI;
          padding: 0 8px;
          margin: 0 2px;
          cursor: pointer;
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: -264px;
            width: 1226px;
            height: 0;
            opacity: 0;
            z-index: 10;
            overflow: hidden;
            background-color: $colorG;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            &:before {
              content: "";
              position: absolute;
              width: 100%;
              border-top: 1px solid $colorH;
            }
            .product {
              position: relative;
              float: left;
              width: 16.666667%;
              height: 220px;
              line-height: 20px;
              text-align: center;
              box-sizing: border-box;
              font-size: $fontK;
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                width: 1px;
                height: 100px;
                border-left: 1px solid $colorF;
              }
              &:last-child:before {
                display: none;
              }
              &-link {
                display: inline-block;
                width: 100%;
                padding: 26px 0;
              }
              &-img {
                display: block;
                width: auto;
                height: 111px;
                margin: 0 auto;
                margin-bottom: 17px;
              }
              &-name {
                display: block;
                color: $colorB;
              }
              &-price {
                display: block;
                color: $colorA;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          display: flex;
          align-items: center;
          height: 50px;
          .search-ipt {
            width: 264px;
            height: 50px;
            box-sizing: border-box;
            border: 1px solid #e0e0e0;
            padding: 0 14px;
          }
          .icon-search {
            @include bgImg(18px, 18px, "./../assets/imgs/icons/icon-search.png", 18px);
            padding: 15px 18px;
            border: 1px solid #e0e0e0;
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
