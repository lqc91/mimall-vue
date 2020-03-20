<template>
  <div class="no-data">
    <img src="./../assets/imgs/icons/icon-no-data.png" alt="no data">
    <p>暂无提交的订单记录</p>
  </div>
</template>

<script>
export default {
  name: 'no-data'
}
</script>

<style lang="scss" scoped>
.no-data{
  padding:55px 0;
  text-align:center;
  img{
    width:260px;
    margin-bottom:30px;
  }
  p{
    font-size:18px;
    color:#999;
  }
}
</style>