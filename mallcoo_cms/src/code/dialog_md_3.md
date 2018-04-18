```
<template>
  <el-button type="text" @click="outerVisible=true">点击显示弹窗</el-button>

  <el-dialog
    title="外层dialog"
    :visible.sync="outerVisible">
    <el-dialog
      title="内层dialog"
      width='30%'
      :visible.sync="innerVisible"
      append-to-body>
    </el-dialog>

    <span>这是一段内容</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="outerVisible=false">取消</el-button>
      <el-button type="primary" @click="innerVisible=true">>打开内层dialog</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data(){
    return {
      outerVisible: false,
      innerVisible: false
    };
  }
}
</script>
```