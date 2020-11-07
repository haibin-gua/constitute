// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/border.css'
import './assets/reset.css'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueClipboard from 'vue-clipboard2'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.use(VueClipboard)

Vue.use(Vant);

Vue.prototype.$http = axios.create({

})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
