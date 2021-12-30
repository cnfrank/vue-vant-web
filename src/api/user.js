/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2021-12-24 21:30:39
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2021-12-24 23:58:43
 * @Description: file content
 * @FilePath: /vue-vant-web/src/api/user.js
 */
import request from '../utils/request'
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/api/user',
    data,
  })
}

export const sendSMS = (data) => {
  return request({
    method: 'POST',
    url: '/api/User/SendSms',
    data,
  })
}
