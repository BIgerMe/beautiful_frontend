<template>
  <el-row :gutter="20">
    <el-col :xs="0" :sm="24" :md="4" :lg="4" :xl="4" style="max-height: 80vh">
      <a-affix :offset-top="140">
        <el-scrollbar
          wrap-class="categoryList"
          wrap-style="color: red;"
          view-style="font-weight: bold;"
          view-class="view-box"
          :native="false"
        >
          <el-card shadow="always">
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
    </el-col>
    <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
      <el-card shadow="always">
        <a-affix :offset-top="120">
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
            style="width: 100%; height: 200px; object-fit: cover"
          />
          <a-card-meta>
            <template slot="title">
              <h3>
                <a>
                  <router-link
                    :to="{ name: 'blogDetail', params: { id: item.id } }"
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
    </el-col>
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
      <a-affix :offset-top="140">
        <el-card shadow="always">总是显示</el-card>
      </a-affix>
    </el-col>
  </el-row>
</template>
<script>
  import { categoryCY, lists } from '@/api/blog'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
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
    created() {
      this.fetchData()
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
            console.log(
              '距顶部' +
                scrollTop +
                '可视区高度' +
                windowHeight +
                '滚动条总高度' +
                scrollHeight
            )
            if (!_this.disabled) {
              _this.load()
            }
          }
        }
      })
    },
    mounted() {},
    methods: {
      async fetchData() {
        /*分类*/
        let { data } = await categoryCY()
        this.category = data
        this.getList()
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
      changeCategory(e) {
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
<style scoped>
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 0 solid #e8e8e8 !important;
  }
  .el-scrollbar >>> .categoryList {
    max-height: 80vh;
  }
  .blogCard {
    margin-top: 16px;
    border-radius: 15px;
    box-shadow: 3px 3px #4b4a50, -1em 0 0.4em black;
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
