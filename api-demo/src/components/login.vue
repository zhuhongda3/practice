<template>
    <div class="login">
        <!-- 获取模拟的json数据 -->
        <ul>
          <li v-for ="(item,key) in arr" :key="item.id">
            <span>{{key}}-{{item.a1}}</span>
            <span>{{key}}-{{item.a2}}</span>
          </li>
        </ul>

        <!-- 遍历数据 -->
        <li v-for="n in even(numbers)" :key="n">{{ n }}</li>

        <!-- 元素可见性,对绑定数据进操作 -->
        <div class="test">
            <h3 v-if="seen">666啊</h3>
            <h3 v-show="seen">666啊</h3>
            <p><a :href="url">哈哈</a></p>
            <p>{{reverData}}</p>
        </div>
        
        <!-- 访问外域数据 -->
        <div :class="[$style.videoOrder]">
          <h3>豆瓣电影排行榜</h3>
          <ul>
            <li class="item" v-for="(article,index) in articles" :key="index">{{article.title}}</li>
          </ul>
        </div>
        
        <!-- 路由跳转 -->
        <div class="home-page-link">
          <router-link to="/">跳转到首页</router-link>
        </div>

        <button class="c-Button c-Button--close">sss</button>
    </div>
</template>

<script>
// import { a } from "@/dataMock"; //引入模拟数据

export default {
  name: "Login", //备选
  data() {
    return {
      arr: [],
      numbers: [1, 2, 3, 4, 5],
      msg: "666",
      seen: true, //设置dom元素是否存在或是否显示隐藏（true/false）
      url: "",
      articles: []
    };
  },
  mounted: function() {
    //启动时立即执行,获取数据,三种数据获取
    this.getData(); //获取本地模拟数据
    this.getOtherData(); //获取外域数据库数据
  },
  computed: {
    reverData() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
    },
    getData() {
      var that = this;
      //遍历对象数组的两种常见形式
      // 1.
      // for (var i in a) {
      //   that.arr.push(a[i]);
      // }
      // 2.
      // a.forEach(function(item) {
      //   that.arr.push(item);
      // });
    },
    even(numbers) {
      //过滤器
      return numbers.filter(function(number) {
        return number % 2 === 0; //返回偶数
      });
    },
    // 跨域
    getOtherData() {
      var that = this;
      that.$http.jsonp("https://api.douban.com/v2/movie/top250?count=12",{},
          {
            headers: {},
            emulateJSON: true
          }
        ).then(
          function(response) {
            // 这里是处理正确的回调
            that.articles = response.data.subjects;
            // this.articles = response.data["subjects"] 也可以
          },
          function(response) {
            // 这里是处理错误的回调
            console.log(response);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>