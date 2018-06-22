var DelItem = Vue.extend({
  props:['item1','item2','index2'],
  template:'<li ref="currentItem" :index="index2">'
  +'<a :href="item2.url">'
  + '<span class="del-btn" @click.prevent="deleteItem(item1.children,index2)" ref="remove">删除</span>'
  + '<p'
    +  '@touchstart.prevent="_touchStart"'
    +  '@touchmove.prevent="_touchMove"'
    +  '@touchend="_touchEnd"'
    +  ':style="txtStyle">'
    +  '{{item2.name}}'
    +'</p>'
  +'</a>'
  +'</li>',
  data: function() {
    return {
      startX: 0, //触摸位置
      moveX: 0, //滑动时的位置
      disX: 0, //移动距离
      txtStyle: "",
    };
  },
  computed: {
  },
  methods: {
    _touchStart: function(ev) {
      ev = ev || event;
      if (ev.touches.length == 1) {
        var len = this.$refs.currentItem.parentNode.children.length;
        var idx = this.$refs.currentItem.getAttribute('index');
        for(var i = 0;i<len;i++){
          if(i == idx) continue;
          this.$refs.currentItem.parentNode.children[i].getElementsByTagName('p')[0].setAttribute('style',"transform: translateX(0px)");
        }
        this.startX = ev.touches[0].clientX;
      }
    },
    _touchMove: function(ev) {
      ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      if (ev.touches.length == 1) {
        this.moveX = ev.touches[0].clientX;
        this.disX = this.startX - this.moveX;
        if (this.disX < 0 || this.disX == 0) {
          this.txtStyle = "transform: translateX(0px)";
        } else {
          this.txtStyle = "transform: translateX(-" + this.disX + "px)";
          if (this.disX >= w) {
            this.txtStyle = "transform: translateX(-" + w + "px)";
          }
        }
      }
    },
    _touchEnd: function(ev) {
      ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      if (ev.changedTouches.length == 1) {
        var endX = ev.changedTouches[0].clientX;
        this.disX = this.startX - endX;
        if (this.disX < w / 2) {
          this.txtStyle = "transform: translateX(0px)";
        } else {
          this.txtStyle = "transform: translateX(-" + w + "px)";
        }
      }
    },
    deleteItem: function(item, index) {
      item.splice(index, 1);
      this.txtStyle = "transform: translateX(0px)";
    }
  }
});

Vue.component('del-item',DelItem);  //注册全局组件del-item

new Vue({
  el: "#el",
  data: {
    dataList: [],
  },
  mounted: function() {
    this.dataList = [
      {
        show: false,
        name: 2018,
        children: [
          {
            show: false,
            name: "2018-01",
            children: [
              {
                name: "文章1",
                url: "//baidu.com"
              },
              {
                name: "文章2",
                url: "#"
              },
              {
                name: "文章3",
                url: "#"
              }
            ]
          },
          {
            show: false,
            name: "2018-02",
            children: [
              {
                name: "文章1",
                url: "#"
              },
              {
                name: "文章2",
                url: "#"
              },
              {
                name: "文章3",
                url: "#"
              }
            ]
          }
        ]
      },
      {
        show: false,
        name: 2017,
        children: [
          {
            show: false,
            name: "2017-01",
            children: [
              {
                name: "文章1",
                url: "#"
              },
              {
                name: "文章2",
                url: "#"
              },
              {
                name: "文章3",
                url: "#"
              }
            ]
          },
          {
            show: false,
            name: "2017-02",
            children: [
              {
                name: "文章1",
                url: "#"
              },
              {
                name: "文章2",
                url: "#"
              },
              {
                name: "文章3",
                url: "#"
              }
            ]
          }
        ]
      }
    ];
  },
  methods: {
    toggle: function(item) {
      var ev = ev || event;
      item.show = !item.show;
      if(item.show){
        var len = ev.target.parentNode.parentNode.children.length;
        var idx = ev.target.getAttribute('index');
        for(var i = 0;i<len;i++){
          if(i == idx) continue;
          ev.target.parentNode.parentNode.children[i].getElementsByTagName('ul')[0].setAttribute('style','display: none');
          ev.target.parentNode.parentNode.children[i].getElementsByTagName('p')[0].setAttribute('class','');
        }
      }
    }
  }
});
