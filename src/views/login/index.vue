<!--
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2021-12-21 20:42:54
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2021-12-22 20:10:12
 * @Description: file content
 * @FilePath: /vue-vant-web/src/views/login/index.vue
-->
<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="Log In" />

    <!-- form表单 -->
    <van-form @submit="onSubmit">
      <van-field
        name="mobile"
        placeholder="Input mobile number please"
        :rules="ruleCollection.mobile"
        ><i slot="left-icon" class="iconfont iconshouji"></i
      ></van-field>
      <van-field
        name="code"
        placeholder="Input SMS code please"
        :rules="ruleCollection.code"
        ><i slot="left-icon" class="iconfont iconyanzhengma"></i
        ><template #button>
          <van-button round size="small" type="default" class="send-sms-btn">Send SMS</van-button>
        </template></van-field
      >
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="login-btn"> Log In </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data() {
    return {
      ruleCollection: {
        mobile: [{ required: true, message: 'mobile is required' }],
        code: [{ required: true, message: 'code is required' }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
  },
}
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 18px;
}
.send-sms-btn{
  background-color: #cfcfcf;
  width: 100px;
  height: 32px;
  color: #666;
}
.login-btn{
  background-color: #85aaf0;
  border: none;
}
</style>
