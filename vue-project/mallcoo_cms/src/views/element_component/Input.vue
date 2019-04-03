<template>
  <div>
    <card-box title="基本用法">
      <template slot="content">
        <el-input v-model="input11" placeholder="请输入内容"></el-input>
        <el-input 
          v-model="input12" 
          disabled
          placeholder="搜索框禁用">
        </el-input>
        <el-input
          v-model="input13" 
          clearable
          placeholder="输入内容可清除">
        </el-input>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="尺寸">
      <template slot="content">
        <el-input v-model="input21" placeholder="普通输入框"></el-input>
        <el-input 
          v-model="input22" 
          placeholder="中等输入框" 
          size="medium">
        </el-input>
        <el-input 
          v-model="input23"
          size="small" 
          placeholder="小型输入框">
        </el-input>
        <el-input 
          v-model="input24"
          size="mini" 
          placeholder="超小型输入框">
        </el-input>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="带 icon 的输入框">
      <template slot="content">
        <div>
           属性方式：
          <el-input 
            v-model="input31"
            suffix-icon="el-icon-date" 
            placeholder="请选择日期">
          </el-input>
          <el-input 
            v-model="input32"
            prefix-icon="el-icon-search" 
            placeholder="请输入内容">
          </el-input>
        </div>
        <br>
        <div>
          slot方式：
          <el-input 
            v-model="input33" 
            placeholder="请选择日期">
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
          <el-input 
            v-model="input34" 
            placeholder="请输入内容">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="复合型输入框">
      <template slot="content">
        <el-input v-model="input41" placeholder="请输入内容" class="el-input-length">
          <template slot="prepend">Http://</template>
        </el-input>
        <el-input v-model="input42" placeholder="请输入内容" class="el-input-length">
          <template slot="append">.com</template>
        </el-input>
        <el-input v-model="input43" placeholder="请输入内容" class="el-input-length">
          <el-select v-model="selectValue" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

    <card-box title="文本域">
      <template slot="content">
        <el-input
          type="textarea" 
          :rows="2"
          v-model="textarea1"
          placeholder="请选择内容">
        </el-input>
      </template>
      <template slot="code">{{code5}}</template>
    </card-box>

    <card-box title="可自适应文本高度的文本域">
      <template slot="content">
        <el-input
          type="textarea"
          autosize 
          v-model="textarea2"
          placeholder="请选择内容（行数自适应）">
        </el-input>
        <br>
        <el-input
          type="textarea" 
          :autosize="{ minRows: 2, maxRows: 4}"
          v-model="textarea3"
          placeholder="请选择内容（最小2行，最大4行，超出出现滚动条）">
        </el-input>
      </template>
      <template slot="code">{{code6}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import input_md_1 from '@/md/input_md_1.md';
import input_md_2 from '@/md/input_md_2.md';
import input_md_3 from '@/md/input_md_3.md';
import input_md_4 from '@/md/input_md_4.md';
import input_md_5 from '@/md/input_md_5.md';
import input_md_6 from '@/md/input_md_6.md';

export default {
  data(){
    return {
      code1: input_md_1,
      code2: input_md_2,
      code3: input_md_3,
      code4: input_md_4,
      code5: input_md_5,
      code6: input_md_6,
      input11: '',
      input12: '',
      input13: '',
      input21: '',
      input22: '',
      input23: '',
      input24: '',
      input31: '',
      input32: '',
      input33: '',
      input34: '',
      input41: '',
      input42: '',
      input43: '',
      selectValue: '',
      textarea1: '',
      textarea2: '',
      textarea3: '',
    };
  },
  methods: {
    
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
.el-input{
  width: 180px;
}

.el-textarea{
  width: 400px;
  &:not(:last-child){
    margin-bottom: 10px;
  }
}

.el-select {
  width: 130px;
}

.el-input-length{
  width: 70%;
  margin-bottom: 10px;
}
</style>
