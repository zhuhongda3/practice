<template>
  <li ref="currentItem">
    <a :href="item2.url">
    <span class="del-btn" @click.prevent="deleteItem(item1.children,index2)" ref="remove">删除</span>
    <p
      @touchstart="_touchStart(item2)"
      @touchmove.prevent="_touchMove(item2)"
      @touchend="_touchEnd(item2)"
      :style="item2.style"
      v-text="item2.name">
    </p>
    </a>
  </li>
</template>

<script>
export default {
  props: ['item1', 'item2', 'index2'],
  data: function () {
    return {
      startX: 0, //触摸位置
      moveX: 0, //滑动时的位置
      disX: 0, //移动距离
    };
  },
  methods: {
    computeStyle: function (result) {
      return 'transform: translateX(' + result + 'px)';
    },
    _touchStart: function (current) {
      var ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      var _this = this;
      if (ev.touches.length == 1) {
        if (typeof current.style != 'undefined' && current.style != null && Number(current.style.match(/\d+/)[0]) == w) ev.preventDefault();
        this.item1.children.forEach(function (item) {
          if(item == current) return false;
          if (typeof item.style != 'undefined' && item.style != null && Number(item.style.match(/\d+/)[0]) == w) {
            _this.$set(item,'style',_this.computeStyle('0'));
            ev.preventDefault();
          }
        });
        this.startX = ev.touches[0].clientX;
      }
    },
    _touchMove: function (current) {
      var ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      if (ev.touches.length == 1) {
        this.moveX = ev.touches[0].clientX;
        this.disX = this.startX - this.moveX;
        if (this.disX < 0 || this.disX == 0) {
          this.$set(current,'style',this.computeStyle('0'));
        } else {
          this.$set(current,'style',this.computeStyle('-' + this.disX));
          if (this.disX >= w) {
            this.$set(current,'style',this.computeStyle('-' + w));
          }
        }
      }
    },
    _touchEnd: function (current) {
      var ev = ev || event;
      var w = this.$refs.remove.offsetWidth;
      if (ev.changedTouches.length == 1) {
        var endX = ev.changedTouches[0].clientX;
        this.disX = this.startX - endX;
        if (this.disX < w / 2) {
          this.$set(current,'style',this.computeStyle('0'));
        } else {
          this.$set(current,'style',this.computeStyle('-' + w));
        }
      }
    },
    deleteItem: function (item, index) {
      item.splice(index, 1);
    }
  }
}
</script>
