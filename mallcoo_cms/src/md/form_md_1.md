```
<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-row>
      <el-col :span="8">
        <el-form-item label="用户id">
          <el-input v-model="form.id"  placeholder="用户id"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="会员卡号">
          <el-input v-model="form.cardNumber" placeholder="会员卡号"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="外部编号">
          <el-input v-model="form.externalNumber" placeholder="外部编号"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="手机">
          <el-input v-model="form.tel" placeholder="手机号码"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="会员等级">
          <el-select v-model="form.grade" placeholder="请选择" style="width: 100%;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="当前积分">
          <el-col :span="11">
            <el-form-item>
              <el-input v-model="form.integral[0]" style="width:100%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2" class="el-mc-text-center">至</el-col>
          <el-col :span="11">
            <el-form-item>
              <el-input v-model="form.integral[1]" style="width:100%"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="是否绑定用户">
          <el-select v-model="form.isBindingUsers" placeholder="请选择" style="width: 100%;">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="状态">
          <el-select v-model="form.status" placeholder="请选择" style="width: 100%;">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="开卡来源">
          <el-select v-model="form.source" placeholder="请选择" style="width: 100%;">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="开卡时间" >
          <el-date-picker
            v-model="form.cardOpenTime"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%;">
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="绑定时间">
          <el-date-picker
            v-model="form.bindingTime"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 100%;">
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item>
          <el-button @click="onSubmit" plain>搜索</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  data(){
    return {
      form: {
        id: '',
        cardNumber:'',
        externalNumber: '',
        tel: '',
        grade: '',
        integral: [],
        isBindingUsers: '',
        status: '',
        source: '',
        cardOpenTime: '',
        bindingTime: ''
      },
      options: [{
        value: '1',
        label: '普卡',
      },
      {
        value: '2',
        label: '银卡会员',
      },
      {
        value: '3',
        label: '金卡会员',
      },
      {
        value: '4',
        label: '砖石卡会员',
      }],
      options1: [{
        value: '1',
        label: '是',
      },
      {
        value: '2',
        label: '否',
      }],
      options2: [{
        value: '1',
        label: '正常',
      },
      {
        value: '2',
        label: '冻结',
      }],
      options3: [{
        value: '1',
        label: 'Android',
      },
      {
        value: '2',
        label: 'IOS',
      }],
    };
  },
  methods: {
   onSubmit(){
     alert(JSON.stringify(this.form, null, 4))
   }
  }
}
</script>
```