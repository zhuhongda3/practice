<template>
  <div>
    <template-box title="卡片">
      <template slot="content"></template>
      <template slot="code">{{code}}</template> 
    </template-box>
  </div>
</template>

<script>
import TemplateBox from '@/components/share/CardBox';
import {a} from '@/code/test';

export default {
  data(){
    return {
      code: a,
    };
  },
  components:{
    TemplateBox,
  },
}
</script>