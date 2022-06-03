<template>
  <div class="layout-container">
    <router-view/>
    <van-tabbar v-model="active" class="layout-wrap">
      <van-tabbar-item replace to="/" class="layout-item">
        <template #icon>
          <van-icon class="iconfont icon-shouye" />
        </template>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="qa" >
        <template #icon>
          <van-icon class="iconfont icon-wenda" />
        </template>
        <span>问答</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="video" >
        <template #icon>
          <van-icon class="iconfont icon-shipin" />
        </template>
        <span>视频</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="my" >
        <template #icon>
          <van-icon class="iconfont icon-wode" />
        </template>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
name: 'LayoutIndex',
data () {
  return {
    active: 0
  }
}
}
</script>

<style lang="less" scoped>

.layout-container {
  .van-tabbar-item--active {
    color: #1989fa !important;
  }
  .van-tabbar-item  {
    color: #707070;
  }
  .layout-wrap {
    height: 98px;
    .iconfont {
      font-size: 40px;
      color: #707070;
    }
  }
}
</style>