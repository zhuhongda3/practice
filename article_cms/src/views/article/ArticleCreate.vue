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
        <el-button type="primary" size="small" @click="submitPost">提交</el-button>
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
      id: '',
      title: "",
      content: "",
      editorOption: {
        // some quill options
      },
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    resetStatus(){
      this.id = '';
      this.title = '';
      this.content = '';
      this.isBtnShow = true;
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
    submitPost() {
      if (!this.title) {
        this.$message({
          message: "创建文章失败",
          type: "warning",
          duration: "2000"
        });
        return;
      }
      let params = {
        title: this.title,
        content: this.content
      };
      this.$http
        .post("/api/article/createPost", params)
        .then(response => {
          let res = response.data;
          if (res.code === 0) {
            this.$message({
              message: res.msg,
              type: "success",
              duration: "2000",
            });
            this.$router.push({path:'/article/articleList'});
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
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
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

