<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div class="edit-wrap">
    <div>
      <label class="ps-label" for="">标题：</label>
      <el-input
        placeholder="请输入标题"
        v-model="title"
        clearable
      ></el-input>
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
        <el-button type="primary" size="small" @click="updatePost">修改</el-button>
      </div>
    </div>
  </div>
  <!-- Or manually control the data synchronization（或手动控制数据流） -->
</template>

<script>
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      id: "",
      title: "",
      content: "",
      editorOption: {
        // some quill options
      }
    };
  },
  created() {
    this.getPostData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "getPostData"
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
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
    updatePost() {
      if (this.title && this.content) {
        let params = {
          id: this.id,
          title: this.title,
          content: this.content
        };
        this.$http
          .post("/api/article/updatePost", params)
          .then(response => {
            let res = response.data;
            if (res.code === 0) {
              this.$message({
                message: res.msg,
                type: "success",
                duration: "2000",
              });
              this.$router.push({ path: "/article/articleList" });
            }else{
              this.$message({
                message: res.msg,
                type: "error",
                duration: "2000",
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$message({
          message: "文章修改失败",
          type: "warning",
          duration: "2000"
        });
      }
    },
    getPostData() {
      var data = {
        params: {
          id: this.$route.query.id
        }
      };
      this.$http
        .get("/api/article/searchOnePost", data)
        .then(response => {
          let res = response.data;
          if (res.code === 0) {
            this.id = res.data._id;
            this.title = res.data.title;
            this.content = res.data.content;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
  components: {
    quillEditor
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
.ql-editor {
  min-height: 300px;
}
.ps-label {
  display: block;
  padding: 10px 0;
  font-size: 14px;
  color: #999;
}
</style>
