<template>
  <ul>
    <slot name="item" v-for="item in items" :text="item.text">
        <!-- 这里写入备用内容 -->
    </slot>
  </ul>
</template>
<script>
export default {
  //为items指定验证规则，如不需要验证可直接通过props['items']方式传入
  props:{
      items:Array
  }
}
</script>

