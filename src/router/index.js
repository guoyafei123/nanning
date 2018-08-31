import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// footer

import LoginVue from '../components/login/login';
import RegisterVue from '../components/register/register';
import IndexVue from '../components/index/index';
import CallpoliceVue from '../components/callpolice/callpolice';
import InspectionVue from '../components/inspection/inspection';
import InformationVue from '../components/information/information';
import PersonnelVue from '../components/personnel/personnel';
import RiskVue from '../components/risk/risk';
import DangerVue from '../components/danger/danger';
import BulidVue from '../components/buliding/buliding';
import PlanVue from '../components/plan/plan';
import Cookie from '../components/publick/cookie';
import MinmapVue from '../components/publick/min_map';
import CameraVue from '../components/camera/camera';
import Fire_analysisVue from '../components/publick/fire_analysis';

// 管理端
import Unit_managementVue from '../management/Unit_management/Unit_management';
import Unit_listVue from '../management/Unit_management/Unit_list';
import Unit_AllVue from '../management/Unit_management/Unit_all';
import Building_managementVue from '../management/Building_management/Build_management';
import Build_AllVue from '../management/Building_management/all';
import Build_MapsVue from '../management/Building_management/maps';
import Build_ListVue from '../management/Building_management/list';
import Equipment_managementVue from '../management/Equipment_management/setting';
import Equipment_management_ListVue from '../management/Equipment_management/list';
import Equipment_management_AllVue from '../management/Equipment_management/all';
import Equipment_management_MapsVue from '../management/Equipment_management/maps';
import Inspection_planVue from '../management/Inspection_plan/Inspection_plan';
import Plan_listVue from '../management/Inspection_plan/list';
import Plan_AllVue from '../management/Inspection_plan/all';
import Plan_MapsVue from '../management/Inspection_plan/maps';
import List_of_peopleVue from '../management/List_of_people/List_of_people';
import List_of_people_AllVue from '../management/List_of_people/all';
import List_of_people_listVue from '../management/List_of_people/list';
import Personnel_reviewVue from '../management/Personnel_review/Personnel_review';
import Patrolcheck_AllVue from '../management/Patrolcheck/all';
import PatrolcheckVue from '../management/Patrolcheck/Patrolcheck';
import Personnel_review_AllVue from '../management/Personnel_review/all';
import Dangerous_goods_managementVue from '../management/Dangerous_goods_management/Dangerous_goods_management';
import Dangerous_goods_management_listVue from '../management/Dangerous_goods_management/list';
import Dangerous_goods_management_AllVue from '../management/Dangerous_goods_management/all';
import Dangerous_goods_management_MapsVue from '../management/Dangerous_goods_management/maps';
import Reserve_planVue from '../management/Reserve_plan/Reserve_plan';
import Reserve_planListVue from '../management/Reserve_plan/list';
import Reserve_planList_MapVue from '../management/Reserve_plan/list_map';
import Reserve_planAllVue from '../management/Reserve_plan/all';
import Reserve_planMapsVue from '../management/Reserve_plan/maps';
import Message_managementVue from '../management/Message_management/Message_management';
import Message_managementlist_activityVue from '../management/Message_management/list_activity';
import Message_managementlist_noticeVue from '../management/Message_management/list_notice';
import Message_managementNoticeVue from '../management/Message_management/notice';
import Message_managementActivityVue from '../management/Message_management/activity';
import operationLogVue from '../management/operationLog/operationLog';
import operationLog_AllVue from '../management/operationLog/all';
import Authority_allocationVue from '../management/Authority_allocation/Authority_allocation';
import Authority_allocation_AllVue from '../management/Authority_allocation/all';
import Authority_allocation_AllocationVue from '../management/Authority_allocation/allocation';
import ControlRoomLogVue from '../management/ControlRoomLog/ControlRoomLog';
import ControlRoomLog_AllVue from '../management/ControlRoomLog/all';
import Add_alarmVue from '../management/Add_alarm/Add_alarm';
import Add_alarm_ListVue from '../management/Add_alarm/list';
import Add_TroubleVue from '../management/Add_trouble/Add_trouble';
import Add_Trouble_ListVue from '../management/Add_trouble/list';

import Risk_managementVue from '../management/Risk_management/Risk_management';
import Risk_managementAllVue from '../management/Risk_management/all';
import Risk_managementUnitVue from '../management/Risk_management/unit';
import Risk_managementBuildVue from '../management/Risk_management/build';
import Risk_managementEditVue from '../management/Risk_management/edit';

import RiskScore_managementVue from '../management/RiskScore_management/RiskScore_management';
import RiskScore_managementAllVue from '../management/RiskScore_management/all';
import RiskScore_managementUnitVue from '../management/RiskScore_management/unit';
import RiskScore_managementBuildVue from '../management/RiskScore_management/build';
import RiskScore_managementEditVue from '../management/RiskScore_management/edit';
import { registerDecorator } from 'handlebars';
export default new Router({
  routes: [
    // footer 导航
    {
      path:'/',
      component:IndexVue
    },
    {
      path:'/login',
      component:LoginVue
    },
    {
      path:'/index',
      component:IndexVue
    },
    {
      path:'/register',
      component:RegisterVue
    },
    {
      path:'/callpolice',
      component:CallpoliceVue
    },
    {
      path:'/inspection',
      component:InspectionVue
    },
    {
      path:'/information',
      component:InformationVue
    },
    {
      path:'/personnel',
      component:PersonnelVue
    },
    {
      path:'/risk',
      component:RiskVue
    },
    {
      path:'/buliding',
      component:BulidVue
    },
    {
      path:'/danger',
      component:DangerVue
    },
    {
      path:'/plan',
      component:PlanVue
    },
    {
      path:'/camera',
      component:CameraVue
    },
    {
      path:'/fire_analysis',
      component:Fire_analysisVue
    },
    {
      path:'/cookie',
      component:Cookie
    },   
    // 管理端
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
        { path:'/Equipment_management/list',component:Equipment_management_ListVue},
        { path:'/Equipment_management/all',component:Equipment_management_AllVue},
        { path:'/Equipment_management/maps',component:Equipment_management_MapsVue},
        { path:'/Equipment_management',redirect:'/Equipment_management/all'}
      ]
    },
    {
      path:'/Building_management',
      component:Building_managementVue,
      children:[
        { path:'/Building_management/all',component:Build_AllVue},
        { path:'/Building_management/maps',component:Build_MapsVue},
        { path:'/Building_management/list',component:Build_ListVue},
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
    },
    {
      path:'/Patrolcheck',
      component:PatrolcheckVue,
      children:[
        { path:'/Patrolcheck/all',component:Patrolcheck_AllVue},
        { path:'/Patrolcheck',redirect:'/Patrolcheck/all'}
      ]
    },
    {
      path:'/Personnel_review',
      component:Personnel_reviewVue,
      children:[
        { path:'/Personnel_review/all',component:Personnel_review_AllVue},
        { path:'/Personnel_review',redirect:'/Personnel_review/all'}
      ]
    },
    {
      path:'/Dangerous_goods_management',
      component:Dangerous_goods_managementVue,
      children:[
        { path:'/Dangerous_goods_management/list',component:Dangerous_goods_management_listVue},
        { path:'/Dangerous_goods_management/all',component:Dangerous_goods_management_AllVue},
        { path:'/Dangerous_goods_management/maps',component:Dangerous_goods_management_MapsVue},
        { path:'/Dangerous_goods_management',redirect:'/Dangerous_goods_management/all'}
      ]
    },
    {
      path:'/operationLog',
      component:operationLogVue,
      children:[
        { path:'/operationLog/all',component:operationLog_AllVue},
        { path:'/operationLog',redirect:'/operationLog/all'}
      ]
    },
    {
      path:'/ControlRoomLog',
      component:ControlRoomLogVue,
      children:[
        { path:'/ControlRoomLog/all',component:ControlRoomLog_AllVue},
        { path:'/ControlRoomLog',redirect:'/ControlRoomLog/all'}
      ]
    },
    {
      path:'/Authority_allocation',
      component:Authority_allocationVue,
      children:[
        { path:'/Authority_allocation/all',component:Authority_allocation_AllVue},
        { path:'/Authority_allocation/allocation/:id',component:Authority_allocation_AllocationVue},
        { path:'/Authority_allocation',redirect:'/Authority_allocation/all'}
      ]
    },
    {
      path:'/Message_management',
      component:Message_managementVue,
      children:[
        { path:'/Message_management/list_notice',component:Message_managementlist_noticeVue},
        { path:'/Message_management/list_activity',component:Message_managementlist_activityVue},
        { path:'/Message_management/activity',component:Message_managementActivityVue},
        { path:'/Message_management/notice',component:Message_managementNoticeVue},
        { path:'/Message_management',redirect:'/Message_management/notice'}
      ]
    },
    {
      path:'/Risk_management',
      component:Risk_managementVue,
      children:[
        { path:'/Risk_management/build',component:Risk_managementBuildVue},
        { path:'/Risk_management/edit',component:Risk_managementEditVue},
        { path:'/Risk_management/unit',component:Risk_managementUnitVue},
        { path:'/Risk_management/Risk_management',component:Risk_managementVue},
        { path:'/Risk_management/all',component:Risk_managementAllVue},
        { path:'/Risk_management',redirect:'/Risk_management/all'}
      ]
    },
    {
      path:'/RiskScore_management',
      component:Risk_managementVue,
      children:[
        { path:'/RiskScore_management/build',component:RiskScore_managementBuildVue},
        { path:'/RiskScore_management/edit',component:RiskScore_managementEditVue},
        { path:'/RiskScore_management/unit',component:RiskScore_managementUnitVue},
        { path:'/RiskScore_management/RiskScore_management',component:RiskScore_managementVue},
        { path:'/RiskScore_management/all',component:RiskScore_managementAllVue},
        { path:'/RiskScore_management',redirect:'/RiskScore_management/all'}
      ]
    },
    {
      path:'/Add_alarm',
      component:Add_alarmVue,
      children:[
        { path:'/Add_alarm/list',component:Add_alarm_ListVue},
        { path:'/Add_alarm',redirect:'/Add_alarm/list'}
      ]
    },
    {
      path:'/Add_trouble',
      component:Add_TroubleVue,
      children:[
        { path:'/Add_trouble/list',component:Add_Trouble_ListVue},
        { path:'/Add_trouble',redirect:'/Add_trouble/list'}
      ]
    },
    {
      path:'/Reserve_plan',
      component:Reserve_planVue,
      children:[
        { path:'/Reserve_plan/list',component:Reserve_planListVue},
        { path:'/Reserve_plan/list_map',component:Reserve_planList_MapVue},
        { path:'/Reserve_plan/all',component:Reserve_planAllVue},
        { path:'/Reserve_plan/maps',component:Reserve_planMapsVue},
        { path:'/Reserve_plan',redirect:'/Reserve_plan/all'}
      ]
    },{
      path:'/Send_message',
      component:Reserve_planVue,

    }
  ]
})
