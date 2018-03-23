<template>
  <div>
    <card-box title="图片墙(上传多张图片，可以限制上传数量,可预览)">
      <template slot="content">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :limit="3"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          <div slot="tip" class="el-upload__tip">最多只能上传3张图片</div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="单张图片上传(加了上传限制条件，可自定义上传框样式)">
      <template slot="content">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-remove="handleRemove"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
        </el-upload>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>
    
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2} from '@/code/upload';

export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.imageUrl = '';
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 或 png 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
.avatar-uploader {
  .el-upload{
    &:hover{
      .avatar-uploader-icon {
        border-color: #409EFF;
      }
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
}
</style>