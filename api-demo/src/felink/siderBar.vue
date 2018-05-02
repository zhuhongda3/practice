<template>
   <div class="sidebar">
        <div class="title">
            <p>felink</p>
        </div>
        <ul class="list-item">
            <li class="link" v-for="(item,index) in itemList" :key="index" @click="srollItem"><a :href="'#modal-'+(parseInt(index)+1)">{{item.linkName}}</a></li> 
        </ul>
    </div>
</template>

<script>
import { siderData } from "@/linkMock"; 

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
      this.itemList = siderData;
    },
    srollItem(){
      console.log();
    }
    
  },
}
</script>
<style lang="scss" scoped>   
  @import "@/../../assets/scss/global.scss";  
</style>