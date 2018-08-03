// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import store from './vuex/store';
// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// Element-UI
import ElementUI from 'element-ui';


Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

// 跨浏览器兼容
require('./assets/css/normalize.css');
// Font Icon
require('./assets/font-awesome/css/fontawesome-all.min.css');
require('./assets/font-software/font-web/iconfont.css');
require('./assets/ionicons/css/ionicons.min.css');
// public
require('./assets/css/common.css');
//百度相关
import './assets/map/map.js'
// 首页
import './assets/css/index.css'
import './assets/css/main.css'
import './assets/css/messages.css';
import './assets/css/early.css';
import './assets/css/map.css'
import './assets/css/upd-element.css'
import './assets/css/element.css';
// axios请求
import { post,fetch } from './assets/js/http';
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;

import qs from 'qs';
Vue.prototype.$qs=qs;
// this.$post('/api/').then((response) => {console.log(response)})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

