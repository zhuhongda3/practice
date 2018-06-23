var DelItem = Vue.extend({
  props: ['item1', 'item2', 'index2'],
  template: '<li ref="currentItem" :index="index2">'
    + '<a :href="item2.url">'
    + '<span class="del-btn" @click.prevent="deleteItem(item1.children,index2)" ref="remove">删除</span>'
    + '<p'
    + '@touchstart="_touchStart"'
    + '@touchmove.prevent="_touchMove"'
    + '@touchend="_touchEnd"'
    + ':style="txtStyle">'
    + '{{item2.name}}'
    + '</p>'
    + '</a>'
    + '</li>',
  data: function () {
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
    _touchStart: function (ev) {
      ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      if (ev.touches.length == 1) {
        var idx = this.$refs.currentItem.getAttribute('index');
        //当前元素的父元素ul的子元素li的个数
        var len = this.$refs.currentItem.parentNode.children.length;
        var current = this.$refs.currentItem.parentNode.children[idx].getElementsByTagName('p')[0].getAttribute('style');
        if (typeof current != 'undefined' && current != null && current.match(/\d+/)[0] == String(w)) {
          ev.preventDefault();
        }
        for (var i = 0; i < len; i++) {
          if (i == idx) continue;
          var item = this.$refs.currentItem.parentNode.children[i];
          var s = item.getElementsByTagName('p')[0].getAttribute('style');
          if (typeof s != 'undefined' && s != null && s.match(/\d+/)[0] == String(w)) {
            item.getElementsByTagName('p')[0].style.transform = 'translateX(0px)';
            ev.preventDefault();
          }
        }
        this.startX = ev.touches[0].clientX;
      }
    },
    _touchMove: function (ev) {
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
    _touchEnd: function (ev) {
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
    deleteItem: function (item, index) {
      this.txtStyle = "transform: translateX(0px)";
      item.splice(index, 1);
    }
  }
});

Vue.component('del-item', DelItem);  //注册全局组件del-item

new Vue({
  el: "#el",
  data: {
    dataList: [],
  },
  mounted: function () {
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
                url: "//baidu.com"
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
              }
            ]
          }
        ]
      }
    ];
  },
  methods: {
    toggleShare: function (item) {
      var ev = ev || event;
      var idx = ev.target.getAttribute('index');
      var len = ev.target.parentNode.parentNode.children.length;
      item.show = false;
      for (var i = 0; i < len; i++) {
        var child = ev.target.parentNode.parentNode.children[i];
        var tagUl = child.getElementsByTagName('ul')[0];
        var tagP = child.getElementsByTagName('p')[0];
        if (i == idx) {
          if (tagP.className == '') {
            tagP.className = 'active';
            tagUl.style.display = 'block';
          } else {
            item.show = true;
          }
        } else {
          tagP.className = '';
          tagUl.style.display = 'none';
        }
      }
      //重置del
      var tagPList = ev.target.parentNode.parentNode.getElementsByTagName('p');
      for (var j = 0; j < tagPList.length; j++) {
        var t = tagPList[j].style.transform;
        if (typeof t != 'undefined' && Number(t.match(/\d+/)) > 0) {
          tagPList[j].style.transform = 'translateX(0px)';
        }
      }
      
      item.show = !item.show;
    },
    toggle: function (item) {
      this.toggleShare(item);
      
      //重置2级ul
      var ev = ev || event;
      var tagP = ev.target.nextSibling.nextSibling.getElementsByTagName('p');
      for(var i = 0;i< tagP.length;i++){
        if(tagP[i].className == 'active'){
          tagP[i].className = '';
          tagP[i].nextSibling.nextSibling.style.display = 'none';
        }
      }
    },
    toggle2(item) {
      this.toggleShare(item);

    },
  }
});
