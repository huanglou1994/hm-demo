<template>
  <div class="my-container">
    <!-- 已登录 -->
    <div class="user-header my-header" v-if="$store.state.user">
      <van-cell class="user-info" :border="false">
        <template #icon>
          <van-image
            :src="userInfo.photo"
            round
            class="user-avatar"
          />
        </template>
        <template #title>
          <span class="user-name">{{userInfo.name}}</span>
        </template>
      <van-button type="default" size="mini" round class="eait-info">编辑资料</van-button>
      </van-cell>
      <!-- 头条&关注%粉丝%获赞 -->
      <van-row class="info-count">
        <van-col span="6" class="info-item">
          <span class="count">8</span>
          <span class="name">头条</span>
        </van-col>
        <van-col span="6" class="info-item">
          <span class="count">8</span>
          <span class="name">关注</span>
        </van-col>
        <van-col span="6" class="info-item">
          <span class="count">8</span>
          <span class="name">粉丝</span>
        </van-col>
        <van-col span="6" class="info-item">
          <span class="count">8</span>
          <span class="name">获赞</span>
        </van-col>
      </van-row>
    </div>
    <!-- 已登录 -->
    <!-- 未登录 -->
    <div class="login-header my-header" v-else>
        <div class="login-wrap" @click="onLogin">
          <img src="~@/assets/mobile.png" class="pic">
          <span class="text">登录 / 注册</span>
        </div>
    </div>
    <!-- 未登录 -->
     <!-- 收藏&历史 -->
    <van-grid :column-num="2" clickable class="my-grid">
      <van-grid-item class="grid-left" >
        <template #icon>
          <van-icon class="iconfont icon-shoucang" />
        </template>
        <template #text>
          <span class="text" >收藏</span>
        </template>
      </van-grid-item>
      <van-grid-item  class="grid-right">
        <template #icon>
          <van-icon class="iconfont icon-lishi" />
        </template>
        <template #text>
          <span class="text" >历史</span>
        </template>
      </van-grid-item>
    </van-grid>
      <!-- 消息通知&小智同学 -->
      <van-cell title="消息通知" is-link  class="cell-item"/>
      <van-cell title="小智同学" is-link  class="cell-item"/>
    <!-- 退出登录 -->
    <van-button type="default" class="logout" v-if="$store.state.user" @click="onLogout">退出登录</van-button>
  </div>
</template>

<script>
import { getUserInfoAPI } from '@/api'
export default {
name: 'MyIndex',
data () {
  return {
    userInfo: {} // 用户个人信息 头像/名字/性别/id/手机/生日..
  }
},
created () {
  // 发送登录请求 获取用户资料
  // 用户登录了，才发请求信息
  if (this.$store.state.user) {
    this.sendLoginRequest()
  }
},
methods: {
  async sendLoginRequest () {
    try {
      const { data } = await getUserInfoAPI ()
      // 登录成功
      this.userInfo = data.data
    } catch (err) {
      this.$toast('获取失败')
    }
  },
  onLogout () {
    this.$dialog.confirm({
      title: '标题',
      message: '弹窗内容',
    })
    .then(() => {
      this.$store.commit('setToken', null)
    })
  },
  // 登录/注册
  onLogin () {
    this.$router.back()
  }
}
}
</script>

<style lang="less" scoped>
.my-container {
  .my-header {
    height: 361px;
    background: url('~@/assets/banner.png') no-repeat;
    background-size: cover;
  }
  .login-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .pic {
    width: 132px;
    height: 132px;
    margin-bottom: 10px;
  }
  .text {
    color: #fff;
    font-size: 28px;
  }
  .my-grid {
    margin-bottom: 9px;
   .text {
     font-size: 28px;
     color: #333;
   }
   .iconfont {
     font-size: 45px;
   }
   .grid-left {
     height: 141px;
     .iconfont {
       color: #eb5253;
     }
   }
   .grid-right {
     height: 141px;
     .iconfont {
       color: #ff9d1d;
     }
   }
  }
  .cell-item {
    .van-cell__title {
      span {
        font-size: 30px;
        color: #333;
      }
    }
  }
  .user-info {
    top: 30px;
    align-items: center;
    height: 231px;
    background-color: unset;
    .user-name {
      font-size: 30px;
      color: #fff;
    }
    .user-avatar {
      margin-right: 23px;
      width: 132px;
      height: 132px;
      border: 2px solid #fff;
      box-sizing:border-box
    }
    .eait-info {
      width: 116px;
      height: 33px;
      font-size: 20px;
      color: #666;
    }
  }
  .info-count {
    height: 130px;
    .info-item {
      height: 130px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;    
      color: #fff;
      .count {
        font-size: 36px;
      }
      .name {
        font-size: 23px;
      }
    }

  }
  .logout {
    margin-top: 8px;
    width: 100%;
    height: 104px;
    color: #d86262;
    font-size: 30px;
  }
}
</style>