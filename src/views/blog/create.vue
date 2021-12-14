<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="form.category" placeholder="活动区域">
              <el-option v-for="item in category" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-card class="blogCard">
          <a-card-meta>
            <template slot="description">
              <mavon-editor
                v-model="form.content" ref=md @imgAdd="$imgAdd" :toolbars="markdownOption" style="max-height:75vh"
              />
            </template>
          </a-card-meta>
        </a-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { uploadImg } from '@/api/qiniu'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'CreateBlog',
    components: { 'mavon-editor': mavonEditor },
    data() {
      return {
        form:{
          title:'',
          category:[],
          content: '',
        },
        markdownOption:{
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: false, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }
      }
    },
    methods: {
      // 绑定@imgAdd event
      async $imgAdd(pos, $file){
        // 第一步.将图片上传到服务器.
        const formdata = new FormData();
        formdata.append('file', $file);
        const { data }  = await uploadImg(formdata);
        this.$refs.md.$img2Url(pos, data[0]);
      }
    },
  }
</script>
<style scoped>
  .v-note-wrapper {
    z-index: 1 !important;
  }
  .ant-card-meta-title {
    text-align: center !important;
  }
  .ant-card-bordered {
    border: 0 !important;
  }
  /*.v-show-content{
   padding: 0;
 }*/
</style>
<style>
  .hljs {
    background: #f6f8fa !important;
  }
</style>
