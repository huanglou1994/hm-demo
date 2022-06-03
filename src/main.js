import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router/index.js'
// 引入vuex
import store from './store/index.js'
// 全局css样式
import './style/index.less'
import 'amfe-flexible'
// vant 组件
import { Button, NavBar, Field, Cell, CellGroup, Toast, Form, CountDown, Tabbar, TabbarItem, Icon, Grid, GridItem, Image as VanImage, Col, Row, Dialog } from 'vant'
// vant 组件全局注册
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Toast)
Vue.use(Form)
Vue.use(CountDown)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VanImage)
Vue.use(Col)
Vue.use(Row)
Vue.use(Dialog)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
