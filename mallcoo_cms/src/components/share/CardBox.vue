<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{title}}</span>
      <el-button style="float: right;" @click="toggleShow" size="small">{{isShow?'隐藏代码':'显示代码'}}<i v-if="isShow" class="el-icon-caret-top el-icon--right"></i><i v-else class="el-icon-caret-bottom el-icon--right"></i></el-button>
    </div>
    <!-- 内容插槽 -->
    <slot name="content"></slot>

    <!-- 代码插槽 -->
    <el-collapse-transition>
      <div v-show="isShow" v-highlight><pre><code><slot name="code"></slot></code></pre></div>
    </el-collapse-transition>
    
  </el-card>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggleShow(){
      this.isShow = !this.isShow;
    }
  },
};
</script>

<style lang="scss" scoped>
pre,code{
  margin:0;
  font-size: 14px;
}
</style>

