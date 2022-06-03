<template>
  <div id="app">
    <!-- 路由出口 -->
    {{count}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log(this.$router)
  }
}
</script>

<style scoped lang="less">
</style>