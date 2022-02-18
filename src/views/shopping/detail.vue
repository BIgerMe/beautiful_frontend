<template>
  <div class="store-home">
    <el-row :gutter="20" class="part1">
      <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
        <div style="height:100px"></div>
      </el-col>
      <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
        <el-col :lg="9" id="goods-img">

          <imgZoom  :width="width"  :height="height" :minIMGsrc="form.cover" :scale="3" />

          <div style="width:420px">
            <el-card></el-card>
          </div>
        </el-col>
        <el-col :lg="15">
          <el-card class="md-light-card">
            <h2>{{form.title}}</h2>
            <div>
              <span aria-hidden="true">
                <span class="price-symbol">¥</span>
                <span class="price-whole">{{form.price_int}}<span class="price-decimal">.</span></span>
                <span class="price-fraction">{{form.price_decimal}}</span>
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
              <el-input-number v-model="order.num" controls-position="right" :min="1" :max="10"></el-input-number>
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
  import imgZoom from './components/imgZoom'
  import {goodsDetail} from '@/api/shopping'
  import {mapGetters} from "vuex";
  export default {
    name: 'shopping_detail',
    data() {
      return {
        order:{
          num:1
        },
        form:{
          id:'',
          title:'',
          cover:'',
          video:'',
          imgList:[],
          price:'',
          origin_price:'',
          unit:'件',
          min:0,
          max:0,
          storage:0,
          shelf:'0',
          recommend:0,
          category:[],
        },
        width:420,
        height:420,
      }
    },
    computed: {
      ...mapGetters({
        device: 'settings/device',
      }),
    },
    components:{ imgZoom },
    created() {
      this.fetchData()
    },
    mounted() {},
    beforeDestroy() {},
    methods: {
      async fetchData() {
        const { data } = await goodsDetail({ id: this.$route.params.id })
        this.form = data
      },
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
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
  }
  .ant-carousel >>> .slick-thumb li {
    width: 45px;
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

  .ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .ant-carousel >>> .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel >>> .custom-slick-arrow:hover {
    opacity: 0.5;
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

