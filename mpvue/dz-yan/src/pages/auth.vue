<template>
  <div class="">
    <div class="auth-wrap">
      <p class="title">授权使用微信头像、昵称</p>
      <div class="info">
        <img
          class="img"
          :src="userAvatarUrl"
          alt
        />
        <p class="name">{{userNickName}}</p>
      </div>
      <div class="btns">
        <button
          class="btn wx-btn"
          open-type="getUserInfo"
          @getuserinfo="onGetUserInfo"
        >确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAvatarUrl: require('../../static/images/avatar.jpg'),
      userNickName: '',
      wxData: {},
    }
  },
  methods: {
    onGetUserInfo(e) {
      this.wxData = e.mp.detail
      wx.getSetting({
        success: res => {
          if (!res.authSetting['scope.userInfo']) {
            wx.authorize({
              scope: 'scope.userInfo',
              success: () => {
                this.getUserInfo()
              },
              fail: () => {
                this.$common.showToast('用户未授权')
              },
            })
          } else {
            this.getUserInfo()
          }
        },
      })
    },
    getUserInfo() {
      this.userNickName = this.wxData.userInfo.nickName
      this.userAvatarUrl = this.wxData.userInfo.avatarUrl
      this.$store.dispatch('user/setUserInfo', this.wxData.userInfo)
      this.$common.gotoPage('/pages/product', 'isTab')
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./static/css/variables";
.auth-wrap {
  padding-top: 20px;
  text-align: center;
  .title {
    font-size: $h4-font-size;
  }
  .info {
    .img {
      display: inline-block;
      vertical-align: middle;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      margin: 40px 0 20px;
    }
    .name {
      font-size: $h1-font-size;
    }
  }
  .btns {
    margin-top: 80rpx;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 272px;
      height: 48px;
      text-align: center;
      border-radius: 24px;
      margin: 0 auto;
      &:not(:first-child) {
        margin-top: 24px;
      }
      &.wx-btn {
        background: #45bb44;
        color: $white-color;
      }
    }
  }
}
</style>