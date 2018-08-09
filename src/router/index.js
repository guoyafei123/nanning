import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// header
import Equipment_managementVue from '../components/setting';
// footer
import LoginVue from '../components/login';
import RegisterVue from '../components/register';
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
import PunchVue from '../components/punch';
// 管理端
import Unit_managementVue from '../management/Unit_management/Unit_management';
import Unit_listVue from '../management/Unit_management/Unit_list';
import Unit_AllVue from '../management/Unit_management/Unit_all';
import Building_managementVue from '../management/Building_management/Build_management';
import Build_listVue from '../management/Building_management/list';
import Build_AllVue from '../management/Building_management/all';
import Build_MapsVue from '../management/Building_management/maps';
import Inspection_planVue from '../management/Inspection_plan/Inspection_plan';
import Plan_listVue from '../management/Inspection_plan/list';
import Plan_AllVue from '../management/Inspection_plan/all';
import Plan_MapsVue from '../management/Inspection_plan/maps';
import List_of_peopleVue from '../management/List_of_people/List_of_people';
import List_of_people_AllVue from '../management/List_of_people/all';
import List_of_people_listVue from '../management/List_of_people/list';
import { registerDecorator } from 'handlebars';
export default new Router({
  routes: [
    // footer 导航
    {
      path:'/index',component:IndexVue
    },
    {
      path:'/login',component:LoginVue
    },
    {
      path:'/register',component:RegisterVue
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
    {
      path:'/punch',component:PunchVue
    },
    // 管理端路由
    {
      path:'/Unit_management',
      component:Unit_managementVue,
      children:[
        { path:'/Unit_management/list',component:Unit_listVue},
        { path:'/Unit_management/all',component:Unit_AllVue},
        { path:'/Unit_management',redirect:'/Unit_management/all'}
      ]
    },
    {
      path:'/Equipment_management',
      component:Equipment_managementVue,
      children:[
        { path:'/Equipment_management/list',component:ListVue},
        { path:'/Equipment_management/all',component:AllVue},
        { path:'/Equipment_management/maps',component:MapsVue},
        { path:'/Equipment_management',redirect:'/Equipment_management/all'}
      ]
    },
    {
      path:'/Building_management',
      component:Building_managementVue,
      children:[
        { path:'/Building_management/list',component:Build_listVue},
        { path:'/Building_management/all',component:Build_AllVue},
        { path:'/Building_management/maps',component:Build_MapsVue},
        { path:'/Building_management',redirect:'/Building_management/all'}
      ]
    },
    {
      path:'/Inspection_plan',
      component:Inspection_planVue,
      children:[
        { path:'/Inspection_plan/list',component:Plan_listVue},
        { path:'/Inspection_plan/all',component:Plan_AllVue},
        { path:'/Inspection_plan/maps',component:Plan_MapsVue},
        { path:'/Inspection_plan',redirect:'/Inspection_plan/all'}
      ]
    },
    {
      path:'/List_of_people',
      component:List_of_peopleVue,
      children:[
        { path:'/List_of_people/list',component:List_of_people_listVue},
        { path:'/List_of_people/all',component:List_of_people_AllVue},
        { path:'/List_of_people',redirect:'/List_of_people/all'}
      ]
    }
  ]
})
