import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// header
import Equipment_managementVue from '../components/setting';
// footer
import IndexVue from '../components/index';
import CallpoliceVue from '../components/callpolice';
import InspectionVue from '../components/inspection';
import InformationVue from '../components/information';
import PersonnelVue from '../components/personnel';
import RiskVue from '../components/risk';
import DangerVue from '../components/danger';
import BulidVue from '../components/buliding';
import ListVue from '../components/list';
import AllVue from '../components/all';
import MapsVue from '../components/maps';

export default new Router({
  routes: [
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
  ]
})
