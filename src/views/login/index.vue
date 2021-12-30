<!--
 * @Author: Frank Zhou
 * @Email: cnfrank527@gmail.com
 * @Date: 2021-12-21 20:42:54
 * @LastEditors: Frank Zhou
 * @LastEditTime: 2021-12-25 00:26:39
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
        v-model="user.mobile"
        placeholder="Input mobile number please"
        :rules="ruleCollection.mobile"
        ><i slot="left-icon" class="iconfont iconshouji"></i
      ></van-field>
      <van-field
        name="code"
        v-model="user.code"
        placeholder="Input SMS code please"
        :rules="ruleCollection.code"
        ><i slot="left-icon" class="iconfont iconyanzhengma"></i
        ><template #button>
          <van-button
            round
            size="small"
            native-type="button"
            type="default"
            class="send-sms-btn"
            @click="onSendSMS"
            >Send SMS</van-button
          >
        </template></van-field
      >
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="login-btn">
          Log In
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data() {
    return {
      user: {
        // username: 'cnfrank',
        // password: '88317625',
        // captchaOptions: {
        //   deviceId: '16402700535387435325',
        //   scene: 'login',
        // },
        code: '',
        mobile: '',
      },
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
    onSendSMS() {
      //1.验证手机号
      //2.验证通过，显示倒计时
      //3.请求发送验证码
      // sendSMS()
    },
    async onSubmit() {
      //1.获取表单数据
      const user = this.user

      //2.表单验证
      this.$toast.loading({
        message: 'Logining',
        forbidClick: true,
        //禁用背景点击
        duration: 0,
      })
      //3.提交表单请求登录
      try {
        const res = await login(user)

        if (res.status === 200) {
          console.log('请求success', res)
          this.$toast.success('请求success')
          if (res.data.code === 403) {
            console.log('403' + res.data.msg)
            // 在组件中需要使用this.$toast 来调用Toast组件
            this.$toast(res.data.msg)
          }
        } else {
          console.log('请求异常', res)
        }
      } catch (err) {
        console.log('请求fail', err)
      }

      //4.根据返回处理逻辑
      console.log()
    },
  },
}
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 18px;
}
.send-sms-btn {
  background-color: #cfcfcf;
  width: 100px;
  height: 32px;
  color: #666;
}
.login-btn {
  background-color: #85aaf0;
  border: none;
}
</style>
