import request from '@/utils/request'

// 获取用户资料
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/v1_0/user/profile'
  })
}