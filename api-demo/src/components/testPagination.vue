<template>
  <v-pagination></v-pagination>
</template>

<script>
import pagination from './customerPagination';

export default {
  data() {
    return {
      total: 150, // 记录总条数
      display: 10, // 每页显示条数
      current: 1 // 当前的页数
    };
  },
  components: {
    "v-pagination": pagination
  }
};
</script>
