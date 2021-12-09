<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-card class="blogCard">
          <a-card-meta>
            <template slot="description">
              <mavon-editor
                :subfield="false"
                :default-open="'preview'"
                :toolbars-flag="false"
                :editable="true"
                :scroll-style="true"
                :ishljs="true"
                :value="detail"
              />
            </template>
          </a-card-meta>
        </a-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { detail } from '@/api/blog'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'CreateBlog',
    components: { 'mavon-editor': mavonEditor },
    data() {
      return {
        detail: {},
      }
    },
    created() {},
    mounted() {},
    methods: {},
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
