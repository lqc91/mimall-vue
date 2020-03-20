<template>
  <div class="cart">
    <order-header title="我的购物车" tip="温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算"></order-header>
    <div class="main">
      <div class="container">
        <div class="list">
          <div class="list-head">
            <p class="check">
              <i class="check-icon" :class="{checked: allChecked}" @click="toggleAll"></i>
              <span class="check-txt">全选</span>
            </p>
            <p class="product-name">商品名称</p>
            <p class="unit-price">单价</p>
            <p class="quantity">数量</p>
            <p class="total-price">小计</p>
            <p class="operate">操作</p>
          </div>
          <ul>
            <li class="list-item" v-for="(item, index) in list" :key="index">
              <p class="check">
                <i
                  class="check-icon"
                  :class="{checked: item.productSelected}"
                  @click="updateCart(item)"
                ></i>
              </p>
              <router-link
                class="product-link"
                :to="{name: 'product', params: {
                id: item.productId
              }}"
              >
                <img class="product-img" v-lazy="item.productMainImage" alt="小米8 6GB 全息幻彩紫 64GB" />
                <span class="product-name">{{item.productName}} {{item.productSubtitle}}</span>
              </router-link>
              <p class="unit-price">{{item.productPrice}}元</p>
              <p class="quantity">
                <button class="button-minus" @click="updateCart(item, '-')">-</button>
                <input class="quantity-num" type="text" :value="item.quantity" />
                <button class="button-plus" @click="updateCart(item, '+')">+</button>
              </p>
              <p class="total-price">{{item.productPrice * item.quantity}}元</p>
              <p class="operate">
                <i class="icon-delete" @click="delProductConfirm(item)"></i>
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
              <span class="num">{{list.length}}</span> 件商品，已选择
              <span class="num">{{checkedNum}}</span> 件
            </span>
          </div>
          <div class="right">
            <span>
              合计：
              <span class="cart-total-price">{{cartTotalPrice}}</span>元
            </span>
            <button class="settle btn-large" @click="order">去结算</button>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
    <modal
      title="提示"
      modalType="middle"
      :showModal="showModal"
      @submit="confirmDelProduct(productId)"
      @cancel="showModal = false"
    >
      <template v-slot:modal-body>
        <p>确定删除该商品？</p>
      </template>
    </modal>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from '../components/NavFooter'
import Modal from '../components/Modal.vue'

export default {
  name: 'cart',
  components: {
    OrderHeader,
    ServiceBar,
    NavFooter,
    Modal
  },
  data() {
    return {
      list: [], // 商品列表
      allChecked: false, // 是否全选
      cartTotalPrice: 0, // 商品总金额
      checkedNum: 0, // 选中商品数量
      productId: 0, // 待删除商品id
      showModal: false
    }
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    // 获取购物车列表
    getCartList() {
      this.axios.get('/carts').then(res => {
        this.renderData(res);
      })
    },
    // 更新购物车某商品数量及该商品单选状态
    updateCart(item, type) {
      let quantity = item.quantity,
          selected = item.productSelected;
      if (type === '-') {
        if (quantity === 1) {
          this.$message.warning('商品至少保留一件');
          return;
        }
        --quantity;
      } else if (type === '+') {
        if (quantity > item.productStock) {
          this.$message.warning('购买数量不能能超过库存数量');
          return;
        }
        ++quantity;
      } else {
        selected = !item.productSelected;
      }
      this.axios.put(`/carts/${item.productId}`, {
        quantity,
        selected
      }).then(res => {
        this.renderData(res);
      })
    },
    // 删除商品确认
    delProductConfirm(item) {
      this.showModal = true;
      this.productId = item.productId;
    },
    // 确定删除商品
    confirmDelProduct(productId) {
      this.delProduct(productId);
      this.showModal = false;
    },
    // 删除购物车某商品
    delProduct(productId) {
      this.axios.delete(`/carts/${productId}`).then(res => {
        this.$message.success('删除成功');
        this.renderData(res);
      });
    },
    // 控制全选
    toggleAll() {
      let url = this.allChecked ? '/carts/unSelectAll' : '/carts/selectAll';
      this.axios.put(url).then(res => this.renderData(res))
    },
    // 公共赋值
    renderData(res) {
      this.list = res.cartProductVoList || [];
        this.allChecked = res.selectedAll;
        this.cartTotalPrice = res.cartTotalPrice;
        this.checkedNum = this.list.filter(item => item.productSelected).length;
    },
    // 结算
    order() {
      let allUnChecked = this.list.every(item => !item.productSelected);
      if (allUnChecked) {
        this.$message.warning('未选中商品，无法结算');
      } else {
        this.$router.push('/order/confirm');
      }
    }
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
              @include bgImg(16px, 12px, "./../assets/imgs/icons/icon-gou.png", contain);
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
              text-align: left;
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
              @include bgImg(14px, 12px, "./../assets/imgs/icons/icon-close.png", contain);
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
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>