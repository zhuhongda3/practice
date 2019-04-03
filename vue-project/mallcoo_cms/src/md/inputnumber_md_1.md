```
<template>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
  <el-input-number v-model="num2" disabled></el-input-number>
</template>

<script>
export default {
  data(){
    return {
      num1: 1,
      num2: 1
    };
  },
  methods: {
    handleChange(value){
      console.log(value);
    }
  }
}
</script>
```