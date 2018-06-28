<template>
  <div>
    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :loading-text="loadingText">
      <ul>
        <li v-for="item in listdata" :key="item.name" v-text="item.name"></li>
        <li v-for="item in downdata" :key="item.name" v-text="item.name"></li>
      </ul>
    </v-scroll>
  </div>
</template>
<script>
import UpLoad from "@/components/demo/UpLoad";

export default {
  data() {
    return {
      loadingText: "加载中...",
      counter: 1, //默认已经显示出20条数据
      num: 18, // 一次显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: [] // 上拉更多的数据存放数组
    };
  },
  mounted: function() {
    this.getList();
  },
  methods: {
    getList() {
      let vm = this;
      vm.$http
        .get("https://api.github.com/repos/typecho-fans/plugins/contents/")
        .then(response => {
          vm.listdata = response.data.slice(0, vm.num);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onRefresh(done) {
      this.getList(); //获取初始化项
      if (this.downdata != "") this.downdata = [];
      done(); // call done
    },
    onInfinite(done) {
      let vm = this;
      vm.$http
        .get("https://api.github.com/repos/typecho-fans/plugins/contents/")
        .then(response => {
          vm.counter++;
          vm.pageEnd = vm.num * vm.counter;
          vm.pageStart = vm.pageEnd - vm.num;
          let arr = response.data;
          let i = vm.pageStart;
          let end = vm.pageEnd;
          for (; i < end; i++) {
            let obj = {};
            obj["name"] = arr[i].name;
            vm.downdata.push(obj);
            if (i + 1 >= response.data.length) {
              this.$el.querySelector(".load-more").style.display = "none";
              return;
            }
          }
          done(); // call done
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    "v-scroll": UpLoad
  }
};
</script>

<style lang="scss" scoped>
ul {
  li {
    width: 100%;
    padding: 10px;
    background-color: #f4f4f4;
    margin-top: 1px;
  }
}
</style>
