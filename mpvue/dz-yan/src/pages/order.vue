<template>
  <div>
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
          <div
            class="cus-slot-footer"
            slot="footer"
          >
            <div class="cus-slot-text">{{item.statusText}}</div>
            <van-button
              @click="confirmOrder"
              v-if="item.status == 2"
              type="primary"
              size="mini"
              :data-ordercode="item.order_code"
              class="cus-slot-btn"
            >确认收货</van-button>
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
  </div>
</template>

<script>
import { get_goods_list_api } from '@/api/api'
export default {
  data() {
    return {
      list: [],
      loadtip: '',
      searchData: {
        status: '',
        page_num: 1,
        page_size: 10,
        isOVer: false,
      },
    }
  },
  onLoad() {
    this.searchData.status = this.$route.query.status
    this.setPageTitle()
    this.getDataMock(true)
    // this.getData(true);
  },
  async onPullDownRefresh() {
    this.list = []
    this.getDataMock(true)
    wx.stopPullDownRefresh()
  },
  onReachBottom() {
    this.getDataMock(false)
    // this.getData(false);
  },
  methods: {
    confirmOrder(e) {
      this.$common.showModal('', '确定订单？', true, '取消', '确认', () => {
        this.closeOrder(e)
      }, () => {})
    },
    async closeOrder(e) {
      let ordercode = e.mp.currentTarget.dataset.ordercode
      let d = {
        api_name: 'get_goods_list',
        order_id: ordercode,
        reqtime: Date.now(),
        login_key: this.$store.getters.token,
      }
      d.sign = this.$common.signCreate(['api_name', 'login_key', 'order_id', 'reqtime'], d)
      let res = await get_goods_list_api(d)
      if (res.return_code == 200) {
        this.$common.showToast('确认订单成功')
      }
    },
    setPageTitle() {
      let status = this.searchData.status,
        title = ''
      if (status == 0) {
        this.searchData.status = ''
        title = '全部订单'
      } else if (status == 1) {
        title = '待发货订单'
      } else if (status == 2) {
        title = '已发货订单'
      } else if (status == 3) {
        title = '已完成订单'
      }
      console.log(title)
      wx.setNavigationBarTitle({
        title: title,
      })
    },
    getStatusText(status) {
      let str = ''
      switch (status) {
        case '1':
          str = '待发货'
          break
        case '2':
          str = '已发货'
          break
        case '3':
          str = '已完成'
          break
        default:
          break
      }
      return str
    },
    getDataMock(first) {
      let arr = []
      for (var i = 0; i < 10; i++) {
        arr.push({
          id: i,
          order_code: i,
          goods_name: '这是一段主标题' + i,
          goods_info: '这是一段描述' + i,
          Num: 100,
          goods_price: 2.0,
          goods_pro_price: 3.0,
          goods_pic: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4123588406,1666799354&fm=26&gp=0.jpg',
          status: this.searchData.status,
          statusText: this.getStatusText(this.searchData.status),
        })
      }
      setTimeout(() => {
        this.loadtip = '正在加载中'
        if (first) {
          if (arr.length == 0) {
            this.loadtip = '暂无数据'
          }
          this.list = this.list.concat(arr)
        } else {
          if (this.list.length > 30) {
            this.searchData.isOVer = true
            this.loadtip = '以上为全部'
            return
          }
          this.list = this.list.concat(arr)
        }
      }, 500)
    },
    async getData(first) {
      if (first) {
        this.searchData.page_num = 1
        this.searchData.isOVer = false
        this.list = []
      }
      if (this.searchData.isOVer) return
      this.loadtip = '正在加载中'
      let { isOVer, ...param } = this.searchData
      let res = await get_goods_list_api(this.searchData)
      if (res.Code == 1) {
        this.list = this.list.concat(res.Data)
        if (this.searchData.page_num == 1 && this.list.length == 0) {
          this.loadtip = '暂无数据'
        }
        this.searchData.page_num++
        if (res.Data.length < this.searchData.page_size) {
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

</style>