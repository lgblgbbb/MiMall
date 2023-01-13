const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  "devServer":{
    "proxy":{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // 设置根路径
  // "publicPath":'/app'
  // 是否给查看源码
  productionSourceMap:false,
  // 删除预加载，真正按需加载
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch')
  }
})
