<template>
<el-row>
  <el-col :span="24">
    <el-card>
      <div slot="header" class="clearfix">
        <div class="card-title" style="float: left;">{{title}}</div>
        <el-button v-if="!toggle" style="float: right;" @click="isShow = !isShow" size="small">{{isShow?'隐藏代码':'显示代码'}}<i v-if="isShow" class="el-icon-caret-top el-icon--right"></i><i v-else class="el-icon-caret-bottom el-icon--right"></i></el-button>
      </div>
      <!-- 内容插槽 -->
      <slot name="content"></slot>
      <!-- 代码插槽 -->
      <el-collapse-transition>
        <div v-show="isShow">
          <vue-markdown v-highlight><slot name="code"></slot></vue-markdown>
        </div>
      </el-collapse-transition>
    </el-card>
  </el-col>
</el-row>
  
</template>

<script>
import VueMarkdown from 'vue-markdown';


export default {
  props: ["title","toggle"],
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    
  },
  components:{
    VueMarkdown
  }
};
</script>

<style lang="scss" scoped>
pre,
code {
  margin: 0;
  font-size: 14px;
}
.card-title{
  padding-top: 6px;
}
.el-row{
  &:not(:last-child){
    margin-bottom: 20px;
  }
}
</style>

