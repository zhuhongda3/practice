export const code1 =
`<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="步骤 1"></el-step>
    <el-step title="步骤 2"></el-step>
    <el-step title="步骤 3"></el-step>
  </el-steps>

  <el-button style="margin-top: 12px;" @click="next">{{active>2?'提交':'下一步'}}</el-button>
</template>

<script>
export default {
  data(){
    return {
      active: 1
    };
  },
  methods: {
    next() {
      if(this.active == 3) return;
      this.active += 1;
    }
  },
}
</script>
`;