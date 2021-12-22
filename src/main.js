/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2021-12-21 20:17:48
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2021-12-22 18:49:14
 * @Description: file content
 * @FilePath: /vue-vant-web/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
