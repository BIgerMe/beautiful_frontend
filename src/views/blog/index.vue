<template>
  <a-row :gutter="20">
    <a-col :xs="0" :sm="24" :md="4" :lg="4" :xl="4" class="left" style="max-height: 80vh;">
      <a-affix :offset-top="140">
        <el-scrollbar
          wrap-class="categoryList"
          wrap-style="color: red;"
          view-style="font-weight: bold;"
          view-class="view-box"
          :native="false"
        >
          <el-card class="md-card no-shadow">
            <a-menu
              style="width: auto"
              :default-selected-keys="['']"
              mode="inline"
              theme="light"
              @click="changeCategory"
            >
              <a-menu-item key="">全部</a-menu-item>
              <a-menu-item v-for="(item, index) in category" :key="index">
                {{ index }}
              </a-menu-item>
            </a-menu>
          </el-card>
        </el-scrollbar>
      </a-affix>
    </a-col>
    <a-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
      <el-card shadow="always">
        <a-affix :offset-top="120" class="center">
          <div style="background: white; padding: 0 0 20px 0">
            <a-input-search
              v-model="listQuery.key"
              placeholder="搜索内容"
              style="width: 300px"
              @search="
                listQuery.page = 1
                getList()
              "
            />
          </div>
        </a-affix>
        <a-card v-for="item in lists" class="blogCard">
          <img
            v-if="item.cover"
            slot="cover"
            :src="item.cover"
            class="cover"
          />
          <a-card-meta>
            <template slot="title">
              <h3>
                <a>
                  <router-link
                    :to="{ name: 'BlogDetail', params: { id: item.id } }"
                  >
                    {{ item.title }}
                  </router-link>
                </a>
              </h3>
              <div>
                <a-tag>
                  <a>{{ item.nickname }}</a>
                </a-tag>
                <a-divider type="vertical" />
                <a-tag v-for="c in item.category">
                  <a>{{ c }}</a>
                </a-tag>
                <a-divider type="vertical" />
                <span
                  style="
                    font-family: 'Droid Serif', Georgia, 'Times New Roman',
                      'PingFang SC', 'Hiragino Sans GB', 'Source Han Sans CN',
                      'WenQuanYi Micro Hei', 'Microsoft Yahei', serif;
                  "
                >
                  {{ item.update_at }}
                </span>
              </div>
            </template>
            <template slot="description">
              <mavon-editor
                :subfield="false"
                :default-open="'preview'"
                :toolbars-flag="false"
                :editable="false"
                :scroll-style="true"
                :ishljs="true"
                :value="item.original_content"
              />
            </template>
          </a-card-meta>
        </a-card>
      </el-card>
    </a-col>
    <a-col class="hidden-sm-and-down right" :md="6" :lg="6" :xl="6" >
      <a-affix :offset-top="140">
        <el-card align="center" class="md-card">
          <div id="cy" style="width: 300px; height: 300px;"></div>
        </el-card>
      </a-affix>
    </a-col>
  </a-row>
</template>
<script>
  import { categoryCY, lists } from '@/api/blog'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import * as echarts from 'echarts'
  import 'echarts-wordcloud'
  // import 'element-ui/lib/theme-chalk/display.css';

  export default {
    name: 'Blog',
    components: { 'mavon-editor': mavonEditor },
    data() {
      return {
        category: [],
        lists: [],
        total: 0,
        listQuery: {
          category: '',
          key: '',
          page: 1,
          pageSize: 5,
        },
        cy: {
          series: [
            {
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
                minSize: 10,
              },
              textPadding: 0,
              drawOutOfBound: false,
              textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                  // Random color
                  return (
                    'rgb(' +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(',') +
                    ')'
                  )
                },
              },
              emphasis: {
                focus: 'self',

                textStyle: {
                  shadowBlur: 10,
                  shadowColor: '#333',
                },
              },
            },
          ],
        },
        loading: false,
      }
    },
    computed: {
      noMore() {
        return this.listQuery.page * this.listQuery.pageSize >= this.total
      },
      disabled() {
        return this.loading || this.noMore
      },
    },
    activated(){
      let _this = this
      this.$nextTick(() => {
        // this.initScroll()
        window.onscroll = function () {
          //变量scrollTop是滚动条滚动时，距离顶部的距离
          var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop
          //变量windowHeight是可视区的高度
          var windowHeight =
            document.documentElement.clientHeight || document.body.clientHeight
          //变量scrollHeight是滚动条的总高度
          var scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight
          //滚动条到底部的条件
          if (scrollTop + windowHeight == scrollHeight) {
            //写后台加载数据的函数
            // console.log('距顶部' + scrollTop + '可视区高度' + windowHeight + '滚动条总高度' + scrollHeight)
            if (!_this.disabled) {
              _this.load()
            }
          }
        }
      })
    },
    created() {
      this.fetchData()
    },
    mounted() {},
    methods: {
      async fetchData() {
        /*分类*/
        let { data } = await categoryCY()
        this.category = data
        this.setCy()
        await this.getList()
      },
      async getList(push = false) {
        /*文章列表*/
        const { data } = await lists(this.listQuery)
        if (push) {
          for (let i in data.data) {
            this.lists.push(data.data[i])
          }
        } else {
          this.lists = data.data
        }
        this.total = data.total
      },
      setCy(){
        let cyData = []
        for (let index in this.category) {
          cyData.push({ name: index, value: this.category[index] })
        }
        let maskImage = new Image()
        let cyChart = echarts.init(document.getElementById('cy'))
        maskImage.src = require('@/assets/mask/twitter.png')
        maskImage.onload = () => {
          this.cy.series[0].data = cyData
          this.cy.series[0].maskImage = maskImage
          cyChart.setOption(this.cy)
          cyChart.on('click', (params)=> {
            console.log(params.data)
            this.changeCategory({'key':params.data.name})
          })
        }
      },
      changeCategory(e) {
        console.log(e)
        this.listQuery.category = e.key
        this.listQuery.page = 1
        window.scrollTo(0, 0)
        this.getList()
      },
      load() {
        this.listQuery.page = this.listQuery.page + 1
        this.getList(true)
      },
    },
  }
</script>
<style type="scss" scoped>
  @import "~@/styles/themes/neumorphism.scss";
  .left> div,.right>div{
    width: 100% !important;
    height: 100% !important;
  }
  .center{
    width:100% !important;
    height: auto!important;
  }
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 0 solid #e8e8e8 !important;
  }
  .el-scrollbar >>> .categoryList {
    max-height: 80vh;
  }
  .v-note-wrapper {
    z-index: 1 !important;
    min-height: 100px;
    max-height: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 9;
    overflow: hidden;
  }
  a {
    color: black;
  }
  a:hover {
    color: #1890ff;
  }
</style>
<style>
  .hljs {
    background: #f6f8fa !important;
  }
</style>
