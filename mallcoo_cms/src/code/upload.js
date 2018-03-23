export const code1 =
`<template>
  <el-upload
    action="https://jsonplaceholder.typicode.com/posts/"  // element图片上传演示地址
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

<script>
export default {
  data(){
    return {
      ialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>
`;
export const code2 =
`<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"  // element图片上传演示地址
    :on-remove="handleRemove" 
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
  </el-upload>
</template>

<script>
export default {
  data(){
    return {
      imageUrl: ''
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.imageUrl = '';
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
  }
}
</script>

<style>


.avatar-uploader .el-upload:hover .avatar-uploader-icon {
  border-color: #409EFF;
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
</style>
`;