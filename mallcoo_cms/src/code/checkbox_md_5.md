```
<template>
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
```