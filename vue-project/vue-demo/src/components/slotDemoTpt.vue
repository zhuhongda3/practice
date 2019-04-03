<template>
    <div>
        <!-- 单个插槽 -->
        <div>
            <h1>我是父组件的标题-<em class="red-cor">单个插槽</em></h1>
            <my-component>
                <p>这是一些初始内容</p>
                <p>这是更多的初始内容</p>
            </my-component>
        </div>

        <!-- 具名插槽 -->
        <app-layout>    
            <h1 slot="header">这里可能是一个页面标题-<em class="red-cor">具名插槽</em></h1>
            <p>主要内容的一个段落。</p>
            <p>另一个主要段落。</p>
            <p slot="footer">这里有一些联系信息</p>
        </app-layout>

        <!-- 作用域插槽 -->
        <div class="parent">
            <child>
                <template slot-scope="props">      
                    <!-- 老版slot-scope属性只能写在template里面，新版的可以写在任意元素里面 -->
                    <h3><em class="red-cor">作用域插槽</em></h3>
                    <span>hello from parent</span><br>
                    <span>{{ props.text }}</span>
                </template>
            </child>
        </div>
        
        <!-- 常见使用场景ul-li -->
        <temp-list :items="items">
            <li
                slot="item"
                slot-scope="props" 
                class="my-fancy-item">
                {{ props.text }}
            </li>
        </temp-list>
    </div>
</template>

<script>
// 引入组件
import appLayout from "./slotDemo"; //具名插槽
import myComponent from "./slotDemo2"; //单个插槽
import child from "./slotDemo3"; //作用域插槽-slot-scope
import tempList from "./slotDemo4"; //作用域插槽-常见使用场景ul-li

export default {
  data() {
    return {
      //传递给子组件tempList的数据
      items: [{ text: 1 }, { text: 2 }, { text: 3 }]
    };
  },
  components: {
    //注册组件
    appLayout,
    myComponent,
    child,
    tempList
  }
};
</script>

<style scoped>
.red-cor {
  color: red;
  font-style: normal;
}
</style>

