export const code1 =
`<template>
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

<script>
export default {
  data(){
    return {
      input11: '',
      input12: '',
      input13: '',
    }
  }
}
</script>
`;
export const code2 =
`<template>
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

<script>
export default {
  data(){
    return {
      input21: '',
      input22: '',
      input23: '',
      input24: '',
    }
  }
}
</script>
`;
export const code3 =
`<template>
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

<script>
export default {
  data(){
    return {
      input31: '',
      input32: '',
      input33: '',
      input34: '',
    }
  }
}
</script>
`;
export const code4 =
`<template>
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

<script>
export default {
  data(){
    return {
      input41: '',
      input42: '',
      input43: '',
      selectValue: '',
    }
  }
}
</script>

<style>
.el-select {
  width: 130px;
}
</style>
`;
export const code5 =
`<template>
  <el-input
    type="textarea" 
    :rows="2"
    v-model="textarea1"
    placeholder="请选择内容">
  </el-input>
</template>

<script>
export default {
  data(){
    return {
      textarea1: '',
    }
  }
}
</script>
`;
export const code6 =
`<template>
  <el-input
    type="textarea"
    autosize 
    v-model="textarea2"
    placeholder="请选择内容">
  </el-input>
  <el-input
    type="textarea" 
    :autosize="{ minRows: 2, maxRows: 4}"
    v-model="textarea3"
    placeholder="请选择内容">
  </el-input>
</template>

<script>
export default {
  data(){
    return {
      textarea2: '',
      textarea3: '',
    }
  }
}
</script>
`;
