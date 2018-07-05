import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// header
import SettingVue from '../component/setting';
// footer
import IndexVue from '../component/index';
import CallpoliceVue from '../component/callpolice';
import InspectionVue from '../component/inspection';
import InformationVue from '../component/information';
import PersonnelVue from '../component/personnel';
import ListVue from '../component/list';
import AllVue from '../component/all';
import MapsVue from '../component/maps';

const routes = [
  // setting 设置
  {
    path:'/setting',
    component:SettingVue,
    children:[
      { path:'/setting/list',component:ListVue},
      { path:'/setting/all',component:AllVue},
      { path:'/setting/maps',component:MapsVue},
      { path:'/setting',redirect:'/setting/all'}
    ]
  },
  // footer 导航
  {
    path:'/index',component:IndexVue
  },
  {
    path:'/callpolice',component:CallpoliceVue
  },
  {
    path:'/inspection',component:InspectionVue
  },
  {
    path:'/information',component:InformationVue
  },
  {
    path:'/personnel',component:PersonnelVue
  },
  {
    path:'*',redirect:'/index'
  }
];
const router = new VueRouter({
  routes
});

export default router;
