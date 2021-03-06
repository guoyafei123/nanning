// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// Element-UI
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios';
import store from './vuex/store';
import sockjs from 'sockjs-client';
import moment from 'moment';
import panzoom from 'panzoom';

// echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

// 跨浏览器兼容
require('./assets/css/normalize.css');
// Font Icon
require('./assets/font-awesome/css/fontawesome-all.min.css');
require('./assets/font-software/font-com/iconfont.css');
require('./assets/font-software/font-dev/iconfont.css');
require('./assets/font-software/font-alarm/iconfont.css');
require('./assets/ionicons/css/ionicons.min.css');
// public
require('./assets/css/common.css');
//百度相关
// import './assets/map/map.js';
// import './assets/map/.js'
// 首页
import './assets/css/setting.scss';
import './assets/css/upd-element.css';
import './assets/css/element.css';
import './assets/css/index.css';
import './assets/css/main.css';
import './assets/css/messages.css';
import './assets/css/early.css';
import './assets/css/map.css';
import './assets/css/manage.css';
import './assets/css/media.css';
// axios请求
import { post,fetch } from './assets/js/http';
//公共变量和js
import config from './commonfun/config.js';
import myUtils from './commonfun/myUtils.js';
//定义全局变量和function
Vue.prototype.config = config;
Vue.prototype.myUtils = myUtils;

Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$http = axios;
import qs from 'qs';
Vue.prototype.$qs=qs;
// this.$post('/api/').then((response) => {//console.log(response)})
//上传图片
import './assets/js/ajaxfileupload';
//验证
import './assets/js/validate';

import './assets/css/zTreeStyleForDemo.css'
import './assets/js/jquery.ztree.core'
import './assets/js/jquery.ztree.excheck.min'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  sockjs,
  moment,
  panzoom,
  components: { App },
  template: '<App/>'
})

