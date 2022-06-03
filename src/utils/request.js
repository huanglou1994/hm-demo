import request from 'axios'
import store from '@/store/index'
// import { getLocal } from '@/utils/token'
request.defaults.baseURL = "http://toutiao.itheima.net"// 基础路径

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (store.state.user) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})

export default request