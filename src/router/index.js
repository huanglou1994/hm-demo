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
  },
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children:[
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/index.vue'),
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video/index.vue'),
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa/index.vue'),
      },
    ]
  }
]
// 生成路由对象
const router = new VueRouter({
  routes
})
export default router