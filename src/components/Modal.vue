<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType == 1"
            @click="$emit('submit')"
          >{{confirmTxt}}</a>
          <a
            href="javascript:;"
            class="btn btn-default"
            v-else-if="btnType == 2"
            @click="$emit('cancel')"
          >{{cancelTxt}}</a>
          <div class="btn-group" v-else>
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{confirmTxt}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelTxt}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // 弹窗类型：small, middle, large, form
    modalType: {
      type: String,
      default: 'form',
    },
    // 弹窗标题
    title: String,
    // 按钮类型：1: 仅确定按钮；2: 仅取消按钮；3: 确定和取消按钮
    btnType: String,
    confirmTxt: {
      type: String,
      default: '确定'
    },
    cancelTxt: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/modal.scss";
</style>