<template>
  <div class="store-home">
    <div class="store-intro">
      <svg class="store-intro__logo" x="0px" y="0px" viewBox="0 0 90.2 106.9">
        <polygon fill="#FFFFFF" points="88.4,26.5 45.1,53 1.9,26.5 45.1,0 "></polygon>
        <polygon fill="#FFFFFF" points="0,38.6 38.7,62.8 38.7,106.9 0,82.8 "></polygon>
        <polygon fill="#FFFFFF" points="50,106.9 50,62.8 90.2,38.6 90.2,82.8 "></polygon>
      </svg>
      <el-row :gutter="10" style="max-width: 1130px;margin:0 auto;width: calc(100% - 60px);position: relative;flex: 1">
        <el-col :lg="12">
          <h1>逛 逛</h1>
          <h2>喜欢的可以下单~不买的可以进来看一看~</h2>

        </el-col>
        <el-col :lg="12">
          <phoenix height="400px" width="100%" />
        </el-col>
        <el-col :lg="24" class="s_category_position">
          <ul class="s_category">
            <li class="s_category_li" v-for="i in [1,2,3,4,5,6]">
              <img width="28" height="28" alt="FBX" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/ba08cdb4ad341832ef356da8bdd68264-v2.svg">
              <a title="FBX 3D Models" href="#">FBX<span>3D Models</span></a>
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
      return {}
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
