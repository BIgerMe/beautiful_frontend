<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-alert>
          <div
            style="align-items: center; justify-content: center;white-space: normal;"
          >
            <a
              target="_blank"
              href="https://github.com/BIgerMe/beautiful_frontend"
            >
              <img
                style="margin-right: 10px"
                alt="github收藏"
                src="https://img.shields.io/github/stars/BIgerMe/beautiful_frontend?style=social&label=github&logo=github"
              />
            </a>
            <a target="_blank" href="https://space.bilibili.com/279882228">
              <img
                style="margin-right: 10px"
                alt="bilibili"
                src="https://img.shields.io/badge/bilibili--blue?logo=bilibili&style=social"
              />
            </a>
            <a target="_blank" href="https://twitter.com/m2UzmUjSYUG24Wh">
              <img
                style="margin-right: 10px"
                alt="twitter"
                src="https://img.shields.io/badge/twitter--blue?logo=twitter&style=social"
              />
            </a>
            <img
              style="margin-right: 10px"
              alt="wechat"
              src="https://img.shields.io/badge/wechat-iyeallday-blue?logo=wechat&style=plastic"
            />
            <img
              style="margin-right: 10px"
              alt="email"
              src="https://img.shields.io/badge/Email-2260891938@qq.com-blue?style=plastic"
            />
          </div>
        </el-alert>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div v-for="(category,key) in navList">
            <el-col :lg="8">
              <a-divider orientation="left" style="font-size: 18px">
                {{key}}
              </a-divider>
              <el-card class="nav-card" style="min-height: 172px">
                <el-col v-for="(item,key) in category" v-if="key<6" :xs="24" :sm="8" >
                  <p style="max-width:100%;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;margin-bottom: 0">
                    <a :href="item.href" target='_blank' style="color: black;">
                      <img style="width:30px;height: 30px;border-radius: 50%;margin: 5px" :src="item.logo" :title="item.title" :alt="item.title">
                      {{item.title}}
                    </a>
                  </p>
                  <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;color: #00000073">{{item.content}}</p>
                </el-col>
              </el-card>
            </el-col>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { getList } from '@/api/navigation'
  export default {
    name: 'Index',
    components: {},
    data() {
      return {
        navList:[],
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      // $route: 'changeRoute',
    },
    created() {
      this.fetchData()
    },
    beforeDestroy() {},
    mounted() {},
    methods: {
      async changeRoute() {
        if (this.$route.name === 'Index') {
          setTimeout(function () {
            let video = document.getElementById('autoplayVideo')
            // video.play()
          }, 500)
        }
      },
      async fetchData() {
        await this.getNavList()
      },
      async getNavList() {
        /*文章列表*/
        const { data } = await getList([])
        this.navList = data
      },
    },
  }
</script>
<style lang="scss" scoped>
  .index-container {
    padding: 0 !important;
    margin: 0 !important;
    background: #f5f7f8 !important;
  }
</style>
