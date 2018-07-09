import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
// Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import { Button} from 'element-ui';
Vue.use(Button);
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './routes/routes'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// 跨浏览器兼容
require('./assets/css/normalize.css');
// Font Icon
require('./assets/font-awesome/css/fontawesome-all.min.css');
require('./assets/font-alibaba/iconfont.css');
require('./assets/ionicons/css/ionicons.min.css');
// public
require('./assets/css/common.css');
// bootstrap 时间插件
// require('./assets/bootstrap-datetimepicker-master/bootstrap-datetimepicker.min.css');
// import './assets/bootstrap-datetimepicker-master/bootstrap-datetimepicker.min'
//
// require('./assets/datetime/bootstrap-datetimepicker.min.css');
// require('./assets/datetime/layout.min.css');
// import './assets/datetime/bootstrap-datepicker'
// import './assets/datetime/app.min'
// import './assets/datetime/components-date-time-pickers'
//百度相关
import './assets/map/map.js'
// 首页
import './assets/css/index.css'
require('./assets/css/setting.scss')
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
