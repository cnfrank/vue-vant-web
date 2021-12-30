/*
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2021-12-21 21:23:00
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2021-12-30 22:23:14
 * @Description: file content
 * @FilePath: /vue-vant-web/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '', ///默认子路由
        name: 'home',
        component: () => import('@/views/home'),
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search'),
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/setting'),
      },
      {
        path: '/friends',
        name: 'friends',
        component: () => import('@/views/friends'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
