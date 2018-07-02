<template>
  <div class="article">
    <div class="article-title">{{postList.posttitle}}</div>
    <div class="article-time">发布于：{{postList.createTime | moment("YYYY年MM月DD日 HH:mm:ss")}}</div>
    <div class="ql-container ql-snow">
      <div class="ql-editor">
        <div class="article-content" v-html="postList.content"></div>
      </div>
    </div>
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
    this.getPostData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'getPostData'
  },
  methods: {
    getPostData(){
      var data = {
        params: {
          id: this.$route.query.id
        }
      }
      this.$http
      .get('/api/post/searchOnePost', data)
      .then(response=>{
        let res = response.data;
        if(res.code == 1){
          this.postList = res.data;
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.article{
  margin: 40px auto;
  padding: 50px 15px;
  width: 100%;
  max-width: 1150px;
  word-break: break-all;
  box-sizing: border-box;
  white-space: pre-wrap;
  box-shadow: 0 0 5px 2px #f4f4f4;
  pre{
    white-space: pre-wrap;
  }
}

.ql-container.ql-snow{
  border: 0;
}

.article-title{
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

.article-time{
  font-size: 14px;
  text-align: right;
}
</style>

