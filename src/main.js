import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './plugins'
import '@/layouts/export'

Vue.config.productionTip = false
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  el: '#vue-admin-beautiful',
  router,
  store,
  render: (h) => h(App),
})
