'use strict';

var DelItem = Vue.extend({
  props: ['item1', 'item2', 'index2'],
  template: '<li ref="currentItem">' + '<a :href="item2.url">' + '<span class="del-btn" @click.prevent="deleteItem(item1.children,index2)" ref="remove">删除</span>' + '<p' + '@touchstart="_touchStart(item2)"' + '@touchmove.prevent="_touchMove(item2)"' + '@touchend="_touchEnd(item2)"' + ':style="item2.style">' + '{{item2.name}}' + '</p>' + '</a>' + '</li>',
  data: function data() {
    return {
      startX: 0, //触摸位置
      moveX: 0, //滑动时的位置
      disX: 0 //移动距离
    };
  },
  methods: {
    computeStyle: function computeStyle(result) {
      return 'transform: translateX(' + result + 'px)';
    },
    _touchStart: function _touchStart(current) {
      var ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      var _this = this;
      if (ev.touches.length == 1) {
        if (typeof current.style != 'undefined' && current.style != null && current.style.match(/\d+/)[0] == String(w)) ev.preventDefault();
        this.item1.children.forEach(function (item) {
          if (item == current) return false;
          if (typeof item.style != 'undefined' && item.style != null && item.style.match(/\d+/)[0] == String(w)) {
            _this.$set(item, 'style', _this.computeStyle('0'));
            ev.preventDefault();
          }
        });
        this.startX = ev.touches[0].clientX;
      }
    },
    _touchMove: function _touchMove(current) {
      var ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      if (ev.touches.length == 1) {
        this.moveX = ev.touches[0].clientX;
        this.disX = this.startX - this.moveX;
        if (this.disX < 0 || this.disX == 0) {
          this.$set(current, 'style', this.computeStyle('0'));
        } else {
          this.$set(current, 'style', this.computeStyle('-' + this.disX));
          if (this.disX >= w) {
            this.$set(current, 'style', this.computeStyle('-' + w));
          }
        }
      }
    },
    _touchEnd: function _touchEnd(current) {
      var ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      if (ev.changedTouches.length == 1) {
        var endX = ev.changedTouches[0].clientX;
        this.disX = this.startX - endX;
        if (this.disX < w / 2) {
          this.$set(current, 'style', this.computeStyle('0'));
        } else {
          this.$set(current, 'style', this.computeStyle('-' + w));
        }
      }
    },
    deleteItem: function deleteItem(item, index) {
      item.splice(index, 1);
    }
  }
});

Vue.component('del-item', DelItem); //注册全局组件del-item

new Vue({
  el: "#el",
  data: {
    dataList: []
  },
  mounted: function mounted() {
    this.dataList = [{
      name: 2018,
      children: [{
        name: "2018-01",
        children: [{
          name: "文章1",
          url: "//baidu.com"
        }, {
          name: "文章2",
          url: "//baidu.com"
        }]
      }, {
        name: "2018-02",
        children: [{
          name: "文章1",
          url: "//baidu.com"
        }, {
          name: "文章2",
          url: "//baidu.com"
        }]
      }]
    }, {
      name: 2017,
      children: [{
        show: false,
        name: "2017-01",
        children: [{
          name: "文章1",
          url: "#"
        }, {
          name: "文章2",
          url: "#"
        }]
      }, {
        name: "2017-02",
        children: [{
          name: "文章1",
          url: "#"
        }, {
          name: "文章2",
          url: "#"
        }]
      }]
    }];
    var _this = this;
    this.dataList.forEach(function (item) {
      _this.$set(item, 'show', false);
      item.children.forEach(function (item2) {
        _this.$set(item2, 'show', false);
      });
    });
  },
  methods: {
    resetDelStatus: function resetDelStatus() {
      var _this = this;
      this.dataList.forEach(function (item) {
        item.children.forEach(function (item2) {
          item2.children.forEach(function (item3) {
            if (typeof item3.style != 'undefined' && Number(item3.style.match(/\d+/)) != 0) {
              _this.$set(item3, 'style', 'transform: translateX(0px)');
            }
          });
        });
      });
    },
    toggle: function toggle(current) {
      this.dataList.forEach(function (item) {
        if (item == current) {
          item.show = !item.show;
        } else {
          item.show = false;
        }
        item.children.forEach(function (item2) {
          if (item2.show) {
            item2.show = false;
          }
        });
      });
      this.resetDelStatus();
    },
    toggle2: function toggle2(current) {
      this.dataList.forEach(function (item) {
        item.children.forEach(function (item2) {
          if (item2 == current) {
            item2.show = !item2.show;
          } else {
            item2.show = false;
          }
        });
      });
      this.resetDelStatus();
    }
  }
});
//# sourceMappingURL=main.js.map
