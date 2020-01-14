import Vue from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload";
import VueCookie from "vue-cookie";
import App from "./App.vue";

// 根据前端跨域方式调整
// 此处为代理跨域
// 若后端接口为 /a/b
// 前端可通过 devServer.pathRewrite 去除请求 URL 中的 /api
// /api/a/b => /a/b
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

// 接口错误拦截
// status: 0 请求成功
// status: 10 未登录
axios.interceptors.response.use(response => {
  let res = response.data;
  let path = location.hash;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    // 路由挂载在 Vue 实例上，在 vue 页面文件中才能使用 this.$router.push 进行页面跳转
    // 此处无法使用
    if (path != "#/index") {
      window.location.href = "/#/login";
    }
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg"
});
Vue.use(VueCookie);

Vue.config.productionTip = false;

Vue.filter("currency", value => {
  if (!value) return;
  return "￥" + value.toFixed(2) + "元";
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
