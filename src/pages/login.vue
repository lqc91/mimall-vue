<template>
  <div class="login">
    <div class="container">
      <router-link class="login-header" to="index">
        <img src="/imgs/login-logo.png" alt="login logo" />
      </router-link>
    </div>
    <div class="login-body">
      <div class="container">
        <div class="login-main">
          <div class="main-header">
            <a class="login-account active" href="javascript:;">帐号登录</a>
            <span class="vertical-line">|</span>
            <a class="login-qrcode" href="javascript:;">扫码登录</a>
          </div>
          <div class="main-account">
            <input
              v-model="username"
              class="account-ipt"
              type="text"
              placeholder="邮箱/手机号码/小米ID"
              autocomplete="username"
            />
            <input
              v-model="password"
              class="account-ipt"
              type="password"
              placeholder="密码"
              autocomplete="current-password"
            />
            <button @click="login" class="account-btn">登录</button>
            <div class="account-panel">
              <a @click="register" class="account-link active" href="javascript:;">手机短息登录/注册</a>
              <p>
                <a class="account-link" href="javascript:;">立即注册</a>
                <span class="vertical-line">|</span>
                <a class="account-link" href="javascript:;">忘记密码？</a>
              </p>
            </div>
          </div>
          <div class="main-qrcode"></div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <ul class="lang-list">
        <li class="lang-item">
          <a class="lang-link current" href="javascript:;">简体</a>
          <span class="vertical-line">|</span>
        </li>
        <li class="lang-item">
          <a class="lang-link" href="javascript:;">繁体</a>
          <span class="vertical-line">|</span>
        </li>
        <li class="lang-item">
          <a class="lang-link" href="javascript:;">English</a>
          <span class="vertical-line">|</span>
        </li>
        <li class="lang-item">
          <a class="lang-link" href="javascript:;">常见问题</a>
          <span class="vertical-line">|</span>
        </li>
        <li class="lang-item">
          <a class="lang-link" href="javascript:;">隐私政策</a>
        </li>
      </ul>
      <p class="footer-info">
        小米公司版权所有-京ICP备10046444-
        <a
          class="info-link"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
        >
          <i class="icon-beian"></i>京公网安备11010802020134号
        </a>-京ICP证110507号
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      userId: '',
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      let {username, password} = this;
      this.axios.post('/user/login', {
        username,
        password
      }).then(res => {
        this.$cookie.set('userId', res.id, {
          expires: 'Session'
        });
        // 使用 dispatch
        // this.$store.dispatch('saveUserName', res.username)
        // 使用 mapActions
        this.saveUserName(res.username);
        this.$router.push({
          name: 'index',
          params: {
            from: 'login'
          }
        });
      })
    },
    // 使用 mapActions
    ...mapActions(['saveUserName']),
    register() {
      this.axios.post('/user/register', {
        username: 'admin1',
        password: 'admin1',
        email: 'admin1@163.com'
      }).then(() => {
        this.$message.success('注册成功');
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base.scss";
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.login {
  background-color: $colorG;
  &-header {
    display: inline-block;
    width: 200px;
    height: 98px;
    margin: 8px 0;
  }
  &-body {
    width: 100%;
    height: 576px;
    background: url("/imgs/login-bg.jpg") no-repeat center;
    background-size: cover;
    .container {
      position: relative;
      height: 100%;
      .login-main {
        position: absolute;
        top: 35px;
        right: 22px;
        width: 410px;
        height: 510px;
        box-sizing: border-box;
        padding: 0 30px;
        background-color: $colorG;
        .main-header {
          padding: 40px 40px 50px;
          .login-account,
          .login-qrcode {
            display: inline-block;
            font-size: $fontE;
            color: $colorC;
            line-height: 26px;
            &.active {
              color: $colorA;
            }
          }
          .vertical-line {
            display: inline-block;
            font-size: $fontD;
            color: $colorF;
            margin: 0 35px;
          }
        }
        .main-account {
          .account-ipt {
            display: block;
            width: 100%;
            height: 50px;
            border: 1px solid $colorH;
            margin-bottom: 20px;
            padding: 18px;
            font-size: $fontJ;
            color: #4a4a4a;
          }
          input::placeholder {
            color: $colorD;
          }
          .account-btn {
            width: 100%;
            height: 50px;
            line-height: 50px;
            border: 0;
            color: $colorG;
            background-color: $colorA;
            margin: 10px 0 15px;
            font-size: $fontI;
          }
          .account-panel {
            display: flex;
            justify-content: space-between;
            .account-link {
              display: inline-block;
              color: $colorD;
              font-size: $fontJ;
              &.active {
                color: $colorA;
              }
            }
            .vertical-line {
              font-size: $fontI;
              color: $colorF;
              margin: 0 6px;
            }
          }
        }
      }
    }
  }
  &-footer {
    margin: 100px auto 20px;
    text-align: center;
    font-size: $fontJ;
    color: #757575;
    .lang-list {
      margin-bottom: 16px;
      line-height: 16px;
      .lang-item {
        display: inline-block;
        .lang-link {
          display: inline-block;
          padding: 2px 8px;
          color: #757575;
          &:hover,
          &.current {
            color: $colorB;
          }
        }
        .vertical-line {
          font-size: 16px;
        }
      }
    }
    .footer-info {
      .info-link {
        color: #757575;
        line-height: 20px;
        &:hover {
          color: $colorB;
        }
        .icon-beian {
          @include bgImg(
            20px,
            20px,
            "https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
          );
          vertical-align: middle;
        }
      }
    }
  }
}
</style>