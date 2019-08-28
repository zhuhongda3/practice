<template>
  <div>
    <div class="login-body">
      <div class="logo">
        <img
          class="img"
          :src="logoUrl"
          alt
        />
      </div>
      <div class="name">{{shopName}}</div>
      <!-- <div
        class="btns"
        v-if="!autoLoginRs"
      >
        <button
          class="btn wx-btn"
          hover-class="none"
          open-type="getPhoneNumber"
          @getphonenumber="getPhoneNumber"
        >
          <span class="wx-logo"></span>微信快捷登录
        </button>
      </div> -->
      <div class="rules">
        <!-- <p class="rules-p">
          登录即代表您已阅读并同意
          <span class="rule-link" data-url="/pages/protocol" @click="gotoPage">《用户注册协议》</span>
        </p> -->
        <p class="rules-p">未注册的手机号验证后将自动为您创建账户</p>
      </div>
    </div>
  </div>
</template>

<script>
import { login_api } from '@/api/api'

export default {
  data() {
    return {
      code: '',
      shopName: '',
      logoUrl: 'http://iph.href.lu/100x100?bg=000',
      // autoLoginRs: true,
    }
  },
  onShow() {
    // this.autoLoginRs = true
    this.wxLogin()
  },
  methods: {
    async userAutoLogin() {
      let d = {
        api_name: 'login',
        js_code: this.code,
        reqtime: Date.now(),
      }

      d.sign = this.$common.signCreate(['api_name', 'js_code', 'reqtime'], d)

      let res = await login_api(d)
      // this.autoLoginRs = false

      if (res.return_code == 200) {
        this.$store.dispatch('user/setShopInfo', res[0])
        this.$store.dispatch('user/setToken', res.login_key)
        this.$store.dispatch('user/setIsShow', res.is_show)
        this.wxGetUserInfo()
      } else {
        this.wxLogin()
      }
    },
    wxGetUserInfo() {
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                console.log(res)
                this.$store.dispatch('user/setUserInfo', res.userInfo)
                this.$common.gotoPage('/pages/product', 'isTab')
              },
              fail: res => {
                console.log('fail', res)
              },
            })
          } else {
            this.$common.gotoPage('/pages/auth')
          }
        },
      })
    },
    wxLogin() {
      wx.login({
        success: res => {
          if (res.code) {
            this.code = res.code
            // if (this.autoLoginRs) {
              this.userAutoLogin()
            // }
          } else {
            this.$common.showToast('获取登陆状态失败!')
          }
        },
        fail: res => {
          console.log(res)
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../static/css/variables';
.login-body {
  position: relative;
  padding-top: 80px;
  height: 100vh;
  .logo {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    margin-top: 16px;
    text-align: center;
    font-size: $h3-font-size;
    color: $base-font-color;
  }
  .btns {
    margin-top: 80px;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 272px;
      height: 48px;
      text-align: center;
      border-radius: 24px;
      margin: 0 auto;
      .wx-logo {
        display: inline-block;
        vertical-align: middle;
        width: 23px;
        height: 19px;
        margin-right: 8px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAmCAMAAACMNFloAAABLFBMVEUAAAD////////////////////////////////////////////////////////////+//7////////////////////////////////////////////+//7////////////+//73/ffq+er////////////////////////////+//7////////////////////////////9//3////////////////////////u+u7////////////////////+//7////////w+/D9//3k9+T////////8/vz////W89b////v+u/7/vv////r+ev////////y+/Lp+One9t7+//75/fn////+//75/fn3/ff3/ff2/Pbx+/Hx+/H1/fXn+OfW89bp+ene9d7///8GIqjYAAAAY3RSTlMA/dTe8vD76tvLv3Mv7eSeaVZEQBAHxsGpXlpMSTslEg0KAvz59NfIvLCtrKekmZCNhHpuTysgHBoF9ubi4bm1k3VuZlo9NSMVE82inop1cGFZQS0D7+Pg3NjTxqWNcmljRTaJCqnsAAACOklEQVQ4y42U13ajMBBAxxQXMDbg3kvce69xr+nJJtv78v//sIBwYgzy7n3RnNE9MNLoDLxy9RyuT/M50n5dcLOewRDOkYzefBlnJUSGIwtsL42335UmFkkHnX9IYGTf/WfJCF3cmtv1C8kUIgJGUnUJx2XUqLfUHcodntMHzd4OMWqQ2xpO+VHdcO/BV9VsmwDgGathca+3vUGk8HK8ONSckPOEGlp4vS5eIqUSh0FJ07nHNERsKGb6Or05QmmqzFap19qbi7yyXlA04dHpMwmHa9ZohzsdfbMcuDusewb7eEyMdESn9023m9vBLnQfKgRnlS5owv3zGTQIM5m6h/6d67i/C+3EBRP7/S+InvzVEoipes1qsLPL9JIyZElB0R85w0Y1yVslI2RH1nsBwzuMRVGLaJsFFcKhx+RwArws6ZMq5/Epel7tp1lGSTCh1Vc1U/MCXN3q9UlIoNSONgF+5+RgxAOsUTlKh3eMTmfEGvpLLZFau5SglUr+UFOjJsg4dZ0tb/wo4IrfPqnBh2pF68EUFOLBo5twx0gJB6HNmJsjfWPD6iQgvr+lKiL+6w5k9/JyLwtlh/Jdf9iPsy1lpPPWTGnl7MUEnm09/bnF6RSLBs2cae/gQDpkxejXTjRpomjV2GGqsbbM5+w6a6oHB2DK8M7M9ncBQ6qRMdiBLWAZsuSpHYdzeIKkbuI34DxJscEQk7HNZXeUii4p4IV/4Es4I6GVsOknvYLDHoH/IP2C1i4b9snLXyJ/btu/nwSZAAAAAElFTkSuQmCC");
        background-size: 100% auto;
        background-repeat: no-repeat;
      }
      &:not(:first-child) {
        margin-top: 24px;
      }
      &.wx-btn {
        background: #45bb44;
        color: $white-color;
      }
    //   &.mb-btn {
    //     color: rgba($base-color, 0.6);
    //     border: 1px solid $border-color;
    //   }
    }
  }
  .rules {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    .rules-p {
      text-align: center;
      color: $base-font-color3;
      line-height: 1.4;
    }
    .rule-link {
      color: #576b94;
    }
  }
}
</style>