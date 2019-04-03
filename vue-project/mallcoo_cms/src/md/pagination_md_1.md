```
<template>
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage1"
    :page-size="20"
    background
    layout="total, prev, pager, next"
    :total="2000">
  </el-pagination>
</template>

<script>
export default {
  data(){
    return {
      currentPage1: 1,
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log('当前页' + val);
    }
  }
}
</script>
```