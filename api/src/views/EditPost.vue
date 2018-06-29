<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div class="edit-wrap" style="max-width: 70%;margin: 0 auto;">
    <div>
      <h3 style="text-align: center;">文章发布系统</h3>
      <div style="text-align:right;">
        <el-button size="small" @click="resetStatus" plain>新建文章<i class="el-icon-plus el-icon--right"></i></el-button>
      </div>
      <label class="ps-label" for="">标题：</label>
      <input type="text" v-model="posttitle" style="margin-bottom: 30px;width: 100%;height:35px;padding: 0 10px;box-sizing: border-box;"/>
      <label class="ps-label" for="">内容：</label>
      <quill-editor
        style="width:100%;" 
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange($event)">
      </quill-editor>
      <div style="margin-top: 20px;margin-bottom: 20px;">
        <el-button type="primary" size="small" @click="submitPost" v-if="isBtnShow">提交文章</el-button>
        <el-button size="small" @click="updatePost" v-if="!isBtnShow">更新文章</el-button>
      </div>
    </div>
    <label class="ps-label" for="">文章列表：</label>
    <el-table
      :data="tableData"
      border
      style="width: 100%;margin: 0 auto;text-align: left;"
    >
    <el-table-column
      prop="_id"
      label="文章id"
      width="180"
    ></el-table-column>
    <el-table-column
      prop="posttitle"
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
  <!-- Or manually control the data synchronization（或手动控制数据流） -->
</template>

<script>
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      id: '',
      posttitle: "",
      content: "",
      tableData: [],
      editorOption: {
        // some quill options
      },
      isBtnShow: true,
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    handleLook(row){
      var id = row._id;
      router.push({ name: 'PostDetail', params: { id: id }});
    },
    resetStatus(){
      this.id = '';
      this.posttitle = '';
      this.content = '';
      this.isBtnShow = true;
    },
    contentFormat(row, column) {
      var content = row[column.property];
      var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = content.replace(re1, ""); //执行替换成空字符
      if(msg.length>30){
        msg = msg.slice(0,30) + '...';
      }
      return msg;
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    handleEdit(row){
      this.id = row._id;
      this.posttitle = row.posttitle;
      this.content = row.content;
      this.isBtnShow = false;
    },
    submitPost() {
      if (!this.posttitle) {
        this.$message({
          message: "创建文章失败",
          type: "warning",
          duration: "2000"
        });
        return;
      }
      let params = {
        posttitle: this.posttitle,
        content: this.content
      };
      this.$http
        .post("/api/post/createPost", params)
        .then(response => {
          let res = response.data;
          if (res.code == 1) {
            this.$message({
              message: res.msg,
              type: "success",
              duration: "2000"
            });
            this.searchPost();
          } else {
            this.$message({
              message: res.msg,
              type: "warning",
              duration: "2000"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchPost() {
      this.$http
        .get("/api/post/searchPost")
        .then(response => {
          let res = response.data;
          if (res.code == 1) {
            this.tableData = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updatePost() {
      if (this.id && this.posttitle) {
        let params = {
          id: this.id,
          posttitle: this.posttitle,
          content: this.content
        };
        this.$http
          .post("/api/post/updatePost", params)
          .then(response => {
            let res = response.data;
            if (res.code == 1) {
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
      } else {
        this.$message({
          message: "文章更新失败",
          type: "warning",
          duration: "2000"
        });
      }
    },
    //删除
    handleDelete(index, row) {
      this.deleteOneData(row._id);
      this.resetStatus();
    },
    deleteOneData(id) {
      let params = {
        id: id
      };
      this.$http.post("/api/login/deletePost", params)
      .then(response => {
        let res = response.data;
        if(res.code == 1){
          this.$message({
            message: res.msg,
            type: "success",
            duration: '2000'
          });
          this.searchPost();
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    this.searchPost();
    console.log("this is current quill instance object", this.editor);
  },
  components: {
    quillEditor
  }
};
</script>

<style lang="scss">
.ql-editor {
  min-height: 300px;
}
.ps-label{
  display: block;
  margin-bottom: 10px;
}
</style>
