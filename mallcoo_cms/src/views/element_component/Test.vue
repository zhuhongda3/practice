<template>
  <div>
    <input type="text" v-focus v-model="data1">
  </div>
</template>

<script>
export default {
  data(){
    return{
      data1:''
    }
  },
  //自定义指令
  directives: {
    focus: {
      inserted(el){
        el.focus()
      }
    }
  },
  mounted(){
    this.showAlert();
  },
  methods:{
    showAlert(){
      this.data1 = 'aa';
    }
  },
  components:{

  }
}
</script>

