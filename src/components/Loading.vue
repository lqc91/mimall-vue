<template>
  <div class="loading">
    <img src="./../assets/imgs/loading-bars.svg" alt="loading image" />
  </div>
</template>
<script>
export default {
  naem: "loading"
};
</script>
<style lang="scss" scoped>
.loading {
  height: 80px;
  line-height: 80px;
  text-align: center;
  padding: 30px 0;
  img {
    height: 100%;
  }
}
</style>