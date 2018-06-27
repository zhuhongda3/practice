//注册一个全局组件
import Vue from 'vue'

export const testComponent = Vue.component('test-component',{
  props: ['propsData',"searchText"],
  template: `
  <div style="padding: 20px;">
    <slot></slot>
    <button :class="hasClass?'btn':''" :style="btnStyle" @click="$emit('register',propsData)">点击</button>
    <input
      type="text"
      v-bind:value="searchText"
      v-on:input="$emit('input',$event.target.value)"
    />
  </div>
  `,
  data(){
    return {
      hasClass: true,
      btnStyle: {
        'padding': '5px',
        'margin': '10px auto',
        'border': '1px solid #000',
        'background-color': '#f4f4f4',
        'color': '#999'
      }
    }
  }
});