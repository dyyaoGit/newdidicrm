<template>
  <div class="container">
    <el-form label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="formData.author"></el-input>
      </el-form-item>
      <el-form-item label="头图">

        <el-upload
          :multiple="false"
          :show-file-list="false"
          class="avatar-uploader"
          action="https://up-z1.qiniup.com"
          :data="{token: 'hiaSMM1QqBT-0Q0KywiDrpp_tXbgBz8p1mFXkoil:Wxo68sM6rKu4cZq53yL6qggM0to=:eyJzY29wZSI6ImRpZGkiLCJkZWFkbGluZSI6MTUyMTU3ODU2N30='}"
          :on-success="upload"
        >
          <img v-if="formData.img" :src="formData.img" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <label id="container"
               style="
        width: 100px;height: 50px;border: 1px solid #000;
        line-height: 50px;text-align: center;">
          <input type="file" hidden id="btn">
          添加图片到富文本
        </label>
      </el-form-item>
      <el-form-item>
        <editor v-model="formData.content" @change="getText"></editor>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import editor from '@/components/editor/index'
  import qiniu from '../../util/qiniu'

  export default {
    name: '',
    components: {
      editor
    },
    data() {
      return {
        formData: {
          title: '',
          author: '',
          img: '',
          content: '',
          contentText: ''
        },
        imageUrl: ''
      }
    },
    methods: {
      upload(res) {
        this.formData.img = `http://image.yaojunrong.com/${res.key}`
      },
      getText(val) {
        this.formData.contentText = val;
      },
      submit() {
        this.$axios.post('addNews',this.formData).then(res => {
          console.log(res)
        })
      },
      addPhoto() {
        this.$axios.qiniuGet().then(res => {
          qiniu({button: "btn",container: 'container',token: res.data},(data) => {
            this.formData.content += `<img src="http://image.yaojunrong.com/${data.key}">`
            console.log(data)
          })
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created() {
      this.addPhoto();
    }
  }
</script>


<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<style scoped>
  .container {
    padding-right: 20px;
  }

</style>
