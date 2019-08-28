<template>
  <div class="center-body">
    <div
      class="cus-center-infor"
      :style="'background-image:url('+bgImgUrl+')'"
    >
      <div class="user-avatar">
        <img
          class="img"
          :src="avatarUrl"
        />
      </div>
      <p class="nick-name">{{nickName}}</p>
    </div>

    <div class="cus-center-content">
      <div class="cus-center-cell">
        <van-cell
          title="订单信息"
          value="查看全部订单"
          is-link
          link-type="navigateTo"
          url="/pages/order?status=0"
        ></van-cell>
        <div class="goods-state-list">
          <div
            class="goods-state-item"
            v-for="(item,index) in goodsStateList"
            :key="index"
            :data-url="item.url"
            @click="gotoPage"
          >
            <span :class="item.iconName"></span>
            <p class="state-name">{{item.name}}</p>
          </div>
        </div>
      </div>
      <div class="cus-center-cell">
        <van-cell
          title="门店信息"
          icon="shop-o"
          is-link
          link-type="navigateTo"
          url="/pages/stores"
        ></van-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl: require('../../static/images/avatar.jpg'),
      nickName: '',
      bgImgUrl: '',
      goodsStateList: [
        {
          name: '待发货',
          url: '/pages/order?status=1',
          iconName: 'iconfont icon-shopping',
        },
        {
          name: '待收货',
          url: '/pages/order?status=2',
          iconName: 'iconfont icon-shopping',
        },
        {
          name: '已完成',
          url: '/pages/order?status=3',
          iconName: 'iconfont icon-shopping',
        },
      ],
    }
  },
  onLoad(){
    this.getUserData()
  },
  methods: {
    getUserData(){
      let userinfo = this.$store.getters.userInfo
      if(userinfo.avatarUrl && userinfo.nickName){
        console.log(userinfo)
        console.log(1111111111)
        this.avatarUrl = userinfo.avatarUrl
        this.nickName = userinfo.nickName
      }
    }
  }
}
</script>
<style lang="scss">
page{
  background-color: #f4f4f4;
}
</style>
<style lang="scss" scoped>
  .cus-center-infor{
    display: flex;
    align-items: center;
    height: 150px;
    padding: 0 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #ff9977;
    .user-avatar{
      position: relative;
      width: 60px;
      height: 60px;
      border-radius: 100%;
      overflow: hidden;
      .img{
        width: 100%;
        height: 100%;
      }
    }
    .nick-name{
      flex: 1;
      min-width: 0;
      font-size: 16px;
      font-weight: bold;
      word-break: break-all;
      margin-left: 10px;
      color: #fff;
    }
  }
  // .cus-center-content{
  //   padding: 0 10px;
  // }
 .cus-center-cell{
    margin-bottom: 10px;    
  }
.goods-state-list{
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px 0;
  .goods-state-item{
    flex: 1;
    text-align: center;
    .iconfont{
      font-size: 20px;
      color: #2c2c2c;
    }
    .state-name{
      margin-top: 5px;
    }
  }
}
</style>