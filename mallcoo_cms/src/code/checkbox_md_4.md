```
<template>
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
```