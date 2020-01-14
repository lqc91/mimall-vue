<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div class="placeholder"></div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam';
export default {
  name: 'product',
  components: {
    ProductParam
  }
}
</script>

<style lang="scss" scoped>
.product {
  .placeholder {
    height: 2000px;
    background-color: red;
  }
}
</style>