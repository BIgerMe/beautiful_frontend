<template>
  <div class="index-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-card class="blogCard">
          <a-card-meta>
            <template slot="title">
              <h2 style="text-align: center">{{ detail.title }}</h2>
              <div style="text-align: center">
                <a-tag>
                  <a>{{ detail.nickname }}</a>
                </a-tag>
                <a-divider type="vertical" />
                <a-tag v-for="c in detail.category">
                  <a>{{ c }}</a>
                </a-tag>
                <a-divider type="vertical" />
                <span
                  style="
                    font-family: 'Droid Serif', Georgia, 'Times New Roman',
                      'PingFang SC', 'Hiragino Sans GB', 'Source Han Sans CN',
                      'WenQuanYi Micro Hei', 'Microsoft Yahei', serif;color: #0808087d;
                  "
                >
                  {{ detail.update_at }}
                </span>
                <a-divider type="vertical" />
                <a-icon type="eye" />&nbsp;{{detail.view}}
                &emsp;
                <a-icon type="message" />&nbsp;{{detail.comment}}
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
                :value="detail.original_content"
              />
            </template>
          </a-card-meta>
        </a-card>
      </el-col>
      <el-col :span="24">
      <comments></comments>
      <!--  <a-comment>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
          <div slot="content">
            <a-form-item>
              <a-textarea :rows="4" :value="value" @change="handleChange" />
            </a-form-item>
            <a-form-item>
              <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                添加评论
              </a-button>
            </a-form-item>
          </div>
        </a-comment>
        <template>
          <a-comment v-for="item in comments">
            <span slot="actions" key="comment-nested-reply-to">Reply to</span>
            <a slot="author">{{item.nickname}}</a>
            <a-avatar
              slot="avatar"
              :src="item.avatar"
              :alt="item.nickname"
            />
            <p slot="content">
              {{item.content}}
            </p>
            <a-comment v-for="item_c in item.comments">
              <span slot="actions">Reply to</span>
              <a slot="author">{{item_c.nickname}}</a>
              <a-avatar
                slot="avatar"
                :src="item.avatar"
                :alt="item.nickname"
              />
              <p slot="content">
                {{item.content}}
              </p>
            </a-comment>
          </a-comment>
        </template>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { detail } from '@/api/blog'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import comments from './components/comments'
  export default {
    name: 'BlogDetail',
    components: { 'mavon-editor': mavonEditor , comments },
    data() {
      return {
        detail: {},
        comments: [
          {
            nickname:'xiaoming',
            datetime:'2021-12-26',
            avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:'test ads asd asd asd a',
            comments:[
              {
                nickname:'xiaoming',
                datetime:'2021-12-26',
                avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content:'test ads asd asd asd a',
              }
            ]
          },
          {
            nickname:'xiaoming',
            datetime:'2021-12-26',
            avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content:'test ads asd asd asd a',
            comments:[
              {
                nickname:'xiaoming',
                datetime:'2021-12-26',
                avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content:'test ads asd asd asd a',
              }
            ]
          },
        ],
        likes: 0,
        dislikes: 0,
        action: null,
        submitting: false,
        value: '',
      }
    },
    created() {
      this.fetchData()
    },
    mounted() {},
    methods: {
      async fetchData() {
        const { data } = await detail({ id: this.$route.params.id })
        this.detail = data.data
      },
      handleSubmit() {
        if (!this.value) {
          return;
        }

        this.submitting = true;

        setTimeout(() => {
          this.submitting = false;
          this.comments = [
            {
              nickname: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: this.value,
              datetime: '2021-12-26',
            },
            ...this.comments,
          ];
          this.value = '';
        }, 1000);
      },
      handleChange(e) {
        this.value = e.target.value;
      },
    },
  }
</script>
<style scoped>
  .v-note-wrapper {
    z-index: 1 !important;
  }
  .ant-card-meta-title {
    text-align: center !important;
  }
  .ant-card-bordered {
    border: 0 !important;
  }
  /*.v-show-content{
   padding: 0;
 }*/
</style>
<style>
  .hljs {
    background: #f6f8fa !important;
  }
</style>
