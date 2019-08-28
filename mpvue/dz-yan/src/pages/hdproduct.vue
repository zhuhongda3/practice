<template>
  <div>
    <div class="product-ad">
      <swiper class="ad-swiper-container">
        <swiper-item
          class="ad-swiper-item"
          v-for="(item,index) in swiperData"
          :key="index"
          interval="3000"
          indicator-dots="true"
          circular="true"
          autoplay="true"
        >
          <img
            :src="item"
            mode="widthFix"
            class="ad-img"
          >
        </swiper-item>
      </swiper>
    </div>

    <div
      class="ac-title"
      v-if="list.length>0"
    >活动商品,火热抢购中！</div>
    <div class="product-list">
      <div
        class="product-item"
        v-for="(item,index) in list"
        :key="index"
      >
        <van-card
          :num="item.Num"
          :price="item.goods_price"
          :origin-price="item.goods_pro_price"
          :desc="item.goods_info"
          :title="item.goods_name"
          :thumb="item.goods_pic"
          lazy-load="true"
          centered="true"
        >
          <div slot="footer">
            <div
              class="add-btn"
              :data-item="item"
              @click="addToCart"
            ><span class="iconfont icon-shopping"></span></div>
          </div>
        </van-card>
      </div>
      <div
        class="loadtip"
        v-if="loadtip"
      ><span class="loadtip-text">{{loadtip}} </span>
        <van-loading
          v-if="!searchData.isOVer"
          size="15px"
          color="#aaa"
        ></van-loading>
      </div>
    </div>

    <van-popup
      :show="show"
      position="bottom"
      @touchmove.stop
      @close="onClose"
    >
      <div class="product-popup-content">
        <van-card
          :num="selectProduct.Num"
          :price="selectProduct.goods_price"
          :origin-price="selectProduct.goods_pro_price"
          :desc="selectProduct.goods_info"
          :title="selectProduct.goods_name"
          :thumb="selectProduct.goods_pic"
          lazy-load="true"
          centered="true"
        >
          <div slot="footer">
            <van-stepper
              :value="selectProduct.addNum"
              integer
              min="1"
              :max="selectProduct.Num"
              step="1"
              @change="onChange"
            />
          </div>
        </van-card>
      </div>
      <van-goods-action>
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          @click="confirmAddToCart"
        />
        <van-goods-action-button
          text="立即购买"
          @click="confirmPay"
        />
      </van-goods-action>
    </van-popup>

  </div>
</template>

<script>
import { get_goods_list_api, get_seting } from '@/api/api'
export default {
  data() {
    return {
      swiperData: [],
      list: [],
      loadtip: '',
      show: false,
      selectProduct: {},
      bannerData: {
        api_name: 'get_seting',
        login_key: '',
        reqtime: '',
      },
      searchData: {
        api_name: 'get_goods_list',
        login_key: '',
        reqtime: '',
        page_size: 10,
        page_num: 1,
        sign: '',
        isOVer: false,
      },
    }
  },
  onLoad() {
    this.searchData.login_key = this.$store.getters.token
    this.bannerData.login_key = this.$store.getters.token
    // this.getDataMock(true)
    this.getSwiperData()
    this.getData(true)
  },
  async onPullDownRefresh() {
   // this.getDataMock(true)
    this.getSwiperData()
    this.getDataMock(true)
    wx.stopPullDownRefresh()
  },
  onReachBottom() {
    // this.getDataMock(false)
    this.getData(false)
  },
  methods: {
    async getSwiperData() {
      let mockData = ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=701870954,224952668&fm=26&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1390708536,2234352630&fm=11&gp=0.jpg']
      this.bannerData.reqtime = Date.now()
      this.bannerData.sign = this.$common.signCreate(['api_name', 'login_key', 'reqtime'], this.bannerData)
      let res = await get_seting(this.bannerData)
      console.log('getSwiperData',res)
      if(res.return_code == 200){
        this.swiperData = res.data || mockData
      }
    },
    addToCart(e) {
      let dataset = e.currentTarget.dataset,
        item = dataset.item
      this.selectProduct = item
      this.selectProduct.addNum = 0
      this.show = true
    },
    onClose() {
      this.show = false
    },
    confirmAddToCart() {
      this.$common.gotoPage('/pages/cart', 'isTab')
    },
    confirmPay() {
      console.log('confirmPay')
    },
    onChange(e) {
      this.selectProduct.addNum = e.mp.detail
    },
    // getDataMock(first) {
    //   let arr = []
    //   for (var i = 0; i < 10; i++) {
    //     arr.push({
    //       ID: i,
    //       Title: '这是一段主标题' + i,
    //       Desc: '这是一段描述' + i,
    //       Num: 100,
    //       Price: 2.0,
    //       OriginPrice: 3.0,
    //       ImageUrl: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
    //     })
    //   }
    //   setTimeout(() => {
    //     this.loadtip = '正在加载中'
    //     if (first) {
    //       if (arr.length == 0) {
    //         this.loadtip = '暂无数据'
    //       }
    //       this.list1 = this.list1.concat(arr)
    //       this.list = this.list.concat(arr)
    //     } else {
    //       if (this.list.length > 30) {
    //         this.searchData.isOVer = true
    //         this.loadtip = '以上为全部'
    //         return
    //       }
    //       this.list = this.list.concat(arr)
    //     }
    //   }, 500)
    // },
    async getData(first) {
      if (first) {
        this.searchData.page_num = 1
        this.searchData.isOVer = false
        this.list = []
      }
      if (this.searchData.isOVer) return
      this.loadtip = '正在加载中'
      let { isOVer, ...param } = this.searchData

      param.reqtime = Date.now()
      param.sign = this.$common.signCreate(['api_name', 'login_key', 'page_num', 'page_size', 'reqtime'], param)

      let res = await get_goods_list_api(param)

      if (res.return_code == 200) {
         res.data.forEach(item => {
          item.goods_pic = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4123588406,1666799354&fm=26&gp=0.jpg'
          item.Num =  100
        })
        this.list = this.list.concat(res.data)
        if (this.searchData.page_num == 1 && this.list.length == 0) {
          this.loadtip = '暂无数据'
        }
        this.searchData.page_num++
        if (res.data.length < this.searchData.page_size) {
          this.searchData.isOVer = true
          this.loadtip = '以上为全部'
        }
      } else {
        this.loadtip = '暂无数据'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ad-swiper-container{
  height: 150px;
  .ad-img{
    width: 100%;
    height: auto;
  }
  .wx-swiper-dot {
    width: 4px;
    height: 4px;
    background: rgba(#fff,.4);
  }
  .wx-swiper-dot-active {
    background: #fff;
  }
}
.add-btn{
  display: inline-block;
  padding: 10px 0;
  .icon-shopping{
    color: #666;
  }
}
.ac-title{
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
}
.rob-btn{
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  background: #f44;
}
.product-popup-content{
  padding-bottom: 80px;
  background: #fafafa;
}
</style>