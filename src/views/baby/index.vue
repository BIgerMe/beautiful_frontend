<template>
  <div class="index-container">
    <parentActivate :dialogVisible="visible.parentActivate" @close="visible.parentActivate = false" @success="getParentLists" />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card>
          <div slot="header">
            个人信息
          </div>
          <div class="birth">
            <div><span id="days">{{zyf.age.day}}</span>Days</div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card>
          <div slot="header">
            勤劳的家长
            <a-button type="dashed" shape="circle" icon="plus" @click="visible.parentActivate = true" />
          </div>
          <el-col :lg="4" :md="6" :sm="8" :xs="24" v-for="item in zyf.parentLists">
            <el-card class="parentCard">
              <p>事情：<span><b>{{item.title}}</b></span></p>
              <p>日期：<span>{{item.date}}</span></p>
              <p>描述：<span>{{item.content}}</span></p>
            </el-card>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import parentActivate from './components/parentActivate'
  import { parentLists } from '@/api/baby'

  export default {
    name: 'Baby',
    components: { parentActivate },
    data() {
      const birth= new Date(2021,10,15); //月份0开始
      return {
        visible:{
          parentActivate:false,
        },
        zyf:{
          parentLists:[],
          age:{
            day: Math.round((Date.now() - birth.getTime()) / 86400000),
          }
        }
      }
    },
    created() {
      this.getParentLists() //事件列表
    },
    methods: {
      async getParentLists(){
        const { data } = await parentLists()
        this.zyf.parentLists = data
      }
    },
  }
</script>
<style lang="scss">
  .el-card>.el-card__header{
    padding: 10px !important;
    border-bottom:0 !important;
  }
  .birth{
    width: 100%;
    display: flex;
    justify-content: space-between;
    div{
      height: 100px;
      width: 100px;
      background-color: #efacc5;
      border-radius: 5px;
      color: #ffffff;
      display: grid;
      place-items: center;
      padding: 20px 0;
      box-shadow: 0 15px 20px rgba(0,0,0,0.3);

    }
    span{
      font-size: 30px;
      font-weight: 500;
    }
    div{
      font-size: 14px;
      color: #707070;
      font-weight: 400;
    }
  }
  .parentCard{
    p{
      margin-bottom: 3px!important;
      color: #00000069;
    }
    span{
      color:#282c34ed
    }
  }
</style>
