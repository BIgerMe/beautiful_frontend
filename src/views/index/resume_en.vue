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

          <h1 class="title">Xiaoming Zhang</h1>
          <h2 class="subtitle">IT Engineer、Software Engineer（Certificat）、Full stack Develop Engineer</h2>
          <p>
            <a-button type="dashed"><router-link :to="{ name: 'resume'}">中文</router-link></a-button>&emsp;
            <a-button type="dashed"><router-link :to="{ name: 'resume_en'}">english</router-link></a-button>
          </p>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: -150px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card class="md-card">
            <div id="skill" style= "width: auto;height: 400px"></div>
            <div>
              <b>Backend：</b>Familiar with php、python、apache、nginx；understand java、c language、docker<br>
              <b>database：</b>Familiar with mysql、sqlserver、redis；understand mangodb、oracle<br>
              <b>frontend：</b>Familiar with vue And the application of common components of the corresponding framework、HTML、css、js、scss、bootstrap<br>
              <b>other：</b>Familiar with git、svn、windows、linux(centos,ubuntu)、photoshop；understand Algorithm, 3D technology, blender, npl, etc.<br>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card :class="device !=='mobile' ? 'md-card' : 'md-card'">
            <el-descriptions :column="device !== 'mobile'? 3 : 1" title="Personal basic information" border>
              <el-descriptions-item label="Name">Xiaoming Zhang</el-descriptions-item>
              <el-descriptions-item label="BirthDay">1991-07-10</el-descriptions-item>
              <el-descriptions-item label="Age">30</el-descriptions-item>
              <el-descriptions-item :span="3" label="Graduate from University">Nanjing University of Aeronautics and Astronautics</el-descriptions-item>
              <el-descriptions-item label="Degree">Undergraduate</el-descriptions-item>
              <el-descriptions-item label="Native">ChangZhou</el-descriptions-item>
              <el-descriptions-item label="Ethnic">Han</el-descriptions-item>
              <el-descriptions-item label="Address" :span="3">①An town, Xishan district, Wuxi, Jiangsu province、②Lijia town, Wujin district, Changzhou, Jiangsu province</el-descriptions-item>
              <el-descriptions-item label="Marriage">Married</el-descriptions-item>
              <el-descriptions-item :span="3" label="Personal latest site">
                <el-link href="http://xxroom.xyz">http://xxroom.xyz</el-link> Note：Temporarily shut down ssl to avoid static resource charges
              </el-descriptions-item>
              <el-descriptions-item :span="3" label="Job-hunting intention">
                <el-tag style="margin: 3px">Full time</el-tag>
                <el-tag style="margin: 3px"><i class="el-icon-location"></i>Wuxi、Changzhou</el-tag>
                <el-tag style="margin: 3px">Salary negotiable</el-tag>
                <el-tag style="margin: 3px">Arrive at the appointed time</el-tag>
              </el-descriptions-item>
              <el-descriptions-item >
                <template slot="label"><i class="el-icon-mobile-phone"></i> Mobile</template>
                15716197390
              </el-descriptions-item>
              <el-descriptions-item>
                <template slot="label"><i class="el-icon-message"></i> Mailbox</template>
                2260891938@qq.com
              </el-descriptions-item>

            </el-descriptions>

          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card :class="device !=='mobile' ? 'md-card' : 'md-card'">
            <h3 align="center"><b>Degree</b></h3>
            <el-timeline>
              <el-timeline-item color="green" timestamp="2004.9 - 2007.6" placement="top">
                <h4><b>（Junior middle school）Qianhuang Experimental School, Wujin District, Changzhou City</b></h4>
              </el-timeline-item>
              <el-timeline-item color="blue" timestamp="2007.9 - 2010.6" placement="top">
                <h4><b>（high school）Qianhuang Senior Middle School in Jiangsu Province</b></h4>
              </el-timeline-item>
              <el-timeline-item color="red" timestamp="2010.9 - 2014.6" placement="top">
                <h4><b>（University）Nanjing University of Aeronautics and Astronautics （Profession）College of Automation-Measurement and control technology and instruments</b></h4>
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card :class="device !=='mobile' ? 'md-card' : 'md-card'">
            <h3 align="center"><b>Work experience</b></h3>
            <el-timeline>
              <el-timeline-item color="red" timestamp="2014.7 - 2015.6" placement="top">
                <h4><b>Jiangsu Changfa Agricultural equipment Co., Ltd. - Technical sales</b></h4>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2015.7 - 2017.4" placement="top">
                <h4><b>Nanjing Tuniu - Software engineer</b></h4>
                <p>Responsible for software testing and environment building, during the department adjustment to learn PHP development, start development work, familiar with the membership system, reservation system, CRM and so on.</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2017.5 - 2018.8" placement="top">
                <h4><b>Jiangsu Dinghao Information Technology Co., Ltd. - PHP Development engineer</b></h4>
                <p>Responsible for WEB end building, Wechat official account, APP interface development, docking with third-party IM development, big data, data migration, new framework easyswoole building</p>
                <p>Responsible for the business belongs to the campus management SAAS platform, stable provision of multi-campus services, collaborative development business merger with the financier, and the front and rear of the platform are separated, revised and upgraded.</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2018.8 - 2019.6" placement="top">
                <h4><b>Jiangsu Weisheng Network Technology Co., Ltd. - Software development engineer</b></h4>
                <p>Responsible for Mini Program, official account development, real estate, medical project manager. Independently responsible for a number of outsourced official account Mini Program development launch, version upgrade.</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2019.6 - 2020.4" placement="top">
                <h4><b>Jiangsu Wuxi Xinyi Technology Co., Ltd. - Software engineer</b></h4>
                <p>Financial project (multi-platform and multi-channel PHP+JAVA), responsible for docking with third-party bank channels and payment channels with downstream business, independently responsible for PHP platform construction, stable operation, maintenance and security monitoring, cooperating with JAVA business interface development, front-end VUE development, deployment of automation programs.</p>
              </el-timeline-item>
              <el-timeline-item color="green" timestamp="2020.4 So far" placement="top">
                <h4><b>Changzhou Keteng Textile Co., Ltd. - IT engineer</b></h4>
                <p>Full-stack php+vue development includes oa, O2O, sap, CRM, SRM, logistics, cost analysis, position statistics, etc. including platform-wide content, comprehensive upgrade of the development process of the old platform, project architecture and technology stack applications; python script deployment automatically grabs industry data at regular intervals; provides industry analysis data.
                  Provide stable, reliable and high-performance support for the operation of business, finance, backstage, logistics and finance departments.</p>
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card :class="device !=='mobile' ? 'md-card' : 'md-card'">
            <h3 align="center"><b>Project experience</b></h3>
            <el-timeline>
              <el-timeline-item color="green"  placement="top">
                <h4><b>Project one</b></h4>
                <div>name：Campus SAAS platform</div>
                <div>introduction：Provide multi-school campus system support</div>
                <div>modules：Students, teachers, exams, homework, families, etc.</div>
                <div>duty：Responsible for WEB construction, Wechat official account, APP interface development, docking with third-party IM, big data, data migration, new framework easyswoole construction, collaborative development business merger with financiers, separation and revision and upgrade of the frontend and backend of the platform.</div>
              </el-timeline-item>
              <el-timeline-item color="green"  placement="top">
                <h4><b>Project two</b></h4>
                <div>name：Medical items</div>
                <div>introduction：Tencent's medical project Mini Program</div>
                <div>modules：Hospital details, departments, doctors, registration, examinations, cases, electronic reports, etc.</div>
                <div>duty：in charge of project promotion, daily standard difficulties, progress and third parties for remote project requirements communication, project requirements planning; functional logic carding, PHP MVC self-written framework to develop all api interfaces, docking with the front-end Mini Program interface, the overall test online.</div>
              </el-timeline-item>
              <el-timeline-item color="green"  placement="top">
                <h4><b>Project three</b></h4>
                <div>name：Financial project</div>
                <div>introduction：Pinduoduo automatically issues orders, docks bank channels for payment, and automatically delivers goods.</div>
                <div>modules：Channel management, three-party system channel, order payment module, automatic shipping tool</div>
                <div>duty：Responsible for php system construction and overall development and interface docking, vue-admin project construction and backend manage system development, automatic shipping tools automatic adjustment and deployment</div>
              </el-timeline-item>
              <el-timeline-item color="green"  placement="top">
                <h4><b>Project four</b></h4>
                <div>name：O2O</div>
                <div>introduction：Cotton online trading platform, online to offline, including h5, foreground, backstage management</div>
                <div>modules：Resources, demand, hanging order, contract, customer management, futures price maintenance, market information, information push management, etc.</div>
                <div>duty：Basically alone responsible for the full stack development of the project, server deployment, requirements alignment, post-optimization work. The overall project has completed normal operation, including resource import, matching of demand resources, closing or cancellation of hanging orders, real-time broadcast push price pegging / changing / cancellation, opening of multiple contract templates, etc., as well as SMS message push.</div>
              </el-timeline-item>
            </el-timeline>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 0px;display:flex;flex-direction: column;">
      <el-row>
        <el-col :lg="16" :offset="device === 'mobile' ? 0 : 4">
          <el-card :class="device !=='mobile' ? 'md-card' : 'md-card'">
            <h3 align="center"><b>hobby</b></h3>
            <ul>
              <li>Write blogs, accumulate technical articles, visit github, do arithmetic exercises (php+python), learn English daily, and learn technical courses systematically.</li>
              <li>Like exercise, basketball, games, finance, etc.</li>
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
    name: 'resume_en',
    data() {
      return {
        skillOption:{
          dataset: {
            source: [
              ['score', 'skill'],
              [21, 'nlp'],
              [41, '3d（blender、three.js）'],
              [42, 'java（springboot）、c、arithmetic'],
              [65, 'redis'],
              [66, 'photoshop'],
              [67, 'apache、nginx'],
              [70, 'linux、windows'],
              [70, 'html、css、scss、js、bootstrap'],
              [70, 'python'],
              [72, 'git、svn'],
              [75, 'vue（element、antd、vant...）'],
              [75, 'project management'],
              [79, 'mysql、sql server'],
              [85, 'php（yii2、tp、ci、own framework）'],
            ]
          },
          title: [
            {
              left: 'center',
              text: 'skill'
            },
          ],
          grid: { containLabel: true },
          xAxis: { name: 'score' },
          yAxis: { type: 'category' },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['high', 'low'],
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

        skillDom.style.width = skillDom.offsetWidth < 500 ? window.innerWidth*0.9+'px' : skillDom.offsetWidth;

        console.log(skillDom.offsetWidth)
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
      font-size: 35px;
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
