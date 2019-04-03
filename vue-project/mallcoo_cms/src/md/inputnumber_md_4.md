```
<template>
  <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
</template>

<script>
export default {
  data(){
    return {
      num8: 1
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