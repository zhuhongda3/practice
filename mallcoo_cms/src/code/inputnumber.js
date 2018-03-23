export const code1 =
`<template>
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
`;
export const code2 =
`<template>
  <el-input-number v-model="num3" :step="2"></el-input-number>
</template>

<script>
export default {
  data(){
    return {
      num3: 5
    };
  }
}
</script>
`;
export const code3 =
`<template>
  <el-input-number v-model="num4"></el-input-number>
  <el-input-number v-model="num5" size="medium"></el-input-number>
  <el-input-number v-model="num6" size="small"></el-input-number>
  <el-input-number v-model="num7" size="mini"></el-input-number>
</template>

<script>
export default {
  data(){
    return {
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1
    };
  }
}
</script>
`;
export const code4 =
`<template>
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
`;
