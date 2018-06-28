<template>
  <main class="main">
    <nav class="nav">
      <ul class="data-list" id="el">
        <li v-for="(item,index) in dataList" :key="index">
          <p @click.prevent="toggle(item)" :class="{active: item.show}"><span v-text="item.name"></span><i></i></p>
          <transition name="fade">
            <ul v-show="item.show">
              <li v-for="(item1,index1) in item.children" :key="index1">
                <p @click.prevent="toggle2(item1)" :class="{active: item1.show}"><span v-text="item1.name"></span><i></i></p>
                <transition name="fade">
                  <ul v-show="item1.show">
                    <del-component v-for="(item2,index2) in item1.children" :key="index2" :item1="item1" :item2="item2" :index2="index2"></del-component>
                  </ul>
                </transition>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>

import DelComponent from '@/components/demo/DelComponent';

export default {
  data(){
    return {
      dataList: []
    }
  },
  mounted: function() {
    var _this = this;
    var dataMock = [
      {
        name: 2018,
        children: [
          {
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
            name: "2018-02",
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
          }
        ]
      },
      {
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
    this.dataList = dataMock;
    this.dataList.forEach(function(item) {
      _this.$set(item, "show", false);
      item.children.forEach(function(item2) {
        _this.$set(item2, "show", false);
      });
    });
  },
  methods: {
    resetDelStatus: function() {
      var _this = this;
      this.dataList.forEach(function(item) {
        item.children.forEach(function(item2) {
          item2.children.forEach(function(item3) {
            if (
              typeof item3.style != "undefined" &&
              Number(item3.style.match(/\d+/)) != 0
            ) {
              _this.$set(item3, "style", "transform: translateX(0px)");
            }
          });
        });
      });
    },
    toggle: function(current) {
      this.dataList.forEach(function(item) {
        if (item == current) {
          item.show = !item.show;
        } else {
          item.show = false;
        }
        item.children.forEach(function(item2) {
          if (item2.show) {
            item2.show = false;
          }
        });
      });
      this.resetDelStatus();
    },
    toggle2(current) {
      this.dataList.forEach(function(item) {
        item.children.forEach(function(item2) {
          if (item2 == current) {
            item2.show = !item2.show;
          } else {
            item2.show = false;
          }
        });
      });
      this.resetDelStatus();
    }
  },
  components: {
    DelComponent
  }
};
</script>

<style lang="scss">
.main{
  width: 100%;
  background-color: #fff;
}

.data-list{
  li{
    position: relative;
    font-size: 16px;
    .del-btn{
      position: absolute;
      right: 0;
      top: 0;
      display: inline-block;
      width: 70px;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      background-color: #F00;
      color: #fff;
      text-align: center;
    }
    >ul{
      li{
        p{
          font-size: 15px;
          color: #666;
        }
        >ul{
          li{
            p{
              font-size: 13px;
              color: #666;
            }
          }
        }
      }
    }
    p{
      position: relative;
      padding: 0 10px;
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      transition: 0.3s;
      &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        display: block;
        width: 100%;
        border: 1px solid #f4f4f4;
        transform: scaleY(0.5);
      }
      i{
        position: absolute;
        top: 50%;
        right: 10px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border: 1px solid #666;
        border-width: 1px 1px 0 0;
        transform: translateY(-50%) rotate(45deg);
        transition:  all .3s;
      }
      &.active{
        i{
          transform: translateY(-50%) rotate(135deg);
          margin-top: -3px;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

