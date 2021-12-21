/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2021-12-21 20:27:41
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2021-12-21 21:50:01
 * @Description: file content
 * @FilePath: /vue-vant-web/src/utils/request.js
 */
// 请求模块
import axios from 'axios'

const request = axios.cratest({
  baseURL: 'https://api.51jja.cn',
})

// 请求拦截器

export default request
