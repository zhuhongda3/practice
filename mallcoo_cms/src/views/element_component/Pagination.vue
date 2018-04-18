<template>
  <div>
    <card-box title="显示总数">
      <template slot="content">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="20"
          background
          layout="total, prev, pager, next"
          :total="2000">
        </el-pagination>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="完整功能">
      <template slot="content">
         <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage2"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import pagination_md_1 from '@/md/pagination_md_1.md';
import pagination_md_2 from '@/md/pagination_md_2.md';

export default {
  data(){
    return {
      code1: pagination_md_1,
      code2: pagination_md_2,
      currentPage1: 1,
      currentPage2: 1,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>