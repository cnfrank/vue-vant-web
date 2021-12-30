<!--
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2021-12-30 20:59:19
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2021-12-30 22:24:01
 * @Description: file content
 * @FilePath: /vue-vant-web/src/views/layout/index.vue
-->
<template>
  <div>
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- /子路由出口 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">Home</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">Search</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friends">Friends</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/setting">Setting</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="scss" scoped></style>