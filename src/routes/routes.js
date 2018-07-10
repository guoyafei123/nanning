import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// header
import Equipment_managementVue from '../component/setting';
// footer
import IndexVue from '../component/index';
import CallpoliceVue from '../component/callpolice';
import InspectionVue from '../component/inspection';
import InformationVue from '../component/information';
import PersonnelVue from '../component/personnel';
import RiskVue from '../component/risk';
import DangerVue from '../component/danger';
import BulidVue from '../component/buliding';
import ListVue from '../component/list';
import AllVue from '../component/all';
import MapsVue from '../component/maps';
const routes = [
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
    path:'/risk',component:RiskVue
  },
  {
    path:'/buliding',component:BulidVue
  },
  {
    path:'/danger',component:DangerVue
  },
  {
    path:'*',redirect:'/index'
  },
  // 管理端路由
  {
    path:'/Equipment_management',
    component:Equipment_managementVue,
    children:[
      { path:'/Equipment_management/list',component:ListVue},
      { path:'/Equipment_management/all',component:AllVue},
      { path:'/Equipment_management/maps',component:MapsVue},
      { path:'/Equipment_management',redirect:'/Equipment_management/all'}
    ]
  }
];
const router = new VueRouter({
  routes
});

export default router;
