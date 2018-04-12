export const code1 =
`<template>
  <el-table
  :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
  :default-sort = "{prop: 'id', order: 'descending'}"
  border
  style="width: 100%">
  <el-table-column
    prop="id"
    label="商场id"
    sortable
    width="150">
  </el-table-column>
  <el-table-column
    prop="name"
    width="200"
    :render-header="renderHeader">
  </el-table-column>
  <el-table-column
    prop="address"
    label="地址"
    width="300">
  </el-table-column>
  <el-table-column
    prop="tel"
    label="联系电话"
    width="120">
  </el-table-column>
  <el-table-column
    prop="created"
    label="创建人"
    width="150">
  </el-table-column>
  <el-table-column
    prop="date"
    label="创建日期"
    width="200">
  </el-table-column>
  <el-table-column
    label="状态"
    width="90">
    <template slot-scope="scope">
      <el-tag size="medium" v-if="scope.row.status==='正常'" type="success">{{ scope.row.status }}</el-tag>
      <el-tag size="medium" v-if="scope.row.status==='冻结'" type="warning">{{ scope.row.status }}</el-tag>
      <el-tag size="medium" v-if="scope.row.status==='异常'" type="danger">{{ scope.row.status }}</el-tag>
  </template>
  </el-table-column>
  <el-table-column
    fixed="right"
    label="操作"
    min-width="250">
    <template slot-scope="scope">
      <el-button @click="handleClick(scope.row)" type="text" size="small" icon="el-icon-edit">管理商场</el-button>
      <el-button type="text" size="small" icon="el-icon-edit">编辑</el-button>
      <el-dropdown trigger="click" style="margin-left: 10px;">
        <el-button type="text" size="small">
          更多<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>操作1</el-dropdown-item>
          <el-dropdown-item>操作2</el-dropdown-item>
          <el-dropdown-item divided>操作3</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>
  </el-table-column>
  </el-table>

  <div style="margin-top:10px;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pagesizes"
      :page-size="pagesize"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {data} from '@/mock/tableData';  //模拟数据

export default {
  data(){
    return {
      pagesizes: [10, 20, 30, 40],
      pagesize: 10,
      currentPage: 1,
      total: 0,
      tableData: []
    };
  },
  mounted(){
    this.getList();
  },
  methods: {
    handleClick(row){
      console.log(row);
    },
    handleSizeChange(val){
      this.pagesize = val;
    },
    handleCurrentChange(val){
      this.currentPage = val;
    },
    renderHeader(h) {
      return (
        <div>
          <span>商场名称 </span>
          <el-tooltip placement="bottom">
            <div slot="content">第一行提示信息<br/>第二行提示信息<br/>第三行提示信息</div>
            <i class="el-icon-question"></i>
          </el-tooltip>
        </div>
      )
    },
    getList(){
      this.tableData = data;
      this.total = data.length;
    }
  }
}
</script>
`;