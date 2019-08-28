<template>
  <div class="stores-body">
    <van-cell-group>
      <van-field
        :value="form.shop_name"
        label="门店名称"
        placeholder="请输入门店名称"
        border="false"
        :data-name="'shop_name'"
        @change="onChange"
      />
      <van-field
        :value="form.name"
        label="店长姓名"
        placeholder="请输入店长姓名"
        border="false"
        :data-name="'name'"
        @change="onChange"
      />
      <van-field
        :value="form.phone"
        label="联系电话"
        placeholder="请输入联系电话"
        border="false"
        :data-name="'phone'"
        @change="onChange"
      />
      <van-field
        :value="form.address"
        label="门店地址"
        placeholder="请输入门店地址"
        border="false"
        :data-name="'address'"
        @change="onChange"
      />
    </van-cell-group>

    <van-button type="default" @click="changeShopInfor">修改门店信息</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        shop_name: '',
        name: '',
        phone: '',
        address: ''
      }
    };
  },
  methods: {
    changeShopInfor(){
      console.log(this.form)
    }, 
    onChange(e){
      this.form[e.currentTarget.dataset.name] = e.mp.detail
    }
  }
};
</script>
<style lang="scss">
page{
  background-color: #f4f4f4;
}
.van-button{
   width: 100%;
   margin-top: 10px;
 }
</style>
<style lang="scss" scoped>
 
</style>