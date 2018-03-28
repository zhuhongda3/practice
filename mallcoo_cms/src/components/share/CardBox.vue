<template>
<el-row>
  <el-col :span="20" :offset="2">
    <el-card>
      <div slot="header" class="clearfix">
        <div class="card-title" style="float: left;">{{title}}</div>
        <el-button style="float: right;" @click="isShow = !isShow" size="small">{{isShow?'隐藏代码':'显示代码'}}<i v-if="isShow" class="el-icon-caret-top el-icon--right"></i><i v-else class="el-icon-caret-bottom el-icon--right"></i></el-button>
      </div>
      <!-- 内容插槽 -->
      <div>
        <h3 class="title">内容</h3>
        <slot name="content"></slot>
      </div>
      <!-- 代码插槽 -->
      <div>
        <el-collapse-transition>
          <div v-show="isShow">
            <h3 class="title">代码</h3>
            <div v-highlight><pre><code><slot name="code"></slot></code></pre></div>
          </div>
        </el-collapse-transition>
      </div>
    </el-card>
  </el-col>
</el-row>
  
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
pre,
code {
  margin: 0;
  font-size: 14px;
}
.title{
  font-weight: normal;
  font-size: 16px;
  color: #b4a078;
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

