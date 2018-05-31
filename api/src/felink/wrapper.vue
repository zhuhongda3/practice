<template>
  <div class="link-nav">
    <div class="link-list" >
        <div class="link-item" v-for="(item,index) in itemList" :key="index" :id="item.id">
            <div class="box-name"><i></i>{{item.linkName}}</div>
            <div class="item" v-for="(item1,index1) in item.itemWrap" :key="index1">
                <img :src="item1.imgUrl" alt="">
                <span>{{item1.itemName}}</span>
                <a v-for="(item2,index2) in item1.linkWrap" :key="index2" :href="item2.linkUrl" target="_blank">{{item2.linkType}}</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mainData } from "@/linkMock"; 

export default {
  data () {
    return {
      itemList:{}
    }
  },
  mounted: function() {
    this.getData();
  },
  methods:{
    getData(){
      this.itemList = mainData;
    }
  },
}
</script>
<style lang="scss" scoped>   
  @import "@/../../assets/scss/global.scss";
</style>
