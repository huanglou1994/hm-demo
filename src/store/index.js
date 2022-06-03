import Vue from 'vue'
import Vuex from 'vuex'
import { getLocal, setLocal } from '@/utils/token'
Vue.use(Vuex)
const TOKEN = 'TOKEN_USER'
const store = new Vuex.Store({
  // 存储公共状态
  state: {
    user: getLocal(TOKEN)
  },
  // 更新state状态
  mutations: {
    setToken (state,token) {
      state.user = token
      // token持久化，保存到本地
      setLocal(TOKEN,token)
    }
  },
  // 处理异步动作
  actions: {},
  // 计算属性
  getters: {},
  modules: {},
})

export default store