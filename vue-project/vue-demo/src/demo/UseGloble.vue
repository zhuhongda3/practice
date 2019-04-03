<template>
  <div>
    <!-- 使用全局注册的一个测试组件 -->
    <test-component
      props-data="我是父组件传递的数据" 
      v-on:register="showMessage" 
      v-model="searchText">
      {{searchText}}
    </test-component>
  </div>
</template>

<script>
export default {
  data(){
    return{
      searchText: '我是插槽内容'
    }
  },
  methods:{
    showMessage(data){
      alert(data);
    },
  }
}
</script>

