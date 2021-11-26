<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-card class="blogCard">
          <a-card-meta>
            <template slot="title">
              <h2 style="text-align:center">{{detail.title}}</h2>
              <div style="text-align:center">
                <a-tag><a>{{detail.nickname}}</a></a-tag>
                <a-divider type="vertical" />
                <a-tag v-for="c in detail.category"><a>{{c}}</a></a-tag>
                <a-divider type="vertical" />
                <span style='font-family:"Droid Serif",Georgia,"Times New Roman","PingFang SC","Hiragino Sans GB","Source Han Sans CN","WenQuanYi Micro Hei","Microsoft Yahei",serif'>{{detail.update_at}}</span>
              </div>
            </template>
            <template slot="description">
              <mavon-editor
                :subfield = "false"
                :defaultOpen = "'preview'"
                :toolbarsFlag = "false"
                :editable="false"
                :scrollStyle="true"
                :ishljs = "true"
                :value="detail.original_content"/>
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
    name: 'blogDetail',
    components: { 'mavon-editor':mavonEditor },
    data() {
      return {
        detail:{},
      }
    },
    created() {
      this.fetchData()
    },
    mounted() {},
    methods: {
      async fetchData(){
          const { data } = await detail({id:this.$route.params.id})
          this.detail = data.data
      }
    },
  }
</script>
<style lang="scss" scoped>
 .v-note-wrapper{
    z-index:1!important;
  }
  .ant-card-meta-title{
    text-align: center !important;
  }
</style>
