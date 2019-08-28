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
          :price="item.Price"
          :origin-price="item.OriginPrice"
          :desc="item.Desc"
          :title="item.Title"
          :thumb="item.ImageUrl"
          lazy-load="true"
          centered="true"
        >
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
import { test } from "@/api/api";
export default {
  data() {
    return {
      list: [],
      loadtip: "",
      searchData: {
        status: '',
        PageIndex: 1,
        PageSize: 10,
        isOVer: false
      }
    };
  },
  onLoad() {
    this.searchData.status = this.$route.query.status
    this.setPageTitle();
    this.getDataMock(true);
    // this.getData(true);
  },
  async onPullDownRefresh(){
    this.list = [];
    this.getDataMock(true);
    wx.stopPullDownRefresh();
  },
  onReachBottom() {
    this.getDataMock(false);
    // this.getData(false);
  },
  methods: {
    setPageTitle(){
      let status = this.searchData.status,title = '';
      if(status == 0){
        this.searchData.status = ''
        title = '全部订单'
      }else if(status == 1){
        title = '待发货订单'
      }else if(status == 2){
        title = '已发货订单'
      }else if(status == 3){
        title = '已完成订单'
      }
      console.log(title)
      wx.setNavigationBarTitle({
        title: title
      })
    },
    getDataMock(first) {
      let arr = [];
      for (var i = 0; i < 10; i++) {
        arr.push({
          ID: i,
          Title: "这是一段主标题" + i,
          Desc: "这是一段描述" + i,
          Num: 100,
          Price: 2.00,
          OriginPrice: 3.00,
          ImageUrl: "https://img.yzcdn.cn/vant/t-thirt.jpg"
        });
      }
      setTimeout(() => {
        this.loadtip = "正在加载中";
        if (first) {
          if (arr.length == 0) {
            this.loadtip = "暂无数据";
          }
          this.list = this.list.concat(arr);
        } else {
          if (this.list.length > 30) {
            this.searchData.isOVer = true;
            this.loadtip = "以上为全部";
            return;
          }
          this.list = this.list.concat(arr);
        }
      }, 500);
    },
    async getData(first) {
      if (first) {
        this.searchData.PageIndex = 1;
        this.searchData.isOVer = false;
        this.list = [];
      }
      if (this.searchData.isOVer) return;
      this.loadtip = "正在加载中";
      let { isOVer, ...param } = this.searchData;
      let res = await test(this.searchData);
      if (res.Code == 1) {
        this.list = this.list.concat(res.Data);
        if (this.searchData.PageIndex == 1 && this.list.length == 0) {
          this.loadtip = "暂无数据";
        }
        this.searchData.PageIndex++;
        if (res.Data.length < this.searchData.PageSize) {
          this.searchData.isOVer = true;
          this.loadtip = "以上为全部";
        }
      } else {
        this.loadtip = "暂无数据";
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>