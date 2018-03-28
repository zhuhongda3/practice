<template>
  <div>
    <card-box title="基本用法">
      <template slot="content">
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
      <template slot="code">{{code1}}</template>
    </card-box>

     <card-box title="自定义内容">
      <template slot="content">
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
          title="提示"
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
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="嵌套的 Dialog(在内层的dialog添加append-to-body属性)">
      <template slot="content">
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
            <el-button type="primary" @click="innerVisible=true">打开内层dialog</el-button>
          </span>
        </el-dialog>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3} from '@/code/dialog';

export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      dialogVisible: false,
      dialogTableVisibe: false,
      dialogFormVisibe: false,
      outerVisible: false,
      innerVisible: false,
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
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>