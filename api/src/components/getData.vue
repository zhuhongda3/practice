<template>
    <div>
    <el-row>
        <el-col :span="24">
        <!-- 录入数据-输入框 -->
        <el-form ref="form" :model="form" label-width="40px">
            <el-form-item label="账号">
                <el-input v-model="form.account" placeholder="请输入账号" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" placeholder="请输入密码" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" @click="inputData">注册</el-button>
                <el-button size="small" @click="resetInput">取消</el-button>
            </el-form-item>
        </el-form>

        <!-- 显示数据-表格 -->
        <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        border>
        <el-table-column label="用户名">
          <template slot-scope="scope">
            <span>{{ scope.row.account }}</span>
          </template>
        </el-table-column>
        <el-table-column label="密码">
          <template slot-scope="scope">
            <span>{{ scope.row.password }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row);">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
        </el-table>

        <!-- 分页导航 -->
        <div class="block" style="margin-top: 10px;">
          <el-pagination
            background
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pagesizes"
            :page-size="pagesize"
            :total="total">
          </el-pagination>
        </div>

        <!-- 编辑数据-弹出框 -->
        <el-dialog title="更新数据" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="账号" :label-width="formLabelWidth">
              <el-input v-model="form.account" auto-complete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" auto-complete="off" clearable></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="updateOneData">确 定</el-button>
          </div>
        </el-dialog>


        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      id:'',
      form: {
        account: "",
        password: ""
      },
      pagesizes: [5, 10],
      pagesize: 5,
      currentPage: 1,
      total: 0,
      tableData: [],
      dialogFormVisible: false,
      dialogTableVisible: false,
      formLabelWidth: '',
      currentPage: 1
    };
  },
  mounted: function() {
    this.searchData();
  },
  methods: {
    //取消
    resetInput() {
      this.form.account = "";
      this.form.password = "";
    },
    //编辑
    handleEdit(index, row) {
      this.form.account = row.account;
      this.form.password = row.password;
      this.id = row._id;
      this.dialogFormVisible = true;
    },
    //新增
    inputData() {
      if (this.form.account != "" && this.form.password != "") {
        this.insertData();
      } else {
        this.$message({
          message: "输入的账号或密码不能为空",
          type: "warning",
          duration: '1000'
        });
      }
    },
    insertData() {
      let params = this.form;
      this.$http.post("/api/login/createAccount", params)
      .then(response => {
        let res = response.data;
        if(res.code == 1){
          this.$message({
            message: res.msg,
            type: "success",
            duration: '1000'
          });
          this.searchData();
        }else{
          this.$message({
            message: res.msg,
            type: "warning",
            duration: '1000'
          });
        }
      }).catch(reject => {
        console.log(reject);
      });
    },
    //删除
    handleDelete(index, row) {
      this.deleteOneData(row.account);
    },
    deleteOneData(a) {
      let params = {
        account: a
      }
      this.$http.post("/api/login/deleteAccount", params)
      .then(response => {
        let res = response.data;
        if(res.code == 1){
          this.$message({
            message: res.msg,
            type: "success",
            duration: '1000'
          });
          this.searchData();
        }
      }).catch(reject => {
        console.log(reject);
      });
    },
     //更改
    updateOneData(){
      if(this.form.password != ""){
        let params ={
          id: this.id,
          account: this.form.account,
          password: this.form.password
        }
        this.$http.post("/api/login/updateAccount",params)
        .then(response => {
          let res = response.data;
          if(res.code == 1){
            this.$message({
              message: res.msg,
              type: "success",
              duration: '1000'
            }); 
            this.searchData();
            this.dialogFormVisible = false;
          }
        }).catch(reject => {
          console.log(reject);
        });
      }else{
        this.$message({
          message: "密码不能为空",
          type: "warning",
          duration: '1000'
        });
      }
    },
    //查询
    searchData() {
      this.$http.get("/api/login/searchAccount")
      .then(response => {
        let res = response.data;
        if(res.code == 1){
          this.tableData = res.data;
          this.total = this.tableData.length;
        }
      }).catch(reject => {
        console.log(reject);
      });
    },
    //处理分页
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
