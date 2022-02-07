<template>
  <div class="home">
    <div class="intro">
      <svg class="intro__logo" x="0px" y="0px" viewBox="0 0 90.2 106.9">
        <polygon fill="#FFFFFF" points="88.4,26.5 45.1,53 1.9,26.5 45.1,0 "></polygon>
        <polygon fill="#FFFFFF" points="0,38.6 38.7,62.8 38.7,106.9 0,82.8 "></polygon>
        <polygon fill="#FFFFFF" points="50,106.9 50,62.8 90.2,38.6 90.2,82.8 "></polygon>
      </svg>
      <el-row :gutter="10" class="part1">

        <el-col :lg="24" style="text-align: center">
          <a-avatar :size="180" src="//head.xxroom.xyz/FqzFUt7BPKcmeeiRG-881b8ydgXE" />

          <h1 class="title">张 晓 明</h1>
          <h2 class="subtitle">IT工程师、软件设计师（证书）、全栈开发工程师</h2>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: -150px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card v-if="device !=='mobile'" class="xl-card">
            <div id="skill" style="width: auto;height: 400px"></div>
          </el-card>
          <el-card v-else>
            <div id="skill" style="width: auto;height: 400px"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card :class="device !=='mobile' ? 'xl-card' : 'md-card'">
            <h3 align="center"><b>校园经历</b></h3>
            <el-timeline>
              <el-timeline-item color="green" timestamp="2004.9 - 2007.6" placement="top">
                <h4><b>（初中）常州市武进区前黄实验学校</b></h4>
                <p>成绩并不稳定，除了数学成绩较好且稳定，其余并不突出。2次重要的直升考试和中考出乎意料的成绩优异。</p>
                <p>喜欢打篮球、游戏war3、动漫火影忍者（每周半天假期活动大概率在这些之间）</p>
              </el-timeline-item>
              <el-timeline-item color="blue" timestamp="2007.9 - 2010.6" placement="top">
                <h4><b>（高中）江苏省前黄高级中学</b></h4>
                <p>高一直升的教改班成绩很糟糕，压力很大屡次垫底；高二选的物理生物，成绩起色不大且不稳定；高三逐渐稳定，数学稳定前三，其余普通；高考成绩出乎意料，全班第一。</p>
                <p>喜欢打篮球（受牛人影响兴趣浓厚）、游戏war3、魔兽世界、杂志周刊等（每周半天假期活动大概率在这些之间）</p>
              </el-timeline-item>
              <el-timeline-item color="red" timestamp="2010.9 - 2014.6" placement="top">
                <h4><b>（大学）南京航空航天大学 （专业）自动化学院-测控技术与仪器</b></h4>
                <p>不够努力，回想起来有点杂陈，挂科较多，很多科目勉强通过。即便如此，大学过的很愉快，宿舍、班级、专业、学院的朋友们真的很暖。</p>
                <p>喜欢打篮球（院队）、电竞（电竞社副社长）（活动时间多，业余很强，职业入门）</p>
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card :class="device !=='mobile' ? 'xl-card' : 'md-card'">
            <h3 align="center"><b>工作经历</b></h3>
            <el-timeline>
              <el-timeline-item color="red" timestamp="2014.7 - 2015.6" placement="top">
                <h4><b>江苏常发农业装备股份有限公司 - 技术销售</b></h4>
                <p>校招的公司，出差约8个月负责辽宁、吉林片区的经销商对接销售，感想工作内容不适合自己。</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2015.7 - 2017.4" placement="top">
                <h4><b>南京途牛旅游网 - 软件工程师</b></h4>
                <p>负责软件测试及环境搭建，期间部门调整后学习PHP开发，开始入手开发工作，熟悉了会员系统、预订系统、CRM等。</p>
                <p>公司多部门多系统的协同运作，庞大的研发团队优秀的人很多，对我影响较大，尤其感激领导挖掘了我的开发能力。</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2017.5 - 2018.8" placement="top">
                <h4><b>江苏鼎昊信息技术有限公司 - PHP开发工程师</b></h4>
                <p>负责 WEB 端搭建、微信公众号、APP 接口开发,与第三方IM对接开发、大数据、数据迁移、新框架easyswoole搭建</p>
                <p>负责业务属于校园管理类SAAS平台，稳定提供多校园服务，与融资方协同开发业务合并，平台前后端分离改版升级。</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2018.8 - 2019.6" placement="top">
                <h4><b>江苏微盛网络科技有限公司 - 软件开发工程师</b></h4>
                <p>负责小程序、公众号开发，开发项目包括房产、医疗。独立负责多个外包公众号小程序开发上线、版本升级。</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2019.6 - 2020.4" placement="top">
                <h4><b>江苏无锡新意科技有限公司 - 软件工程师</b></h4>
                <p>金融项目（多平台多渠道PHP+JAVA），负责与第三方银行渠道对接、与下游业务对接支付渠道，独立负责PHP平台搭建、稳定运行、维护和安全监控，协同JAVA业务接口开发，前端VUE开发，部署自动化程序。</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2020.4至今" placement="top">
                <h4><b>常州科腾纺织品有限公司 - IT工程师</b></h4>
                <p>全栈php+vue开发包括oa、o2o、sap、CRM、SRM、物流、成本分析、头寸统计等包含全平台的内容，全面升级旧平台的开发流程，项目架构和技术栈应用；python脚本部署定时自动抓取行业数据；提供行业分析数据；
                为业务、金融、中台、物流、财务多部门运行提供稳定可靠高性能的支持。</p>
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card :class="device !=='mobile' ? 'xl-card' : 'md-card'">
            <h3 align="center"><b>兴趣爱好</b></h3>
            <ul>
              <li>a、github是比较喜欢的地方，探索优秀的开源项目是轻松愉快得一件事，在这里真的是能感受到开源带来的便捷性。</li>
              <li>b、除此之外，每年都会业余花时间精进一下英语能力，提升英语文档阅读能力，提升解决问题能力，这是很有成效的，因为百度和必应得到的中文处理方案大多是借鉴或翻译的，处理较难或不常见问题还是得用Google才能正真解决和得到全面解释，翻译的局限性也很大；
              </li>
              <li>c、系统性的计划学习，充满斗志、很有成就感的事情。</li>
              <li>d、用户体验的学习，在工作领域思考未来发展方向和可能性，技术带给自身的不只是便捷，还有视角，网上冲浪，探索世界。</li>
              <li>e、业余锻炼身体、和朋友玩玩游戏、桌游，聚会也是OK的，咱也是气氛大王。</li>
              <li>总之：带娃为主，学习分享为辅，努力工作，共建美好生活。</li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'shopping_home',
    data() {
      return {
        skillOption:{
          dataset: {
            source: [
              ['score', 'skill'],
              [21, 'nlp'],
              [41, '3d（blender、three.js）'],
              [45, 'java（springboot）'],
              [65, 'redis'],
              [67, 'apache、nginx'],
              [70, 'linux、windows'],
              [70, 'html、css、scss、js、bootstrap'],
              [70, 'python'],
              [72, 'git、svn'],
              [75, 'vue（element、antd、vant...）'],
              [79, 'mysql、sql server'],
              [85, 'php（yii2、tp、ci、自写框架）'],

            ]
          },
          title: [
            {
              left: 'center',
              text: '技能'
            },
          ],
          grid: { containLabel: true },
          xAxis: { name: '评分' },
          yAxis: { type: 'category' },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['高', '低'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: ['#d9ec6a', '#71ef8d', '#0236f6']
            }
          },
          series: [
            {
              type: 'bar',
              encode: {
                // Map the "amount" column to X axis.
                x: 'score',
                // Map the "product" column to Y axis
                y: 'skill'
              }
            }
          ]
        }
      }
    },
    computed: {
      ...mapGetters({
        device: 'settings/device',
      }),
    },
    components:{ },
    mounted() {
      this.showSkill()

    },
    created() {
    },
    beforeDestroy() {},
    methods: {
      showSkill(){
        let skillDom = document.getElementById('skill')
        let skillChart = echarts.init(skillDom)
        skillChart.setOption(this.skillOption)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .home {
    font-family: serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .title{
      font-size: 50px;
      font-weight: 300;
      color: var(--skfb-white, #fff);
      margin-bottom: 10px;
    }
    .subtitle{
      margin-bottom: 35px;
      font-size: 18px;
      line-height: 27px;
      color: hsla(0,0%,100%,.9098);
      color: var(--skfb-white-transparent,hsla(0,0%,100%,.9098));
      font-weight: 400;
    }
    .intro{
      position: relative;
      min-height: 740px;
      max-height: 850px;
      padding-top: 160px;
      display: flex;
      flex-direction: column;
      background-color: rgba(0,0,0);
      //background: linear-gradient(45deg,#3e081c,#ff4489);
      //background-image: linear-gradient(45deg, rgb(62, 8, 28), rgb(255, 68, 137));
      //background-image: linear-gradient(45deg, #ffffff, #1d88eb);
      //background-image: url("http://head.xxroom.xyz/FoZf6-oQVzGJwT1-bVKwc-YnWxUZ");
      //background-size: 100% 100%;

      /*background-position-x: initial;*/
      /*background-position-y: initial;*/
      /*background-size: initial;*/
      /*background-repeat-x: initial;*/
      /*background-repeat-y: initial;*/
      /*background-attachment: initial;*/
      /*background-origin: initial;*/
      /*background-clip: initial;*/
      /*background-color: initial;*/
      .part1{
        max-width: 1130px;
        margin: 0 auto!important;
        width: calc(100% - 60px);
        position: relative;
        flex: 1
      }
    }

    .intro__logo {
      position: absolute;
      z-index: 0;
      opacity: .05;
      top: 0;
      left: 76.1%;
      transform: translate(calc(-50% - 500px), -20%);
      height: 250%;
      pointer-events: none;
    }
  }
</style>
