<template>
  <div>
    <card-box title="基本用法">
      <template slot="content">
        <el-checkbox v-model="checked1" @change="getRadio1Value">备选项</el-checkbox>
        <el-checkbox v-model="checked2" disabled>禁用</el-checkbox>
        <el-checkbox v-model="checked3" disabled>选中且禁用</el-checkbox>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="多选框组">
      <template slot="content">
        <el-checkbox-group v-model="checkList1">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="indeterminate 状态">
      <template slot="content">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="可选项目数量的限制">
      <template slot="content">
       <el-checkbox-group 
          v-model="checkedCities1"
          :min="1"
          :max="2">
          <el-checkbox v-for="city in cities1" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

    <card-box title="按钮样式">
      <template slot="content">
      
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
        <br>
        <el-checkbox-group v-model="checkboxGroup2" size="small">
          <el-checkbox-button v-for="city in cities3" :label="city" :key="city" :disabled="city==='广州'">{{city}}</el-checkbox-button>
        </el-checkbox-group>
        <br>
        <el-checkbox-group v-model="checkboxGroup3" text-color="#fff" fill="#f00">
          <el-checkbox-button v-for="city in cities4" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </template>
      <template slot="code">{{code5}}</template>
    </card-box>

    <card-box title="带有边框">
      <template slot="content">
        <div>
          <el-checkbox v-model="checked4" label="备选项1" border size="medium"></el-checkbox>
          <el-checkbox v-model="checked5" label="备选项2" border size="medium"></el-checkbox>
        </div>
        <el-checkbox-group v-model="checkboxGroup4" border>
          <el-checkbox label="备选项1" border></el-checkbox>
          <el-checkbox label="备选项2" border></el-checkbox>
        </el-checkbox-group>
        <el-checkbox-group v-model="checkboxGroup5" size="mini">
          <el-checkbox label="备选项1" border></el-checkbox>
          <el-checkbox label="备选项2" border disabled></el-checkbox>
        </el-checkbox-group>
      </template>
      <template slot="code">{{code6}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import checkbox_md_1 from '@/md/checkbox_md_1.md';
import checkbox_md_2 from '@/md/checkbox_md_2.md';
import checkbox_md_3 from '@/md/checkbox_md_3.md';
import checkbox_md_4 from '@/md/checkbox_md_4.md';
import checkbox_md_5 from '@/md/checkbox_md_5.md';
import checkbox_md_6 from '@/md/checkbox_md_6.md';

const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  data(){
    return {
      code1: checkbox_md_1,
      code2: checkbox_md_2,
      code3: checkbox_md_3,
      code4: checkbox_md_4,
      code5: checkbox_md_5,
      code6: checkbox_md_6,
      checked1: true,
      checked2: false,
      checked3: true,
      checked4: false,
      checked5: false,
      checkList1: ['复选框 A','选中且禁用'],
      checkAll: false,
      isIndeterminate: true,
      cities: cityOptions,
      cities1: cityOptions,
      cities2: cityOptions,
      cities3: cityOptions,
      cities4: cityOptions,
      checkedCities: ['上海', '北京'],
      checkedCities1: ['上海', '北京'],
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: [],
      checkboxGroup5: [],
    };
  },
  methods: {
    getRadio1Value(){
      alert(this.checked1);
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
.el-checkbox{
  margin-bottom: 10px;
}
</style>
