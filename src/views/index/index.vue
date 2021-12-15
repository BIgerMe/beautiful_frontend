<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-alert>
          <div
            style="display: flex; align-items: center; justify-content: center"
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
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <!--<el-card class="card" shadow="never">
          <video class="war3-homepage-video" style="width:100%" id="autoplayVideo" autoplay muted loop>
            <source src="http://video.xxroom.xyz/%E6%A3%AE%E6%9E%97.mp4" type="video/mp4" />
            <source src="http://video.xxroom.xyz/%E6%A8%B1%E8%8A%B1" type="video/webm" />
          </video>
        </el-card>-->
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card shadow="always">
          <div v-for="(category,key) in navList">
            <a-divider orientation="left" style="font-size: 18px">
              {{key}}
            </a-divider>
            <el-col v-for="item in category" :xs="24" :sm="8" :md="4" :lg="4" :xl="4">
              <el-card>
                <a :href="item.href" target='_blank' style="color: black">
                  <img style="width:40px;height: 40px;border-radius: 50%;margin: 5px" :src="item.logo" :title="item.title" :alt="item.title">
                    {{item.title}}
                </a>
                <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;color: #00000073">{{item.content}}</p>
              </el-card>
            </el-col>
          </div>
        </el-card>
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

    ::v-deep {
      .el-alert {
        padding: $base-padding;

        &--info.is-light {
          min-height: 82px;
          padding: $base-padding;
          margin-bottom: 15px;
          color: #909399;
          background-color: $base-color-white;
          border: 1px solid #ebeef5;
        }
      }

      .el-card__body {
        .echarts {
          width: 100%;
          height: 115px;
        }
      }
    }

    .card {
      ::v-deep {
        .el-card__body {
          .echarts {
            width: 100%;
            height: 305px;
          }
        }
      }
    }

    .bottom {
      padding-top: 20px;
      margin-top: 5px;
      color: #595959;
      text-align: left;
      border-top: 1px solid $base-border-color;
    }

    .table {
      width: 100%;
      color: #666;
      border-collapse: collapse;
      background-color: #fff;

      td {
        position: relative;
        min-height: 20px;
        padding: 9px 15px;
        font-size: 14px;
        line-height: 20px;
        border: 1px solid #e6e6e6;

        &:nth-child(odd) {
          width: 20%;
          text-align: right;
          background-color: #f7f7f7;
        }
      }
    }

    .icon-panel {
      height: 117px;
      text-align: center;
      cursor: pointer;

      svg {
        font-size: 40px;
      }

      p {
        margin-top: 10px;
      }
    }

    .bottom-btn {
      button {
        margin: 5px 10px 15px 0;
      }
    }
  }
</style>
