<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username)
      });
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
.swiper-pagination-sliver {
  display: inline-block;
  width: 30px;
  height: 3px;
  margin: 0 7px;
  background-color: #ccc;
  cursor: pointer;
}
.swiper-pagination-sliver-active {
  background-color: #666;
}
</style>
