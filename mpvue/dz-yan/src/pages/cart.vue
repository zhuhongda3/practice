<template>
  <div class="cart-body g-pb60">
    <div class="product-list">
      <div
        class="product-item"
        v-for="(item,index) in list"
        :key="index"
      >
        <van-swipe-cell
          id="swipe-cell"
          :data-index="index"
          right-width="65"
          left-width="65"
          async-close
          @close="onClose"
        >
          <div slot="left">选择</div>
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
            <div slot="footer">
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
          </van-card>
          <div slot="right">删除</div>
        </van-swipe-cell>

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
    <van-submit-bar
      :price="totalPrice"
      button-text="去下单"
      @submit="creatOrder"
      :tip="hasTip"
    >
      <!-- decimal-length="0" -->
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
import { test } from "@/api/api";

export default {
  data() {
    return {
      list: [],
      loadtip: "",
      searchData: {
        PageIndex: 1,
        PageSize: 10,
        isOVer: false
      },
      totalPrice: 0,
      hasTip: false,
      isCheckAll: false
    };
  },
  onLoad() {
    this.getDataMock(true);
    // this.getData(true);
  },
  onReachBottom() {
    this.getDataMock(false);
    // this.getData(false);
  },
  methods: {
    creatOrder() {
      console.log("creatOrder");
    },
    delProduct() {
      console.log("delProduct");
    },
    toggleCheckAll() {
      this.isCheckAll = !this.isCheckAll;
      let price = 0;
      if (this.isCheckAll) {
        this.list.forEach(item => {
          price += item.addNum * item.Price;
        });
      } else {
        price = 0;
      }
      this.totalPrice = price * 100;
    },
    onClose(event) {
      const { position, instance } = event.mp.detail;
      switch (position) {
        case "left":
        case "cell":
          instance.close();
          break;
        case "right":
          this.$common.showModal(
            "",
            "确定删除吗？",
            true,
            "取消",
            "确认",
            () => {
              instance.close();
              console.log("confirm");
              console.log(event);
              this.list.splice(event.currentTarget.dataset.index, 1);
              instance.close();
            },
            () => {
              instance.close();
            }
          );
          // Dialog.confirm({
          //   message: "确定删除吗？"
          // }).then(() => {
          //   instance.close();
          // });
          break;
      }
    },
    onChange(e) {
      this.list[e.currentTarget.dataset.index].addNum = e.mp.detail;
    },
    getDataMock(first) {
      let arr = [];
      for (var i = 0; i < 10; i++) {
        arr.push({
          ID: i,
          Title: "这是一段主标题" + i,
          Desc: "这是一段描述" + i,
          Num: 100,
          addNum: 2,
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
          if (this.list.length > 10) {
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
  padding: 0 10px;
  display: flex;
  align-items: center;
}
</style>