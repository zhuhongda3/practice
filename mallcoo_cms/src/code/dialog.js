export const code1 =
`<template>
  <el-button type="text" @click="dialogVisible=true">点击显示弹窗</el-button>
          
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
    >
    <span>这是一段内容</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible=false">取消</el-button>
      <el-button type="primary" @click="dialogVisible=false">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data(){
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done){
      this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {});
    }
  },
}
</script>
`;
export const code2 =
`<template>
  <el-button type="text" @click="dialogTableVisibe=true">打开嵌套表格的dialog</el-button>
  <el-button type="text" @click="dialogFormVisibe=true">打开嵌套表单的dialog</el-button>

  <el-dialog
      title="收货地址"
      :visible.sync="dialogTableVisibe">
    <el-table
      :data="girdData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogTableVisibe=false">取消</el-button>
      <el-button type="primary" @click="dialogTableVisibe=false">确定</el-button>
    </span>
  </el-dialog>

  <el-dialog
    title="活动表单"
    :visible.sync="dialogFormVisibe">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisibe=false">取消</el-button>
      <el-button type="primary" @click="dialogFormVisibe=false">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data(){
    return {
      dialogTableVisibe: false,
      dialogFormVisibe: false,
      formLabelWidth: '120px',
      form:{
        name: '',
        region:'',
      },
      girdData:[
        {
          date:'2018-03-26',
          name:'凉凉',
          address:'上海市静安区灵石路 658 弄',
        },
        {
          date:'2018-03-27',
          name:'凉凉',
          address:'上海市静安区灵石路 658 弄',
        },
        {
          date:'2018-03-28',
          name:'凉凉',
          address:'上海市静安区灵石路 658 弄',
        }
      ]
    };
  }
}
</script>
`;
export const code3 =
`<template>
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
`;