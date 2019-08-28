<template>
  <div class="cart-body g-pb60">
    <div class="product-list">
      <div
        class="product-item"
        v-for="(item,index) in list"
        :key="index"
      >
        <van-swipe-cell
          :data-index="index"
          right-width="65"
          async-close
          @close="onClose"
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
              <van-checkbox
                :value="item.selected"
                checked-color="#07c160"
                :data-index="index"
                @change="toggleCheckOne"
              ></van-checkbox>
              <div class="cus-plus-btn">
                <van-stepper
                  :value="item.addNum"
                  :data-index="index"
                  integer
                  min="1"
                  :max="item.Num"
                  step="1"
                  @change="onChange"
                />
              </div>
            </div>
          </van-card>
          <div slot="right">删除</div>
        </van-swipe-cell>

      </div>
      <div
        class="loadtip"
        v-if="loadtip"
      ><span class="loadtip-text">{{loadtip}} </span>
        <van-loading
          v-if="!isOVer"
          size="15px"
          color="#aaa"
        ></van-loading>
      </div>
    </div>
    <van-submit-bar
      :price="totalPrice"
      :disabled="disabledSubmit"
      button-text="去下单"
      @submit="creatOrder"
      :tip="hasTip"
    >
      <div class="cus-submit-left">
        <div class="cus-submit-check">
          <van-checkbox
            :value="isCheckAll"
            checked-color="#07c160"
            @change="toggleCheckAll"
          >全选</van-checkbox>
        </div><span
          @click="delProduct"
          class="cus-del-btn"
        >删除</span>
      </div>
      <!-- <view slot="tip">
        您的收货地址不支持同城送, <text>修改地址</text>
      </view> -->
    </van-submit-bar>
  </div>
</template>

<script>
import { get_goods_list_api } from '@/api/api'

export default {
  data() {
    return {
      list: [],
      loadtip: '',
      isOVer: false,
      searchData: {
        api_name: 'get_goods_list',
        login_key: '',
        reqtime: '',
        page_size: 10,
        page_num: 1,
        sign: '',
      },
      totalPrice: 0,
      isCheckAll: false,
      hasTip: false,
      disabledSubmit: true,
    }
  },
  onShow() {
    this.resetData()
    this.getDataMock()
    // this.getData()
  },
  async onPullDownRefresh() {
    this.resetData()
    this.getDataMock()
    wx.stopPullDownRefresh()
    // this.getData()
  },
  methods: {
    resetData() {
      this.list = []
      this.isCheckAll = false
      this.totalPrice = 0
    },
    creatOrder() {
      this.disabledSubmit = false
      this.$common.showLoading('正在下单中')
      setTimeout(() => {
        this.$common.showModal(
          '',
          '下单成功',
          false,
          '',
          '知道了',
          () => {
            this.$common.gotoPage('/pages/order?status=1')
          },
          () => {}
        )
        this.$common.hideLoading()
      }, 1500)
    },
    delProduct() {
      let hasSelect = this.list.some(item => item.selected)
      if (hasSelect) {
        this.$common.showModal(
          '',
          '确定删除选中的商品吗？',
          true,
          '取消',
          '确认',
          () => {
            this.list = this.list.filter(item => !item.selected)
            this.calcTotalPrice()
          },
          () => {}
        )
      }
    },
    calcTotalPrice() {
      let price = 0
      this.list.forEach(item => {
        if (item.selected) {
          price += item.addNum * item.goods_price * 100
        }
      })
      this.totalPrice = price
      this.disabledSubmit = !this.list.some(item => item.selected)
      this.isCheckAll = this.list.length> 0 ? this.list.every(item => item.selected): false
    },
    toggleCheckOne(e) {
      let i = e.currentTarget.dataset.index
      this.list[i].selected = !this.list[i].selected
      this.isCheckAll = this.list.every(item => item.selected)
      this.calcTotalPrice()
    },
    toggleCheckAll() {
      this.isCheckAll = !this.isCheckAll
      this.list.forEach(item => {
        item.selected = this.isCheckAll
      })
      this.calcTotalPrice()
    },
    onClose(event) {
      const { position, instance } = event.mp.detail
      switch (position) {
        // case 'left':
        case 'cell':
          instance.close()
          break
        case 'right':
          this.$common.showModal(
            '',
            '确定删除选中的商品吗？',
            true,
            '取消',
            '确认',
            () => {
              this.list.splice(event.currentTarget.dataset.index, 1)
              instance.close()
            },
            () => {
              instance.close()
            }
          )
          // Dialog.confirm({
          //   message: "确定删除吗？"
          // }).then(() => {
          //   instance.close();
          // });
          break
      }
    },
    onChange(e) {
      this.list[e.currentTarget.dataset.index].addNum = e.mp.detail
      this.calcTotalPrice()
    },
    getDataMock() {
      this.loadtip = '正在加载中'
      let arr = []
      for (var i = 0; i < 3; i++) {
        arr.push({
          id: i,
          goods_name: '这是一段主标题' + i,
          goods_info: '这是一段描述' + i,
          Num: 100,
          addNum: 2,
          goods_price: 2.0,
          goods_pro_price: 3.0,
          selected: false,
          goods_pic: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4123588406,1666799354&fm=26&gp=0.jpg',
        })
      }
      setTimeout(() => {
        // this.searchData.isOVer = true
        this.loadtip = '以上为全部'
        this.isOVer = true
        this.list = this.list.concat(arr)
      }, 500)
    },
    async getData() {
      this.loadtip = '正在加载中'
      let param = this.searchData
      param.reqtime = Date.now()
      param.sign = this.$common.signCreate(['api_name', 'login_key', 'page_num', 'page_size', 'reqtime'], param)
      let res = await get_goods_list_api(param)

      if (res.data == 1) {
        this.list = this.list.concat(res.data)
        if (this.list.length == 0) {
          this.loadtip = '暂无数据'
          this.isOVer = true
        }else{
          this.loadtip = '以上为全部'
          this.isOVer = true
        }
      } else {
        this.loadtip = '暂无数据'
        this.isOVer = true
      }
    },
  },
}
</script>

<style lang="scss">
.van-swipe-cell__left,
.van-swipe-cell__right {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  font-size: 15px;
  color: #fff;
}
.van-swipe-cell__right{
  background-color: #f44;
  border: 1px solid #f44;
}
.van-swipe-cell__left{
  background-color: #07c160;
  border: 1px solid #07c160;
}
.cus-submit-check{
  display: inline-block;
}
.cus-del-btn{
  display: inline-block;
  color: #f44;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px;
}
.cus-submit-left{
  padding-left: 14px;
  display: flex;
  align-items: center;
}
.cus-slot-footer{
  display: flex;
  align-items: center;
}
.cus-plus-btn{
  flex: 1;
  min-width: 0;
}
</style>