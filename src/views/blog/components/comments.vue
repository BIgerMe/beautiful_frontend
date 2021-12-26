<template>
  <div>
    <a-modal
      title="回复"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <el-input type="textarea" v-model="commentsValue" />
    </a-modal>
    <a-comment>
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
            确认回复
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
    <a-list
      v-if="comments.length"
      :data-source="comments"
      :header="`${comments.length}条回复`"
      item-layout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime">
          <span slot="actions" key="comment-nested-reply-to" @click="showModal(item)">回复</span>
          <a-comment v-for="item_c in item.comments"
            :author="item_c.author"
            :avatar="item_c.avatar"
            :content="item_c.content"
            :datetime="item_c.datetime"
          >
            <span slot="actions" key="comment-nested-reply-to" @click="showModal(item_c)">回复</span>
          </a-comment>
        </a-comment>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: "comments",
    data() {
      return {
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
        ],
        submitting: false,
        value: '',
        commentsValue:'',
        visible: false,
        confirmLoading: false,
        moment,
      };
    },
    methods: {
      handleSubmit() {
        if (!this.value) {
          return;
        }

        this.submitting = true;

        setTimeout(() => {
          this.submitting = false;
          this.comments = [
            {
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: this.value,
              datetime: moment().fromNow(),
            },
            ...this.comments,
          ];
          this.value = '';
        }, 1000);
      },
      handleChange(e) {
        this.value = e.target.value;
      },
      showModal(item) {
        this.visible = true;
      },
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 2000);
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },
    },
  }
</script>

<style scoped>
  .ant-list-item{
    flex-direction: column !important;
    align-items: normal !important;
  }
</style>
