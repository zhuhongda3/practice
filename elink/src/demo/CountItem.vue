<template>
  <div>
    <span>doneTodosCount:{{doneTodosCount}}</span><br>
    <span>{{count}}</span>
    <button @click="incrementAsync">++</button>
    <button @click="decrement">--</button><br>
  </div>
</template>

<script>
import { mapGetters,mapMutations,mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    ...mapActions([
      'incrementAsync'  //将 this.incrementAsync 方法映射为 this.$store.dispatch('incrementAsync')
    ])
  },
  computed: {
    ...mapGetters([
      // "getCount"
      "doneTodosCount"
    ]),
    ...mapGetters({
      count: 'getCount'  //将 this.count 映射为 this.$store.commit('getCount')
    })
  }
};
</script>

<style lang="scss" scoped>
span {
  color: #f00;
}
</style>


