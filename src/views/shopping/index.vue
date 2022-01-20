<template>
  <div class="store-home">
    <div class="store-intro">
      <svg class="store-intro__logo" x="0px" y="0px" viewBox="0 0 90.2 106.9">
        <polygon fill="#FFFFFF" points="88.4,26.5 45.1,53 1.9,26.5 45.1,0 "></polygon>
        <polygon fill="#FFFFFF" points="0,38.6 38.7,62.8 38.7,106.9 0,82.8 "></polygon>
        <polygon fill="#FFFFFF" points="50,106.9 50,62.8 90.2,38.6 90.2,82.8 "></polygon>
      </svg>
      <el-row :gutter="10" style="max-width: 1130px;margin:0 auto;width: calc(100% - 60px);position: relative;flex: 1">
<!--      <el-row :gutter="10" style="max-width: 1130px;position: relative;flex: 1">-->
        <el-col :lg="12">
          <h1 class="title">与 众 不 同</h1>
          <h2 class="subtitle">营造全新视角，走出单一体验，创造与众不同，享受美好生活</h2>

        </el-col>
        <el-col :lg="12">
          <el-card class="md-card" style="background: rgba(0,0,0,0)!important;">
            <phoenix height="300px" width="100%"  />
          </el-card>
        </el-col>
        <el-col :lg="24" class="s_category_position">
          <ul class="s_category">
            <li class="s_category_li" v-for="item in category">
              <img width="28" height="28" alt="FBX" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/ba08cdb4ad341832ef356da8bdd68264-v2.svg">
              <a :title="item.title" href="#">{{item.title}}<span>{{item.subtitle}}</span></a>
            </li>
          </ul>
          <div style="width: 100%;margin-top: 10px;min-height: 250px">
<!--            <el-card></el-card>-->
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="s_case" style="padding-top: 160px">
    </div>
  </div>
</template>

<script>
  import phoenix from '@/components/3d/phoenix'
  export default {
    name: 'shopping_home',
    data() {
      return {
        category:[
          { title:'购 物',subtitle:'Shopping',},
          { title:'购 物',subtitle:'Shopping',},
          { title:'购 物',subtitle:'Shopping',},
          { title:'购 物',subtitle:'Shopping',},
          { title:'购 物',subtitle:'Shopping',},
          { title:'购 物',subtitle:'Shopping',},
        ]
      }
    },
    components:{phoenix},
    mounted() {},
    beforeDestroy() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/shopping/index.scss";
</style>
