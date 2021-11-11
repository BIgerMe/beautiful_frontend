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
      <el-card shadow="always" style="height:2000px">
        <a-affix :offset-top="120" >
          <div style="background:white">
            <a-input-search placeholder="搜索内容" style="width: 300px" @search="" />
          </div>
        </a-affix>
        <a-card class="blogCard">
          <img src="http://head.xxroom.xyz/FvIdoCa7PxkSZVG1Gca78TSF6z-m" slot="cover" style='width: 100%;height: 200px;object-fit: cover;'>
          <a-card-meta title="Europe Street beat">
            <template slot="description">
              www.instagram.com
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
  import { categoryCY } from '@/api/blog'
  // import $ from 'jQuery'
  export default {
    name: 'blog',
    data() {
      return {
        category:[]
      }
    },
    created() {
      this.fetchData()
    },
    mounted() {},
    methods: {
      async fetchData(){
        const { data } = await categoryCY()
        this.category = data
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
</style>
