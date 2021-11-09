<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-alert v-if="noticeList[0]" :closable="noticeList[0].closable">
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
                src="https://img.shields.io/github/stars/BIgerMe/beautiful_frontend?style=flat-square&label=Stars&logo=github"
              />
            </a>
            <p style="margin: auto!important;">网站未引入用户概念，所有内容开放，希望可以方便到大家~</p>
          </div>
        </el-alert>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="11" :xl="11">
        <el-card class="card" shadow="never">
          <video class="war3-homepage-video" style="width:100%" id="autoplayVideo" autoplay muted loop>
            <source src="http://video.xxroom.xyz/%E6%A8%B1%E8%8A%B1.mp4" type="video/mp4" />
            <source src="http://video.xxroom.xyz/%E6%A8%B1%E8%8A%B1" type="video/webm" />
          </video>
        </el-card>

        <el-card shadow="never">
          <el-col
            v-for="(item, index) in iconList"
            :key="index"
            :xs="24"
            :sm="12"
            :md="6"
            :lg="6"
            :xl="6"
          >
            <router-link :to="item.link" target="_blank">
              <el-card class="icon-panel" shadow="never">
                <vab-icon
                  :style="{ color: item.color }"
                  :icon="['fas', item.icon]"
                ></vab-icon>
                <p>{{ item.title }}</p>
              </el-card>
            </router-link>
          </el-col>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card shadow="never">
          <div slot="header">
            <span>博客分类</span>
          </div>
<!--          <vab-chart id="cy" autosize theme="vab-echarts-theme" :option="cy" />-->
          <div style="width:100%;height:300px" id="cy"></div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card shadow="never">
          <div slot="header">
            <span>访问量</span>
          </div>
          <vab-chart theme="vab-echarts-theme" :option="fwl" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VabChart from '@/plugins/echarts'
  import { dependencies, devDependencies } from '../../../package.json'
  import { categoryCY } from '@/api/blog'
  import Plan from './components/Plan'
  import VersionInformation from './components/VersionInformation'
  import * as echarts from 'echarts'
  import 'echarts-wordcloud';
  export default {
    name: 'Index',
    components: {
      VabChart,
      Plan,
      VersionInformation,
    },
    data() {
      return {
        timer: 0,
        updateTime: process.env.VUE_APP_UPDATE_TIME,
        nodeEnv: process.env.NODE_ENV,
        dependencies: dependencies,
        devDependencies: devDependencies,
        config1: {
          startVal: 0,
          endVal: this.$baseLodash.random(20000, 60000),
          decimals: 0,
          prefix: '',
          suffix: '',
          separator: ',',
          duration: 8000,
        },
        config2: {
          startVal: 0,
          endVal: this.$baseLodash.random(1000, 20000),
          decimals: 0,
          prefix: '',
          suffix: '',
          separator: ',',
          duration: 8000,
        },
        config3: {
          startVal: 0,
          endVal: this.$baseLodash.random(1000, 20000),
          decimals: 0,
          prefix: '',
          suffix: '',
          separator: ',',
          duration: 8000,
        },
        //访问量
        fwl: {
          grid: {
            top: '4%',
            left: '2%',
            right: '4%',
            bottom: '0%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: [],
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: '访问量',
              type: 'line',
              data: [],
              smooth: true,
              areaStyle: {},
            },
          ],
        },
        //词云
        cy: {
          series: [{
            type: 'wordCloud',
            shape: 'circle',
            // maskImage: maskImage,
            maskImage: '',
            left: 'center',
            top: 'center',
            width: '100%',
            height: '100%',
            right: null,
            bottom: null,
            sizeRange: [10, 60],
            rotationRange: [-45, 90],
            autoSize: {
              enable: true,
              minSize: 10
            },
            textPadding: 0,
            drawOutOfBound: false,
            textStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            },
            emphasis: {
              focus: 'self',

              textStyle: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: [
              {
                name: 'vue-admin-beautiful',
                value: 15000,
              },
              {
                name: 'element',
                value: 10081,
              },
              {
                name: 'beautiful',
                value: 9386,
              },

              {
                name: 'vue',
                value: 6500,
              },
              {
                name: 'chuzhixin',
                value: 6000,
              },
              {
                name: 'good',
                value: 4500,
              },
              {
                name: 'success',
                value: 3800,
              },
              {
                name: 'never',
                value: 3000,
              },
              {
                name: 'boy',
                value: 2500,
              },
              {
                name: 'girl',
                value: 2300,
              },
              {
                name: 'github',
                value: 2000,
              },
              {
                name: 'hbuilder',
                value: 1900,
              },
              {
                name: 'dcloud',
                value: 1800,
              },
              {
                name: 'china',
                value: 1700,
              },
              {
                name: '1204505056',
                value: 1600,
              },
              {
                name: '972435319',
                value: 1500,
              },
              {
                name: 'young',
                value: 1200,
              },
              {
                name: 'old',
                value: 1100,
              },
              {
                name: 'vuex',
                value: 900,
              },
              {
                name: 'router',
                value: 800,
              },
              {
                name: 'money',
                value: 700,
              },
              {
                name: 'qingdao',
                value: 800,
              },
              {
                name: 'yantai',
                value: 9000,
              },
              {
                name: 'author is very cool',
                value: 9200,
              },
            ]
          }],
        },

        //更新日志
        reverse: true,
        activities: [],
        noticeList: [],
        //其他信息
        userAgent: navigator.userAgent,
        //卡片图标
        iconList: [
          {
            icon: 'laptop-code',
            title: '源码',
            link: 'https://github.com/chuzhixin/vue-admin-beautiful',
            color: '#b37feb',
          },
          {
            icon: 'book',
            title: '书籍',
            link: '',
            color: '#69c0ff',
          },
          {
            icon: 'bullhorn',
            title: '公告',
            link: '',
            color: '#ff85c0',
          },
          {
            icon: 'coffee',
            title: '休息一下',
            link: '',
            color: '#95de64',
          },
        ],
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'changeRoute'
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    mounted() {},
    methods: {
      handleClick(e) {
        this.$baseMessage(`点击了${e.name},这里可以写跳转`)
      },
      handleZrClick(e) {},
      handleChangeTheme() {
        this.$baseEventBus.$emit('theme')
      },
      async changeRoute(){
        if( this.$route.name === 'Index' ){
          setTimeout(function () {
            let video = document.getElementById('autoplayVideo')
            video.play()
          }, 500);
        }
      },
      async fetchData() {
        const { data } = await categoryCY()
        let cyData = []
        for(let index in data){
          cyData.push({'name': index,'value': data[index]})
        }
        let maskImage = new Image()
        let cyChart = echarts.init(document.getElementById('cy'));
        maskImage.src = require('@/assets/mask/twitter.png')
        maskImage.onload = ()=>{
          this.cy.series[0].data = cyData
          this.cy.series[0].maskImage = maskImage
          console.log(this.cy)
          cyChart.setOption(this.cy)
          cyChart.on('click',function(params){
            console.log(params)
          })
        }
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
