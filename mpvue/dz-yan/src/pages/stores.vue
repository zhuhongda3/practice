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
      <!-- <van-field
        v-if="form.location_x !== '' && form.location_y !== ''"
        :value="form.coordinate"
        label="经纬度"
        placeholder="请选择经纬度"
        border="false"
        disabled
        :data-name="'coordinate'"
        :data-longitude="form.location_x"
        :data-latitude="form.location_y"
        @click="openLocation"
      /> -->
      <van-field
        :value="coordinate"
        label="经纬度"
        placeholder="请选择经纬度"
        border="false"
        disabled
        :data-name="'coordinate'"
        @click="selectLocation"
      />
      <van-field
        :value="provinces"
        label="省市区"
        placeholder="请选择省市区"
        border="false"
        disabled
        :data-name="'provinces'"
        @click="selectProvinces"
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

    <van-button
      type="default"
      @click="submitShopInfo"
    >修改门店信息</van-button>

    <van-popup
      :show="show"
      position="bottom"
      @touchmove.stop
      @close="onClose"
    >
      <van-area
        :area-list="areaList"
        @confirm="confirmProvinces"
        @cancel="concelProvinces"
        value="11101"
      />
    </van-popup>
  </div>
</template>

<script>
import { set_shopinfo, get_seting } from '@/api/api'
export default {
  data() {
    return {
      form: {
        shop_name: '',
        name: '',
        phone: '',
        provice: '',
        city: '',
        district: '',
        address: '',
        location_x: '',
        location_y: '',
        sale_code: '',
        sign: '',
      },
      provinces: '',
      coordinate: '',
      show: false,
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市',
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县',
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
        },
      },
    }
  },
  onLoad() {
    this.getProvice()
    this.getShopInfo()
  },
  methods: {
    getShopInfo() {
      let shopInfo = this.$store.getters.shopInfo
      console.log('shopinfo:', shopInfo)
      for (let key in this.form) {
        for (let key1 in shopInfo) {
          if (key1 == key) {
            this.form[key] = shopInfo[key]
          }
        }
      }
      this.coordinate = this.form.location_x !== '' && this.form.location_y !== '' ? `(${this.form.location_x},${this.form.location_y})` : ''
      Promise.all([])
        .then(() => {})
        .catch(() => {})
    },
    async getProvice() {
      let d = {
        api_name: 'get_seting',
        login_key: this.$store.getters.token,
        reqtime: Date.now(),
      }
      d.sign = this.$common.signCreate(['api_name', 'login_key', 'reqtime'], d)
      let res = await get_seting(d)
      if (res.return_code == 200) {
        console.log('getProvice', res)
      }
    },
    async getCity(id) {
      let d = {
        id: id,
        api_name: 'get_seting',
        login_key: this.$store.getters.token,
        reqtime: Date.now(),
      }
      d.sign = this.$common.signCreate(['api_name', 'id', 'login_key', 'reqtime'], d)
      let res = await get_seting(d)
      if (res.return_code == 200) {
        console.log('getCity', res)
      }
    },
    async getDistrict(id) {
      let d = {
        id: id,
        api_name: 'get_seting',
        login_key: this.$store.getters.token,
        reqtime: Date.now(),
      }
      d.sign = this.$common.signCreate(['api_name', 'id', 'login_key', 'reqtime'], d)
      let res = await get_seting(d)
      if (res.return_code == 200) {
        console.log('getDistrict:', res)
      }
    },
    async changeShopInfo() {
      this.form.reqtime = Date.now()
      this.form.login_key = this.$store.getters.token
      this.form.sign = this.$common.signCreate(
        ['address', 'api_name', 'city', 'district', 'location_x', 'location_y', 'login_key', 'name', 'phone', 'provice', 'reqtime', 'sale_code', 'shop_name'],
        this.form
      )

      let res = await set_shopinfo(this.form)

      if (res.return_code == 200) {
        this.$common.showToast('修改成功！')
      }
    },
    selectProvinces() {
      this.show = !this.show
    },
    onClose() {
      this.show = !this.show
    },
    concelProvinces() {
      this.show = !this.show
    },
    submitShopInfo() {
      console.log(this.form)
      this.$common.showToast('信息修改成功！')
      this.$store.dispatch('user/setIsShow', 1)
    },
    onChange(e) {
      this.form[e.currentTarget.dataset.name] = e.mp.detail
    },
    confirmProvinces(e) {
      // console.log(e)
      // console.log(e.mp.detail.index)
      // console.log(e.mp.detail.values)
      let provincesArr = e.mp.detail.values
      this.form.provice = provincesArr[0].code
      this.form.city = provincesArr[1].code
      this.form.district = provincesArr[2] ? provincesArr[2].code : ''
      this.provinces = `${provincesArr[0].name}-${provincesArr[1].name}${provincesArr[2] ? '-' + provincesArr[2].name : ''}`
      this.show = !this.show
    },
    openLocation(e) {
      this.$common.openLocation(e)
    },
    selectLocation() {
      this.$common.getWxAuth({
        authType: 'userLocation',
        title: '是否授权当前位置',
        desc: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
        successCallBack: this.chooseTheLocation,
      })
    },
    chooseTheLocation() {
      wx.chooseLocation({
        type: 'gcj02',
        success: res => {
          this.form.location_x = res.longitude
          this.form.location_y = res.latitude
          this.coordinate = `(${res.longitude},${res.latitude})`
        },
        fail: res => {
          if (res.errMsg === 'getLocation:fail:system permission denied' || res.errMsg === 'getLocation:fail:system permission deny') {
            this.$common.showModal(
              '无法获取你的位置信息',
              '请到手机系统的[设置]->[位置信息]中打开定位服务，并允许微信使用定位服务。',
              false,
              '',
              '确定',
              function() {}
            )
          }
        },
      })
    },
  },
}
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