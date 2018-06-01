<template>
  <div>
    <card-box title="图标集合" toggle="false">
      <template slot="content">
        <ul>
          <li v-for="(item,index) in itemList" :key="index" title="点击复制" @click="handleCopy(item,$event)">
            <span><i :class="item"></i></span>
            <p>{{item}}</p>
          </li>
        </ul>
      </template>
      <template slot="code"></template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import clip from '@/utils/clipboard';

export default {
  data(){
    return {
      itemList: ["el-icon-info", "el-icon-error", "el-icon-success", "el-icon-warning", "el-icon-question", "el-icon-back", "el-icon-arrow-left", "el-icon-arrow-down", "el-icon-arrow-right", "el-icon-arrow-up", "el-icon-caret-left", "el-icon-caret-bottom", "el-icon-caret-top", "el-icon-caret-right", "el-icon-d-arrow-left", "el-icon-d-arrow-right", "el-icon-minus", "el-icon-plus", "el-icon-remove", "el-icon-circle-plus", "el-icon-remove-outline", "el-icon-circle-plus-outline", "el-icon-close", "el-icon-check", "el-icon-circle-close", "el-icon-circle-check", "el-icon-circle-close-outline", "el-icon-circle-check-outline", "el-icon-zoom-out", "el-icon-zoom-in", "el-icon-d-caret", "el-icon-sort", "el-icon-sort-down", "el-icon-sort-up", "el-icon-tickets", "el-icon-document", "el-icon-goods", "el-icon-sold-out", "el-icon-news", "el-icon-message", "el-icon-date", "el-icon-printer", "el-icon-time", "el-icon-bell", "el-icon-mobile-phone", "el-icon-service", "el-icon-view", "el-icon-menu", "el-icon-more", "el-icon-more-outline", "el-icon-star-on", "el-icon-star-off", "el-icon-location", "el-icon-location-outline", "el-icon-phone", "el-icon-phone-outline", "el-icon-picture", "el-icon-picture-outline", "el-icon-delete", "el-icon-search", "el-icon-edit", "el-icon-edit-outline", "el-icon-rank", "el-icon-refresh", "el-icon-share", "el-icon-setting", "el-icon-upload", "el-icon-upload2", "el-icon-download", "el-icon-loading"]
    };
  },
  methods:{
    handleCopy(text, event){
      var content= `<i class="${text}"></i>`
      clip(content,event);
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
table{
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  td,th{
    border: 1px solid #999;
    padding: 10px;
    text-align: center;
  }
  tr{
    td{
      &:nth-child(2){
        text-align: left;
        padding-left: 20px;
        color: #666;
        font-size: 13px;
      }
    }
  }
  i{
    font-size: 18px;
  }
}
ul{
  list-style: none;
  font-size: 0;
  li{ 
    display: inline-block;
    padding: 20px;
    margin-right: 5px;
    margin-bottom: 5px;
    width: 190px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #f4f4f4;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
      border-color: #409EFF;
    }
    i{
      font-size: 18px;
    }
  }
}
</style>
