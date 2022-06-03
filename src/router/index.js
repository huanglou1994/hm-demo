// 引入路由库
import VueRouter  from "vue-router"
// 引入vue
import Vue from 'vue'
// 注册全局路由
Vue.use(VueRouter)
// 创建路由规则
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]
// 生成路由对象
const router = new VueRouter({
  routes
})
export default router