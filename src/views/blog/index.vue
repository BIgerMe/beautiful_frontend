<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24"  :md="4" :lg="4" :xl="4" style="max-height:80vh">
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
    </el-col>
    <el-col :xs="24" :sm="24"  :md="14" :lg="14" :xl="14">
      <el-card shadow="always">
        总是显示
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24"  :md="6" :lg="6" :xl="6">
      <el-card shadow="always">
        总是显示
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
  import { categoryCY } from '@/api/blog'
  import * as echarts from "echarts";
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
      overCategory(){
        console.log('123')
      },
      leaveCategory(){
        console.log('321')
      }
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
</style>
