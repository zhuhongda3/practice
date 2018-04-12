export const code1 =
`<template>
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
`;
export const code2 =
`<template>
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

<script>
export default {
  data(){
    return {
      currentPage1: 2,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log('每页 '+val+' 条');
    },
    handleCurrentChange(val) {
      console.log('当前页' + val);
    }
  }
}
</script>
`;