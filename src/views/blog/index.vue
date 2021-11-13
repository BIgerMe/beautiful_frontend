<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24"  :md="4" :lg="4" :xl="4" style="max-height:80vh;">
      <a-affix :offset-top="140" >
        <el-scrollbar wrap-class="categoryList" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
          <el-card shadow="always">
          <a-menu
            style="width: auto"
            :default-selected-keys="['php']"
            mode="inline"
            theme="light"
          >
            <a-menu-item v-for="(item, index) in category" :key="index">
              {{index}}
            </a-menu-item>
          </a-menu>
        </el-card>
        </el-scrollbar>
      </a-affix>
    </el-col>
    <el-col :xs="24" :sm="24"  :md="14" :lg="14" :xl="14">
      <el-card shadow="always">
        <a-affix :offset-top="120" >
          <div style="background:white;padding: 0 0 20px 0;">
            <a-input-search placeholder="搜索内容" style="width: 300px" @search="" />
          </div>
        </a-affix>
        <a-card v-for="item in lists" class="blogCard">
          <img v-if="item.cover" :src="item.cover" slot="cover" style='width: 100%;height: 200px;object-fit: cover;'>
          <a-card-meta>
            <template slot="title">
              <h3><a>{{item.title}}</a></h3>
              <div>
                <a-tag><a>{{item.nickname}}</a></a-tag>
                <a-divider type="vertical" />
                <a-tag v-for="c in item.category"><a>{{c}}</a></a-tag>
                <a-divider type="vertical" />
                <span style='font-family:"Droid Serif",Georgia,"Times New Roman","PingFang SC","Hiragino Sans GB","Source Han Sans CN","WenQuanYi Micro Hei","Microsoft Yahei",serif'>{{item.update_at}}</span>
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
                :value="item.original_content"/>
            </template>
          </a-card-meta>
        </a-card>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24"  :md="6" :lg="6" :xl="6">
      <a-affix :offset-top="140">
        <el-card shadow="always">
          总是显示
        </el-card>
      </a-affix>
    </el-col>
  </el-row>
</template>
<script>
  import { categoryCY , lists } from '@/api/blog'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'blog',
    components: { 'mavon-editor':mavonEditor },
    data() {
      return {
        category:[],
        lists:[],
      }
    },
    created() {
      this.fetchData()
    },
    mounted() {},
    methods: {
      async fetchData(){
        /*分类*/
        let { data } = await categoryCY()
        this.category = data
        /*文章列表*/
        data = await lists()
        this.lists = data.data
      },
    },
  }
</script>
<style>
  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: 0 solid #e8e8e8!important;
  }
  .categoryList {
    max-height: 80vh;
  }
  .blogCard{
    margin-top:16px;
    border-radius: 15px;
    box-shadow: 3px 3px #4b4a50, -1em 0 0.4em black;
  }
  .ant-card-meta-description{
    max-height: 450px;
    overflow:hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 9;
    overflow: hidden;
    /*-webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
    display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
    -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。*/
  }
  .v-note-wrapper{
    z-index:1!important;
  }
  a{
    color: black;
  }
  a:hover{
    color: #1890ff;
  }
</style>
