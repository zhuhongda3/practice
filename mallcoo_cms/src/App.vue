<template>
  <div id="app">
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
  min-width: 1280px;
  background-color: #f4f4f4;
}
@import './assets/normalize.scss';
</style>
