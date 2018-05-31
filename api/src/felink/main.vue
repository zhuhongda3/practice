<template>
  <div class="wrapper">
    <siderBar></siderBar>
    <wrapper></wrapper>
    <cfooter></cfooter>
  </div>
</template>

<script>
import siderBar from './siderBar';
import wrapper from './wrapper';  
import cfooter from './footer'; 
        
export default {
  data () {
    return {
      
    }
  },
  components:{
    siderBar,
    wrapper,
    cfooter
  }
}
</script>

