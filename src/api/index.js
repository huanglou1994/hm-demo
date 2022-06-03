// 管理所有接口
// 登录界面接口
import { userLogin, sendCode } from './login'
// user 接口
import { getUserInfo } from '@/api/user'
// 用户登录
export const userLoginAPI = userLogin
// 发送验证码
export const sendCodeAPI = sendCode
// 获取用户资料
export const getUserInfoAPI = getUserInfo