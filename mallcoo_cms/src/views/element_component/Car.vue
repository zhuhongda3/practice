<template>
  <div>
    <card-box title="商品列表">
      <template slot="content">
        <div class="img-item-wrap">
          <div class="img-item clearfix" v-for="item in dataList" :key="item.id" @click="foodDetail(item.id)">
            <div class="img-inner" style="float: left;">
              <img :src="item.imgUrl" alt="" width="80" height="80">
            </div>
            <div class="item-con" style="float: left;">
              <h3>{{item.name}}</h3>
              <p>{{item.price | formatData}}</p>
            </div>
          </div>
        </div>
      </template>
      <template slot="code"></template>
    </card-box>

    <card-box title="商品详情">
      <template slot="content">
        <div class="food-detail" v-if="dataSimple.length != 0">
           <div v-for="item in dataSimple" :key="item.id">
             <img :src="item.imgUrl" alt="" width="50"/>
             <h3>{{item.name}}</h3>
             <p>单价：{{item.price | formatData}}</p>
             <p>
               类型：
                <el-radio-group v-model="item.type" size="small">
                  <el-radio-button label="S"></el-radio-button>
                  <el-radio-button label="M"></el-radio-button>
                  <el-radio-button label="L"></el-radio-button>
                  <el-radio-button label="XL"></el-radio-button>
                  <el-radio-button label="XXL"></el-radio-button>
                  <el-radio-button label="XXXL"></el-radio-button>
                </el-radio-group>
             </p>
             <p>数量：<el-input-number v-model="item.number" :min="1" size="small"></el-input-number></p>
             <div style="margin-top: 10px;">
              <p>总金额：{{item.price*item.number | formatData}}</p>
              <el-button size="small" @click="addGood(item)">加入购物车</el-button>
             </div>
           </div>
        </div>
      </template>
      <template slot="code"></template>
    </card-box>

    <card-box title="购物车">
      <template slot="content">
        <el-table
          ref="mutipleTable"
          :data="getGoodList"
          tooltip-effect="dark"
          style="width: 100%;"
          @select="handleSelectionChange"
          @select-all="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="商品信息"
            width="120">
            <template slot-scope="scope"><img :src="scope.row.imgUrl" alt="" width="40"/> {{scope.row.name}}</template>
          </el-table-column>
          <el-table-column
            label="商品类型"
            width="120">
            <template slot-scope="scope">
              {{scope.row.type}}
            </template>
          </el-table-column>
          <el-table-column
            label="商品金额"
            width="120">
            <template slot-scope="scope">{{scope.row.price | formatData}}</template>
          </el-table-column>
          <el-table-column
            label="商品数量"
            width="200">
            <template slot-scope="scope"><el-input-number @change="changeNumber(scope.$index)" v-model="scope.row.number" :min="1" size="small"></el-input-number></template>
          </el-table-column>
          <el-table-column
            label="总金额"
            width="120">
            <template slot-scope="scope">{{scope.row.price*scope.row.number | formatData}}</template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="auto">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, getGoodList)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div v-if="getGoodList">
          <p>总价：{{sum | formatData}}</p>
        </div>
      </template>
      <template slot="code"></template>
    </card-box>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import CardBox from '@/components/share/CardBox';
import tabs_md_1 from '@/md/tabs_md_1.md';
// import foodsdetail from '@/mock/cardData/foodsdetail.json'

export default {
  data(){
    return {
      code1: tabs_md_1,
      data:[],
      inputnumber: 1,
      dataSimple:[],
      dataDetail: [],
      dataList: []
    };
  },
  filters:{
    formatData(value){
      return '￥'+value.toFixed(2);
    }
  },
  mounted(){
    //高亮显示购物车已选中项
    this.$nextTick(()=>{
      this.getCurrentSelRow();

      this.$http.get('/api/foodslist').then(res=>{
        this.dataList = res.data.data;
      }).catch(err=>{
        console.log(err);
      });

      this.$http.get('/api/foodsdetail').then(res=>{
        this.dataDetail = res.data.data;
      }).catch(err=>{
        console.log(err);
      });

    });
  },
  computed: {
    ...mapGetters(
      ["sum"]
    ),  
    getGoodList(){
      return this.$store.state.goodsList;
    }
  },
  methods: {
    ...mapMutations(
        ["deleteGoods","updateGoods","addGoods"]
    ),
    getCurrentSelRow(){
       this.getGoodList.forEach((item,index) => {
        if(item.select){
          this.$refs.mutipleTable.toggleRowSelection(item,true);   
        }
      });
    },
    deleteRow(index, rows) {
      // rows.splice(index, 1);
      this.deleteGoods(index);
    },
    findPosition(id){
      return this.getGoodList.findIndex(item => {
        return item.id == id;
      });
    },
    toggleSelect(id){
      var i=this.findPosition(id);
      var select=this.getGoodList[i].select;
      this.updateGoods({
          index:i,
          key:"select",
          value:select
      });
    },
    handleSelectionChange(val) {
      this.getGoodList.forEach(item => {
        item.select = false;
        val.forEach(item2 => {
          if(item2.id == item.id){
            item.select = true;
            return false;
          }
        });
        this.toggleSelect(item.id);
      });
    },
    foodDetail(id){
      this.dataSimple = [];
      this.dataDetail.filter(item => {
        if(item.id == id){
          this.dataSimple.push(item);
        }
      });
    },
    changeNumber(i){
      var number = this.getGoodList[i].number;
      this.updateGoods({
        index: i,
        key: "number",
        value: number
      });
    },
    addGood(data){
      if(data.type == ''){
        this.$message({
          message:'请选择商品类型',
          type:'warning',
          showClose: true
        });
      }else{
        this.addGoods(data);
        location.reload();
      }
    },
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
  }
}
.img-item-wrap{
  display: flex;
  justify-content:space-between;
}
.img-item{
  width: 30%;
  padding: 10px;
  background-color: #f4f4f4;
  margin-top: 10px;
  cursor: pointer;
  img{
    margin-right: 10px;
    vertical-align: middle;
  }
}
</style>