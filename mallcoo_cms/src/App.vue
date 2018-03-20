<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.clearfix{
  &:before,
  &:after{
    content: '';
    display: table;
    clear: both;
  }
}
body{
  background-color: #f4f4f4;
}
@import './assets/normalize.scss';
</style>
