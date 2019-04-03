<template>
  <div>
    <card-box title="整页加载">
      <template slot="content">
        <el-button
         type="primary"
         @click="openFullScreen"
         v-loading.fullscreen.lock="fullscreenLoading">
         指令方式
        </el-button>

        <el-button
         type="primary"
         @click="openFullScreen2">
         服务方式
        </el-button>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

     <card-box title="区域加载">
      <template slot="content">
        <el-table
          v-loading="loading"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="180">
          </el-table-column>
        </el-table>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="自定义加载样式">
      <template slot="content">
        <el-table
          v-loading="loading2"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0,0,0,0.8)"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="180">
          </el-table-column>
        </el-table>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import loading_md_1 from '@/md/loading_md_1.md';
import loading_md_2 from '@/md/loading_md_2.md';
import loading_md_3 from '@/md/loading_md_3.md';

export default {
  data(){
    return {
      code1: loading_md_1,
      code2: loading_md_2,
      code3: loading_md_3,
      fullscreenLoading: false,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      loading: true,
      loading2: true,
    };
  },
  methods: {
   openFullScreen(){
     this.fullscreenLoading = true;
     setTimeout(() => {
       this.fullscreenLoading = false;
     },2000);
   },
   openFullScreen2(){
     const loading = this.$loading({
       lock: true,
       text: 'Loading',
       spinner: 'el-icon-loading',
       background: 'rgba(0,0,0,.7)'
     });
     setTimeout(() => {
       loading.close();
     },2000);
   }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>