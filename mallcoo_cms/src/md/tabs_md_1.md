```
<template>
  <el-tabs v-model="activeName" type="card" @click="handleClick">
    <el-tab-pane label="tab1" name="first">tab1内容</el-tab-pane>
    <el-tab-pane label="tab2" name="second">tab2内容</el-tab-pane>
    <el-tab-pane label="tab3" name="third">tab3内容</el-tab-pane>
    <el-tab-pane label="tab4" name="fourth">tab4内容</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data(){
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab,event){
      console.log(tab,event);
    }
  },
}
</script>
```