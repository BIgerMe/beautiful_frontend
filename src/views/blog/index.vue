<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24"  :md="4" :lg="4" :xl="4">
      <el-card shadow="category">
        <a-menu
          style="width: auto"
          :default-selected-keys="['php']"
          mode="inline"
          theme="light"
        >
          <a-menu-item key="php">
            php
          </a-menu-item>
          <a-menu-item key="python">
            python
          </a-menu-item>
        </a-menu>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24"  :md="6" :lg="6" :xl="6">
      <el-card shadow="always">
        总是显示
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24"  :md="14" :lg="14" :xl="14">
      <el-card shadow="always">
        总是显示
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: 'Test',
    data() {
      return { show: true }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style>
  .ant-menu-vertical{
    border-right: 0 !important;
  }
</style>
