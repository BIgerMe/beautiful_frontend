<template>
  <div class="store-home">
    <div class="store-intro">
      <svg class="store-intro__logo" x="0px" y="0px" viewBox="0 0 90.2 106.9">
        <polygon fill="#FFFFFF" points="88.4,26.5 45.1,53 1.9,26.5 45.1,0 "></polygon>
        <polygon fill="#FFFFFF" points="0,38.6 38.7,62.8 38.7,106.9 0,82.8 "></polygon>
        <polygon fill="#FFFFFF" points="50,106.9 50,62.8 90.2,38.6 90.2,82.8 "></polygon>
      </svg>
      <el-row :gutter="10" class="part1">
        <el-col :lg="12">
          <h1 class="title">与 众 不 同</h1>
          <h2 class="subtitle">营造全新视角，走出单一体验，创造与众不同，享受美好生活</h2>

        </el-col>
        <el-col :lg="12">
          <el-card class="md-card" style="background: rgba(0,0,0,0)!important;">
<!--            <phoenix  height="300px" width="100%"  />-->
          </el-card>
        </el-col>
        <el-col :lg="24" class="s_category_position">
          <ul class="s_category">
            <li class="s_category_li" v-for="item in category">
              <img width="28" height="28" alt="FBX" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/store/filetype/ba08cdb4ad341832ef356da8bdd68264-v2.svg">
              <a :title="item.title" href="#">{{item.title}}<span>{{item.subtitle}}</span></a>
            </li>
          </ul>

          <div style="width: 100%;margin-top: 10px;min-height: 200px">
            <el-card style="width: 100%;min-height: 200px;"></el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="padding-top: 140px">
      <el-row :gutter="20">
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
<!--          <el-card class="xl-card" style="background: rgba(0,0,0,0)!important;"></el-card>-->

          <el-col :lg="6" v-for="(o, index) in 4" :key="o" >
            <el-card class="md-light-card">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <h3>超级无敌海底霸王澳龙王纯种香辣龙虾塔克夹汉堡</h3>
                <div class="bottom clearfix">
                  <el-button type="text" class="button">
                    <a>
                      <router-link
                        :to="{ name: 'shopping_detail'}"
                      >
                        购买
                      </router-link>
                    </a>
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <div class="s_case" style="padding-top: 160px">
    </div>
  </div>
</template>

<script>
  import phoenix from '@/components/3d/phoenix'
  import {mapGetters} from "vuex";
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
    computed: {
      ...mapGetters({
        device: 'settings/device',
      }),
    },
    components:{ phoenix },
    mounted() {},
    beforeDestroy() {},
    methods: {

    },
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/shopping/index.scss";
  .image{
    width: 100%;
    opacity:0.1;
    display: block;
  }
  .button{
    float:right
  }
</style>
