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
    <div class="ac-title" v-if="list1.length>0">活动商品,火热抢购中！</div>
    <div class="product-list">
      <div
        class="product-item"
        v-for="(item,index) in list1"
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
          <div slot="footer">
            <div
              class="rob-btn"
              :data-item="item"
              @click="addToCart"
            >立即抢</div>
          </div>
        </van-card>
      </div>
      <!-- <div
        class="loadtip"
        v-if="loadtip"
      ><span class="loadtip-text">{{loadtip}} </span>
        <van-loading
          v-if="!searchData.isOVer"
          size="15px"
          color="#aaa"
        ></van-loading>
      </div> -->
    </div>

    <div class="ac-title" v-if="list2.length>0">非活动商品</div>
    <div class="product-list">
      <div
        class="product-item"
        v-for="(item,index) in list2"
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
          :price="selectProduct.Price"
          :origin-price="selectProduct.OriginPrice"
          :desc="selectProduct.Desc"
          :title="selectProduct.Title"
          :thumb="selectProduct.ImageUrl"
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
import { test } from "@/api/api";
export default {
  data() {
    return {
      swiperData: [
        "http://iph.href.lu/750x300?bg=000",
        "http://iph.href.lu/750x300"
      ],
      list1: [],
      list2: [],
      loadtip: "",
      show: false,
      selectProduct: {},
      searchData: {
        PageIndex: 1,
        PageSize: 10,
        isOVer: false
      }
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
    addToCart(e) {
      let dataset = e.currentTarget.dataset,
        item = dataset.item;
      this.selectProduct = item;
      this.selectProduct.addNum = 0;
      this.show = true;
    },
    onClose() {
      this.show = false;
    },
    confirmAddToCart() {
      this.$common.gotoPage("/pages/cart", "isTab");
    },
    confirmPay() {
      console.log("confirmPay");
    },
    onChange(e) {
      this.selectProduct.addNum = e.mp.detail;
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
          this.list1 = this.list1.concat(arr);
          this.list2 = this.list2.concat(arr);
        } else {
          if (this.list2.length > 30) {
            this.searchData.isOVer = true;
            this.loadtip = "以上为全部";
            return;
          }
          this.list2 = this.list2.concat(arr);
        }
      }, 500);
    },
    async getData(first) {
      if (first) {
        this.searchData.PageIndex = 1;
        this.searchData.isOVer = false;
        this.list2 = [];
      }
      if (this.searchData.isOVer) return;
      this.loadtip = "正在加载中";
      let { isOVer, ...param } = this.searchData;
      let res = await test(this.searchData);
      if (res.Code == 1) {
        this.list2 = this.list2.concat(res.Data);
        if (this.searchData.PageIndex == 1 && this.list2.length == 0) {
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