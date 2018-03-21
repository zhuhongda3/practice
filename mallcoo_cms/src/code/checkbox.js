export const code1 =
`<template><!--change事件如果有需要请添加，没有需要请移除，此处仅供演示-->
  <el-checkbox v-model="checked1" @change="getRadio1Value">备选项</el-checkbox>
  <el-checkbox v-model="checked2" disabled>备选项（禁用）</el-checkbox>
  <el-checkbox v-model="checked3" disabled>备选项（选中且禁用）</el-checkbox>
</template>

<script>
export default {
  data(){
    return {
      checked1: true,
      checked2: false,
      checked3: true, 
    };
  },
  method: {
    getRadio1Value(){
      alert(this.checked1);
    }
  }
}
</script>
`;
export const code2 =
`<template>
  <el-checkbox-group v-model="checkList1">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  data(){
    return {
      checkList1: ['复选框 A','选中且禁用'],
    };
  }
}
</script>
`;
export const code3 =
`<template>
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  data(){
    return {
      checkAll: false,
      indeterminate: true,
      cities: cityOptions,
      checkedCities: ['上海', '北京'],   
    };
  },
  method: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
}
</script>
`;
export const code4 =
`<template>
  <el-checkbox-group 
    v-model="checkedCities1"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  data(){
    return {
      cities1: cityOptions   
      checkedCities1: ['上海', '北京'],
    };
  }
}
</script>
`;
export const code5 =
`<template>
  <el-checkbox-group v-model="checkboxGroup1">
    <el-checkbox-button v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox-button>
  </el-checkbox-group>
  <br>
  <el-checkbox-group v-model="checkboxGroup2" size="small">
    <el-checkbox-button v-for="city in cities3" :label="city" :key="city" :disabled="city==='广州'">{{city}}</el-checkbox-button>
  </el-checkbox-group>
  <br>
  <el-checkbox-group v-model="checkboxGroup3" size="small" text-color="#fff" fill="#f00">
    <el-checkbox-button v-for="city in cities4" :label="city" :key="city" :disabled="city==='广州'">{{city}}</el-checkbox-button>
  </el-checkbox-group>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  data(){
    return {
      cities2: cityOptions,
      cities3: cityOptions,
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
    };
  }
}
</script>
`;
export const code6 =
`<template>
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

<script>
export default {
  data(){
    return {
      checked4: false,
      checked5: false,
      checkboxGroup4: [],
      checkboxGroup5: [],
    };
  }
}
</script>
`;