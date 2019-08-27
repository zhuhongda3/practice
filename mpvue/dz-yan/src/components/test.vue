<template>
  <div :style="bodyStyle">
    <custom-header :title="title"></custom-header>
    <div class="consult-list">
      <div
        class="consult-item"
        v-for="(item,index) in list"
        :key="index"
        :data-url="'/pages/user/myjob/legaladvice/detail/index?ConsultID='+item.ConsultID+'&ID='+item.ID"
        @click="gotoPage"
      >
        <div class="user-avatar">
          <img class="img" :src="item.ConsultHeadPicUrl" alt />
          <span class="num" v-if="!item.IsRead"></span>
        </div>
        <div class="consult-inner">
          <div class="title">
            <p class="name">{{item.ConsultName}}</p>
            <span class="time">{{item.LastConsultTime}}</span>
          </div>
          <div class="desc">{{item.MsgContent.MsgType == 0?item.MsgContent.Content:'[语音]'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader";
import { getConsultPageList } from "@/api/api";
import { mixins } from "@/utils/mixins";

export default {
  mixins: [mixins],
  components: {
    CustomHeader
  },
  data() {
    return {
      title: "法律咨询",
      list: [],
      isOVer: false,
      searchData: {
        PageSize: 10,
        PageIndex: 1,
      }
    };
  },
  onShow() {
    this.getData(true);
  },
  methods: {
    async getData(first) {
      if (first) {
        this.searchData.PageIndex = 1;
        this.isOVer = false;
        this.list = [];
      }
      if (this.isOVer) return;
      let res = await getConsultPageList(this.searchData);
      if (res.Code == 1) {
        res.Data.forEach((item)=>{
          item.LastConsultTime = this.$common.formatConsultTime(item.LastConsultTime)
        })
        this.list = this.list.concat(res.Data);
        this.searchData.PageIndex++;
        if (res.Data.length < this.searchData.PageSize) {
          this.isOVer = true;
        }
      }
    }
  },
  onReachBottom() {
    this.getData(false);
  }
};
</script>

<style lang="scss" scoped>
@import "./static/css/base/variables";
.consult-list {
  .consult-item {
    display: flex;
    align-items: center;
    padding: 0  15px;
    background: $block-bg-white;
  }
  .user-avatar {
    position: relative;
    width: 48px;
    height: 48px;
    margin-right: 16px;
    .img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .num {
      position: absolute;
      top: 0;
      left: 66%;
      z-index: 2;
      // padding: 4rpx 10rpx;
      // color: $white-color;
      // line-height: 1;
      // background: #ff3b30;
      // border-radius: 20rpx;
      width: 9px;
      height: 9px;
      background: #ff3b30;
      border-radius: 50%;
    }
  }
  .consult-inner {
    position: relative;
    flex: 1;
    min-width: 0;
    padding: 20px 0;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      border-top: 1px solid $border-color;
      transform: scaleY(.5);
    }
    .title {
      display: flex;
      align-items: center;
      .name {
        @include ellipsis(1);
        flex: 1;
        min-width: 0;
        font-size: 17px;
      }
      .time {
        @include ellipsis(1);
        color: rgba($base-color, .3);
      }
    }
    .desc {
      @include ellipsis(1);
      margin-top: 8px;
      color: $base-font-color2;
      font-size: $h4-font-size;
    }
  }
}
</style>