<template>
  <div class="article">
    <div class="title">{{postList.posttitle}}</div>
    <div class="title">创建时间：{{postList.createTime | moment("YYYY-MM-DD HH:mm:ss")}}</div>
    <div class="content" v-html="postList.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      postList: [],
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData(){
      var params = {
        id: this.$route.params.id
      }
      this.$http.get('/api/post/searchOnePost', params).then(response=>{
        let res = response.data;
        if(res.code == 1){
          this.postList = res.data;
        }
      }).then((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>
