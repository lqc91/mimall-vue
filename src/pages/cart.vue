<template>
  <div>
    <order-header title="我的购物车" tip="温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算"></order-header>
    <div>cart</div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'

export default {
  name: 'cart',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style>
</style>