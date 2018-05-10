<template>
  <div>
    <card-box title="购物车">
      <template slot="content">
        <table>
          <thead>
            <tr>
              <th v-for = "(item,index) in ['选择','商品信息','商品金额','商品数量','总金额','编辑']" :key="index">{{item}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in data" :key="index">
              <td><input type="checkbox" name="" id=""></td>
              <td><img :src="item.imgUrl" alt="" width="50"/>&nbsp;<span>{{item.name}}</span></td>
              <td><em>¥</em>{{item.price}}</td>
              <td>{{item.num}}</td>
              <td>{{item.totalPrice}}</td>
              <td>
                <a href="javascript:;">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
      <template slot="code"></template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import tabs_md_1 from '@/md/tabs_md_1.md';
import {data} from '@/mock/buy';

export default {
  data(){
    return {
      code1: tabs_md_1,
      data: []
    };
  },
  mounted(){
    console.log(data);
    this.data = data;
  },
  computed: {
    goodList(){
      return this.$store.state.goodList;
    }
  },
  methods: {
    
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
table{
  width: 100%;
  border: 1px solid #545c64;
  th{
    background: #545c64;
    color: #fff;
  }
  th,td{
    padding: 20px 0;
    text-align: center;
    span,img{
      display: inline-block;
      vertical-align: middle;
    }
    em{
      font-style: normal;
    }
  }
}
</style>