<template>
  <div class="login-container">
      <!-- 顶部标题 -->
      <van-nav-bar
        title="登录"
        class="login-nav page-nav"
      />
      <!-- 输入框 -->
      <van-form validate-first @submit="onLogin" ref="form">
        <!-- 手机号 -->
        <van-field
        v-model="user.mobile"
        type="number"
        name="mobile"
        placeholder="请输入手机号"
        class="login-input-item"
        maxlength="11"
        :rules="fromVerifyResult.mobile"
        >
        <template #left-icon>
          <i class="iconfont icon-shouji"></i>
        </template>
        </van-field>
      <!-- 短信验证码 -->
      <van-field
        v-model="user.code"
        type="number"
        name="code"
        placeholder="请输入验证码"
        class="login-input-item"
        maxlength="6"
        :rules="fromVerifyResult.code"
      >
        <template #left-icon>
          <i class="iconfont icon-yanzhengma"></i>
        </template>
        <template #button>
          <van-button
          size="mini"
          round
          native-type="button"
          type="default"
          class="login-verify-btn"
          @click="OnSendVerify"
          :disabled="isCountDowmShow"
          >
          <van-count-down
          millisecond
          :time="1000*60"
          format="ss"
          v-if="isCountDowmShow"
          @finish="finish"
          />
          {{isCountDowmShow? '秒后获取' : '获取验证码'}}
          </van-button>
        </template>
      </van-field>
      <!-- 按钮 -->
      <div class="login-btn-wrap">
        <van-button class="login-btn" type="info">登录</van-button>
      </div>
      </van-form>
      <!-- 输入框 -->

  </div>
</template>

<script>
import { userLoginAPI, sendCodeAPI } from '@/api'
export default {
name: 'LoginIndex',
data () {
  return {
    user: {
      mobile: '', // 获取手机信息
      code: '' // 获取验证码
    },
    fromVerifyResult: {
      mobile: [{
        required: true,
        message: '手机号不能为空'
      },
      {
        pattern: /^[1][3-9]\d{9}$/,
        message: '请输入正确的手机号'
      }
      ],
      code: [{
        required: true,
        message: '验证码不能为空'
      },
      {
        pattern: /^\d{6}$/,
        message: '验证码格式错误'
      }
      ]
    },
    isCountDowmShow: false
  }
},
methods: {
  async onLogin () {
    // 开启加载状态
    this.$toast.loading({
      message: '登陆中...',
      forbidClick: true,
      duration: 0
    })
    // 获取用户手机号，验证码
    try {
      const { data } = await userLoginAPI(this.user)
      this.$store.commit('setToken',data.data.token)
      this.$toast.success('登录成功')
    } catch (err) {
      let message = '登录失败，请稍后重试'
      if (err && err.response.status === 400) {
        message = '验证码错误'
      }
      this.$toast.fail(message)
    }
  },
  async OnSendVerify () {
    // 获取验证码
    // 1. 校验手机
    try {
     await this.$refs.form.validate('mobile')
    //  验证成功 发起验证码请求
    } catch (err) {
      return console.log('验证失败',err.message)
    }
    // 显示倒计时
    this.isCountDowmShow = true
    // 发送请求
    try {
      await sendCodeAPI(this.user.mobile)
      this.$toast('发送成功')
    } catch (err) {
      let message = ''
      if (err && err.response.status === 404) {
        message = '手机号不正确'
      } else {
        message = '接口访问次数受限'
      }
        this.$toast(message)
    }
  },
  finish () {
    // 倒计时结束触发
    this.isCountDowmShow = false
  }
}
}
</script>

<style lang="less" scoped>
.login-container {
  .login-input-item {
    font-size: 26px;
    .iconfont {
      font-size: 37px;
      color: #666;
    }
    .login-verify-btn {
      top:-4px;
      width: 152px;
      height: 46px;
      line-height: 46px;
      background-color: #ededed;
      font-size: 22px;
      color: #666;
      .van-button__text {
        .van-count-down {
          color: #666;
          font-size: 20px;
          line-height:46px
        }
        display: flex;
        align-items: center;
        color: #666;
        font-size: 20px;
      }
    }
  }
  .login-btn-wrap {
    padding: 53px 32px 0 ;
    .login-btn {
      border-radius: 10px;
      width: 100%;
    }
  }
}
</style>
