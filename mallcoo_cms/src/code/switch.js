export const code1 =
`<template slot="content">
  <el-switch
    v-model="value1">
  </el-switch>
  <el-switch
    disabled
    v-model="value2">
  </el-switch>
  <el-switch
    disabled
    v-model="value3">
  </el-switch>
</template>

<script>
export default {
  data(){
    return {
      value1: false,
      value2: false,
      value3: true
    };
  }
}
</script>
`;
export const code2 =
`<template slot="content">
  <el-switch
    v-model="value4"
    active-text="说明项"
    active-color="#13ce66"
    inactive-color="#999"
    width=60>
  </el-switch>
</template>

<script>
export default {
  data(){
    return {
      value4: false
    };
  }
}
</script>
`;
export const code3 =
`<template slot="content">
  <el-switch
    @change="getSwitchValue"
    v-model="value5">
  </el-switch>
</template>

<script>
export default {
  data(){
    return {
      value5: false
    };
  },
  methods: {
    getSwitchValue(){
      alert(this.value5);
    }
  }
}
</script>
`;