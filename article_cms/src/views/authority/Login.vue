<template>
  <div class="login-wrap">
    <p class="login-title">Login</p>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
          <el-input v-model="form.account" placeholder="用户名" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
          <el-input type="password" v-model="form.password" placeholder="密码" clearable></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" size="small" style="width: 100%;" @click="checkLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    checkLogin(){
      let params = {
        account: this.form.account,
        password: this.form.password
      };
      this.$http.post("/api/login/login",params).then(response => {
        let res = response.data;
        if (res.code === 0) {
          this.$router.push({ path: "/article/articleCreate" });
        }else{
          this.$message({
            message: res.msg,
            type: "error",
            duration: "2000",
          });
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrap{
  width: 100%;
  max-width: 600px;
  margin: 150px auto;
  .login-title{
    text-align: center;
    padding-left: 80px;
    font-size: 20px;
  }
}
</style>
