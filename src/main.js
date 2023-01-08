import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// 根据前端的跨域方式做调整
axios.defaults.baseURL = ' https://mock.mengxuegu.com/mock/63ba6b5c0743af0df9523593/api'
// axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})


Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
