import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index.js'
// 引入vuex
import store from './store/index.js'
// 全局css样式
import './style/index.less'
// vant 组件
import { Button } from 'vant'
// vant 组件全局注册
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
