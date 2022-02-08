<template>
  <div class="store-home">
    <el-row :gutter="20" class="part1">
      <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
        <!--          <el-card class="xl-card" style="background: rgba(0,0,0,0)!important;"></el-card>-->

        <el-col :lg="9" >
          <el-card class="md-card">
<!--            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
            <a-carousel arrows dots-class="slick-dots slick-thumb">
              <a slot="customPaging" slot-scope="props">
                <img :src="goods.image[props.i]" />
              </a>
              <div v-for="item in goods.image">
                <img :src="item" />
              </div>
            </a-carousel>
          </el-card>
        </el-col>
        <el-col :lg="15">
          <el-card class="md-light-card">
            <h2>超级无敌海底霸王澳龙王纯种香辣龙虾塔克夹汉堡超级无敌海底霸王澳龙王纯种香辣龙虾塔克夹</h2>
            <div>
              <span aria-hidden="true">
                <span class="price-symbol">¥</span>
                <span class="price-whole">158<span class="price-decimal">.</span></span>
                <span class="price-fraction">83</span>
              </span>

              &emsp;&emsp;比市场价
              <div style="display: inline-block">
                <a-statistic
                  :value="9.3"
                  :precision="2"
                  suffix="%"
                  class="demo-class"
                  :value-style="{ color: '#3f8600' }"
                >
                  <template #prefix>
                    <a-icon type="arrow-down" />
                  </template>
                </a-statistic>
              </div>

              &emsp;&emsp;100天内较最低价格
              <div style="display: inline-block">
                <a-statistic
                  :value="11.28"
                  :precision="2"
                  suffix="%"
                  :value-style="{ color: '#cf1322' }"
                  style="margin-right: 50px"
                >
                  <template #prefix>
                    <a-icon type="arrow-up" />
                  </template>
                </a-statistic>
              </div>
            </div>
            <div >
              <el-input-number v-model="goods.num" controls-position="right" :min="1" :max="10"></el-input-number>
              &emsp;
              <el-button type="danger" size="large" round><b>现在购买</b></el-button>
            </div>
          </el-card>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import phoenix from '@/components/3d/phoenix'
  import {mapGetters} from "vuex";
  export default {
    name: 'shopping_detail',
    data() {
      return {
        goods:{
          image:[
            'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract01.jpg',
            'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg',
            'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract03.jpg',
            'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract04.jpg',
          ],
          num:1
        },
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

<style scoped>
  .price-symbol,.price-decimal,.price-fraction{
    position: relative;
    top: -.75em;
    font-size: 13px;
  }
  .price-whole{
    font-size: 28px;
  }
  .ant-carousel >>> .slick-dots {
    height: auto;
  }
  .ant-carousel >>> .slick-slide img {
    border: 5px solid #fff;
    display: block;
    margin: auto;
    max-width: 100%;
  }
  .ant-carousel >>> .slick-thumb {
    bottom: -45px;
  }
  .ant-carousel >>> .slick-thumb li {
    width: 60px;
    height: 45px;
  }
  .ant-carousel >>> .slick-thumb li img {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }
  .ant-carousel >>> .slick-thumb li.slick-active img {
    filter: grayscale(0%);
  }
  .ant-carousel>>>.slick-dots{
    position: unset!important;
  }
</style>
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

