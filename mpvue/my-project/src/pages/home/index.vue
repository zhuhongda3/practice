<template>
  <div>
    <div class="header">
      <div class="header-inner">
        <a href="/" class="logo">
          <img :src="logo" alt="">
        </a>
        <div class="hd-input"><i class="iconfont icon-search"></i><span>请输入搜索关键字</span></div>
        <div class="hd-scan"><i class="iconfont icon-scan"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import imgUrl from './img/logo.png'

export default {
  data(){
    return {
      logo: imgUrl,
    }
  },
  created(){

  },
  mounted(){

  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss">
@import '@/assets/css/reset.scss';

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1120;
}
.main {
  padding-top: 100rpx;
  padding-bottom: 95rpx;
}
.title {
  display: flex;
  align-items: center;
  padding: 16rpx 20rpx;
  h3{
    flex: 1;
    font-size: 36rpx;
  }
  span {
    color: #f26d21;
    font-size: 28rpx;
  }
}

.header-inner{
  display: flex;
  align-items: center;
  height: 100rpx;
  padding: 0 20rpx;
  background-color: #fff;
  .logo{
    padding: 15rpx 0;
    img{
      width: 99rpx;
      height: 31rpx;
    }
  }
}

.header-inner {
  .hd-input{
    flex: 1;
    min-width: 0;
    height: 60rpx;
    line-height: 60rpx;
    margin-left: 24rpx;
    margin-right: 40rpx;
    padding: 0 35rpx;
    border-radius: 200rpx;
    color: #6c6f71;
    font-size: 28rpx;
    background-color: #f4f4f4;
    i{
      font-size: 32rpx;
      margin-right: 14rpx;
    }
  }
  .hd-scan{
    i{
      font-size: 40rpx;
      color: #6c6f71;
    }
   }
}
</style>
