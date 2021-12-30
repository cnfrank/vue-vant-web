/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2021-12-21 20:27:41
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2021-12-24 23:57:56
 * @Description: file content
 * @FilePath: /vue-vant-web/src/utils/request.js
 */
// 请求模块
import axios from 'axios'

const request = axios.create({
  // baseURL: 'https://372b91f9-6c1f-4918-b0af-7dc32f6acf05.bspapp.com',
  baseURL: 'https://api.orienteers.cn',
})

// 请求拦截器

export default request
