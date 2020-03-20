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
.modal,
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.modal {
  z-index: 10;
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.5s;
  }
  &.slide-enter,
  &.slide-leave-to {
    top: -150%;
    opacity: 0;
  }
  .mask {
    background-color: $colorI;
    opacity: 0.5;
  }
  &-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 660px;
    background-color: $colorG;
    transform: translate(-50%, -50%);
    .modal-header {
      height: 60px;
      line-height: 60px;
      padding: 0 25px;
      font-size: $fontI;
      background-color: $colorJ;
      .icon-close {
        position: absolute;
        top: 23px;
        right: 25px;
        width: 16px;
        height: 14px;
        background: url("./../assets/imgs/icons/icon-close.png") no-repeat center;
        background-size: contain;
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.5);
        }
      }
    }
    .modal-body {
      padding: 42px 40px 54px;
      font-size: $fontJ;
    }
    .modal-footer {
      height: 82px;
      line-height: 82px;
      text-align: center;
      background-color: $colorJ;
    }
  }
}
</style>