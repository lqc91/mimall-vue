module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mimall-vue/' : '/',
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    proxy: {
      "/api": {
        target: "http://mall-pre.springboot.cn",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete("prefetch")
  }
};
