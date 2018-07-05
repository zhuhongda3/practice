<template>
  <div class="article">
    <div class="article-title">{{postList.title}}</div>
    <div class="article-time">发布于：{{postList.createTime | moment("YYYY-MM-DD HH:mm:ss")}}</div>
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
      .get('/api/article/searchOnePost', data)
      .then(response=>{
        let res = response.data;
        if(res.code === 0){
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
  width: 100%;
  max-width: 1180px;
  padding: 50px 0;
  margin: 0 auto;
  word-break: break-all;
  box-sizing: border-box;
  white-space: pre-wrap;
  word-wrap: break-word;
  border: 1px solid #ddd;
  pre{
    white-space: pre-wrap;
  }
}

.ql-container.ql-snow{
  border: 0;
}

.ql-editor {
  min-height: 0;
}

.article-title{
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

.article-time{
  margin-right: 30px;
  font-size: 14px;
  text-align: right;
}
</style>

