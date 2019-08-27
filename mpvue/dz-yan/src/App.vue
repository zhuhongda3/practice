<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
@import "../static/css/iconfont.css";
</style>

<style lang="scss">
@import "static/css/reset.scss";
@import "static/css/common.scss";
</style>
