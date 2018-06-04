<template>
  <div>
    <card-box title="基础用法">
      <template slot="content">
        <el-form ref="ruleForm" :model="ruleform" :rules="rules" label-width="120px">
          <div class="el-mc-title">申请新建</div>
          <el-form-item label="商场名称：" prop="name">
            <el-input v-model="ruleform.name"  placeholder="商场名称" class="el-mc-input-medium"></el-input>
          </el-form-item>
          <el-form-item label="英文名：">
            <el-input v-model="ruleform.englishName" placeholder="英文名" class="el-mc-input-medium"></el-input>
          </el-form-item>
          <el-form-item label="商场地址：" prop="address">
            <el-input v-model="ruleform.address" placeholder="商场地址" class="el-mc-input-medium"></el-input>
          </el-form-item>
          <el-form-item label="地图坐标：" prop="coordinate">
            <el-form-item class="el-mc-fl">
              <el-input v-model="ruleform.coordinate[0]" placeholder="经度" class="el-mc-input-xsmall"></el-input>
            </el-form-item>
            <el-form-item class="el-mc-fl">
              <el-input v-model="ruleform.coordinate[1]" placeholder="纬度" class="el-mc-input-xsmall"></el-input>
            </el-form-item>
            <el-button class="el-mc-fl" type="primary" icon="el-icon-location-outline">设定地图坐标</el-button>
          </el-form-item>

          <el-form-item label="公司logo：" prop="imgUrl">
            <div class="upload-area">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleUploadSuccess"
                :before-upload="beforePictureUpload">
                <img v-if="ruleform.imgUrl" :src="ruleform.imgUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <div class="upload-icon-btn" v-if="ruleform.imgUrl">
                <span>
                  <i class="el-icon-rank"  @click="handlePicturePreview(ruleform.imgUrl)"></i>
                  <i class="el-icon-delete" @click="handleRemove()"></i>
                </span>
              </div>
            </div>

            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>

            <div class="el-mc-example-pic">
              <span>示例：</span>
              <img :src="placeholderFigure" alt="示例图片">
            </div>
          </el-form-item>

          <div class="el-mc-title">商场运营平台配置项</div>

          <el-form-item label="产品与功能：">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group v-model="ruleform.checkedItems" @change="handleCheckedItemsChange">
              <el-checkbox v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox>
            </el-checkbox-group>
            <div class="el-mc-tip">请选择需要开通的产品与功能</div>
          </el-form-item>

          <el-form-item label="口令核销：">
            <el-switch  v-model="isSwitch"></el-switch>
            <div class="el-mc-tip">开启口令验证，用户可以通过商场口令自助验证券。</div>
            <div v-if="isSwitch">
              <el-checkbox-group v-model="ruleform.checkedItems2">
                <el-checkbox v-for="item in items2" :label="item" :key="item">{{item}}</el-checkbox>
              </el-checkbox-group>
              <el-form-item prop="verify">
                <el-input v-model="ruleform.verify" placeholder="请输入验证口令" class="el-mc-input-medium"></el-input>
              </el-form-item>
              <div class="el-mc-tip">使用模板内容(需自行补充商场联系信息)</div>
            </div>
          </el-form-item>

          <div class="el-mc-title">商场运营平台配置项</div>
            <el-form-item label="用户协议内容：">
              <el-switch  v-model="isSwitch2"></el-switch>
              <div class="el-mc-tip">开启口令验证，用户可以通过商场口令自助验证券。</div>
              <div v-if="isSwitch2">
                <el-input
                class="el-mc-input-large"
                type="textarea"
                :autosize="{ minRows: 10}"
                v-model="ruleform.textareaData">
              </el-input>
              </div>
          </el-form-item>

          <el-form-item>
            <el-button class="el-mc-fl" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button class="el-mc-fl" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import steps_md_1 from '@/md/submit_demo_md_1.md';
import default_img from '@/assets/sample-logo.png';

export default {
  data(){
    return {
      code1: steps_md_1,
      placeholderFigure: default_img,
      dialogVisible: false,
      dialogImageUrl: '',
      isIndeterminate: true,
      checkAll: false,
      isSwitch: false,
      isSwitch2: false,
      items: ['餐饮（基础版）', '餐饮（基础版2）'],
      items2: ['代金券', '折扣券', '兑换券', '优惠券', '停车券'],
      ruleform: {
        name: '',
        englishName: '',
        address: '',
        coordinate: [],
        imgUrl: default_img,
        checkedItems: [],
        checkedItems2: [],
        verify: '',
        textareaData: '',
      },
      rules: {
        name: [
          {required: true,message: '请输入商场名称',trigger: 'blur'},
          {min: 1,max: 30,message: '长度在1到30个字符',trigger: 'blur'},
        ],
        address: [
          {required: true,message: '请输入商场地址',trigger: 'blur'},
          {min: 1,max: 30,message: '长度在1到30个字符',trigger: 'blur'},
        ],
        coordinate: [
          {
            required: true,
            validator: function(rule,value,callback){
              if(value.length < 2){
                callback(new Error('请输入经纬度'));
              }else{
                var reg1 = /^[\-\+]?(0?\d{1,2}\.\d{1,5}|1[0-7]?\d{1}\.\d{1,5}|180\.0{1,5})$/;  //经度 ： -180.0～+180.0（整数部分为0～180，必须输入1到5位小数）
                var reg2 = /^[\-\+]?([0-8]?\d{1}\.\d{1,5}|90\.0{1,5})$/;                       //纬度： -90.0～+90.0（整数部分为0～90，必须输入1到5位小数）
                if(!reg1.test(value[0]) || !reg2.test(value[1])){
                  callback(new Error('输入格式错误'));
                }else{
                  callback();
                }
              }
            },
            trigger: 'blur', 
          },
        ],
        imgUrl: [
          {required: true,message: '请上传图片',trigger: 'blur'}
        ],
        verify: [
          {min: 1,max: 30,message: '长度在1到30个字符',trigger: 'blur'},
        ]
      }
    };
  },
  mounted(){
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate((valid)=>{
        if(valid){
          alert('submit!' + JSON.stringify(this.ruleform,null,4));
        }else{
          console.log('error submit!');
          return false;
        }
      });
    },
    resetForm(formName){
      this.$refs[formName].resetFields();
      this.isSwitch = false;
      this.isSwitch2 = false;
      this.ruleform.englishName = '';
      this.ruleform.checkedItems = [];
      this.ruleform.checkedItems2 = [];
      this.ruleform.verify = '';
      this.ruleform.textareaData = '';
      this.ruleform.imgUrl = '';
    },
    handleRemove(file,fileList) {
      this.ruleform.imgUrl = '';
    },
    beforePictureUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
      const isLt2M = file.size / 1024 / 1024 < 4;
      if (!isJPG) {
        this.$message.error('上传图片只能是PNG、JPG、JPEG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 4MB!');
      }
      return isJPG && isLt2M;
    },
    handlePicturePreview(file) {
      this.dialogVisible = true;
      this.dialogImageUrl = file;
    },
    handleUploadSuccess(res, file){
      this.ruleform.imgUrl = URL.createObjectURL(file.raw);
    },
    handleCheckAllChange(val) {
      this.ruleform.checkedItems = val ? this.items : [];
      this.isIndeterminate = false;
    },
    handleCheckedItemsChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.items.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.items.length;
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss">
.upload-area{
  position: relative;
  display: inline-block;
  vertical-align: top;
  .upload-icon-btn{
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 6px;
    z-index: 2;
    span{
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      i{
        padding: 8px;
        font-size: 18px;
        color: #fff;
        &:hover{
          cursor: pointer;
        }
      }
    }
    &:hover{
      background-color: rgba(0,0,0,.5);
      span{
        display: block;
      }
    }
  }
}

.avatar-uploader{
  line-height: 1;
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
}

.el-mc-example-pic{
  display: inline-block;
  margin-left: 10px;
  span{
    display: inline-block;
    vertical-align: top;
  }
  img{
    width: 150px;
    height: 150px;
  }
}
</style>
