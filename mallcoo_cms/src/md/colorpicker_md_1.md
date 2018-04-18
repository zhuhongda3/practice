```
<template>
  <div class="block">
    <span class="demonstration">有默认值</span>
    <el-color-picker v-model="color1"></el-color-picker>
  </div>
  <div class="block">
    <span class="demonstration">无默认值</span>
    <el-color-picker v-model="color2"></el-color-picker>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <el-color-picker v-model="color2" disabled></el-color-picker>
  </div>
</template>

<script>
export default {
  data(){
    return {
      color1: '#000',
      color2: null
    };
  }
}
</script>
```