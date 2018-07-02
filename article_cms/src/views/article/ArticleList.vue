<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div class="edit-wrap">
    <label class="ps-label" for="">文章列表：</label>
    <div style="padding: 10px 0;">
    <el-table
      :data="tableData"
      border
      style="width: 100%;text-align: left;"
    >
    <el-table-column
      prop="_id"
      label="文章ID"
      width="200"
    ></el-table-column>
    <el-table-column
      prop="title"
      label="文章标题"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="content"
      label="文章内容"
      :formatter="contentFormat"
      width="180"
    ></el-table-column>
    <el-table-column
      label="创建时间"
      width="180"
    >
    <template slot-scope="scope">
      {{ scope.row.createTime | moment("YYYY-MM-DD HH:mm:ss")}}
    </template>
    </el-table-column>
    <el-table-column
      label="更新时间"
      width="180"
    >
    <template slot-scope="scope">
      {{ scope.row.updateTime | moment("YYYY-MM-DD HH:mm:ss")}}
    </template>
    </el-table-column>
    <el-table-column
      label="操作栏"
      width="auto"
    >
     <template slot-scope="scope">
      <el-button
        size="mini"
        @click="handleEdit(scope.row)">编辑</el-button>
      <el-button
        size="mini"
        type="danger"
        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      <el-button
        size="mini"
        type="success"
        @click="handleLook(scope.row)">查看</el-button>
    </template>
    </el-table-column>
    </el-table>
    </div>
  </div>
  <!-- Or manually control the data synchronization（或手动控制数据流） -->
</template>

<script>
export default {
  data() {
    return {
      id: "",
      title: "",
      content: "",
      tableData: []
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    handleLook(row) {
      var id = row._id;
      this.$router.push({ path: "/article/articleDetail", query: { id: id } });
    },
    contentFormat(row, column) {
      var content = row[column.property];
      var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = content.replace(re1, ""); //执行替换成空字符
      if (msg.length > 30) {
        msg = msg.slice(0, 30) + "...";
      }
      return msg;
    },
    handleEdit(row) {
      var id = row._id;
      this.$router.push({ path: "/article/articleEdit", query: { id: id } });
    },
    searchPost() {
      this.$http
        .get("/api/article/searchPost")
        .then(response => {
          let res = response.data;
          if (res.code === 0) {
            this.tableData = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //删除
    handleDelete(index, row) {
      this.deleteOneData(row._id);
    },
    deleteOneData(id) {
      let params = {
        id: id
      };
      this.$http
        .post("/api/article/deletePost", params)
        .then(response => {
          let res = response.data;
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: "success",
              duration: "2000"
            });
            this.searchPost();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {},
  mounted() {
    this.searchPost();
  }
};
</script>

<style>
.edit-wrap {
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
}
.ps-label {
  display: block;
  margin-bottom: 10px;
}
</style>
