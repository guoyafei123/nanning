import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state={
  iconByType:'',
  mapShow:true,
  //单位
  unitNum:'',
  unitList:[],
  currentPage:'',
  //巡检
  region:'',
  inspectionId:'',
  inspectionUnitId:'',
  form:{},
  InspectionMap:[],
  //设备
  deviceId:'',
  Unit:'',
  buildDevice:'',
  floorDevice:'',
  roomDevice:'',
  equipmentDevice:'',
  DeviceMap:[],
  DeviceList:'',
  currentPageDevice:'',
  deviceSimple:'',
  //建筑
  buildUnit:'',
  buildingId:'',
  buildingIdRight:'',
  tableData:[],
  floorAdd:'',
  floorId:Object,
  buildPoint:'',
  refresh:'',
  //人员
  unitNumber:'',
  peopleTableData:'',
  //危险品
  dangerId:'',
  dengerStatus:'',
  dangerUnit:'',
  dangerBuild:'',
  dangerFloor:'',
  dangerRoom:'',
  DangerSimple:'',
  dangerUnitList:'',
  dangerBuildList:'',
  //预案
  unitPlan:'',
  //消息
  noticeId:'',
  unitNotice:'',
  noticeTableData:'',
  activityTableData:'',
  //巡检打卡
  inspectionPlanUserId:'',
  // 展示端的store
  setvuextest:'',
  queryUnitBuildList:Object,
  queryInspectionLineList:Object,
  route_path:'',
  torightdata:Object,
  indexToAlarmTroubel:Object,
  toIndexLeftAlarmChar:Object,
  // 展示端风险
  toriskitem:Object,
  // 展示端建筑
  tobuilditem:Object,
   // 展示端楼层
  toFloorInfo:Object,
  // 全局权限
  unitid:null,
  // 用户登录信息
  userinfo:Object,
  // 传递最低评分单位
  buildCountDataSocre:Object,
  // 传递最低评分单位
  buildDetailinfos:Object,
  // 预案统计左上角和右边echar共享
  countUnitPlan:Object,
  // pdf弹窗
  topdf:Object,
  topersonitem:Object,
  // 综合页面传入报警和隐患详情
  aleamAndtroubleInfo:Object,
  //巡检打卡
  InspectionPlanUserId:Object,

  // 地图相关
  // 全部单位
  mapAllUnit:Object,
  toMapPatterns:Object,
  toMapPatternsDanger:Object,
  // 综合页面小地图向详情传值
  dialogVisiblehide:Object,
  // 综合实时列表单个锁定位置
  toMapPoint:Object,
  closePeopleInterver:Object,
  building:Object
}

var mutations={

  iconByType(state,data){
    state.iconByType = data ;
  },
  mapShow(state,data){
    state.mapShow = data ;
  },
  //单位
  unitNum(state,data){
    state.unitNum = data;
  },
  unitList(state,data){
    state.unitList = data;
  },
  currentPage(state,data){
    state.currentPage = data;
  },
  //巡检
  region(state,data){
    state.region = data;
  },
  inspectionId(state,data){
    state.inspectionId = data;
  },
  inspectionUnitId(state,data){
    state.inspectionUnitId = data;
  },
  form(state,data){
    state.form= data;
  },
  InspectionMap(state,data){
    state.InspectionMap = data;
  },
  //设备
  deviceId(state,data){
    state.deviceId = data;
  },
  Unit(state,data){
    state.Unit = data;
  },
  buildDevice(state,data){
    state.buildDevice = data;
  },
  floorDevice(state,data){
    state.floorDevice = data;
  },
  roomDevice(state,data){
    state.roomDevice = data;
  },
  equipmentDevice(state,data){
    state.equipmentDevice = data;
  },
  DeviceMap(state,data){
    state.DeviceMap = data ;
  },
  DeviceList(state,data){
    state.DeviceList = data ;
  },
  currentPageDevice(state,data){
    state.currentPageDevice = data ;
  },
  deviceSimple(state,data){
    state.deviceSimple = data ;
  },
  //建筑
  buildUnit(state,data){
    state.buildUnit = data;
  },
  buildingId(state,data){
    state.buildingId = data;
  },
  buildingIdRight(state,data){
    state.buildingIdRight = data;
  },
  tableData(state,data){
    state.tableData = data ;
  },
  floorAdd(state,data){
    state.floorAdd = data ;
  },
  floorId(state,data){
    state.floorId = data ;
  },
  buildPoint(state,data){
    state.buildPoint = data ;
  },
  refresh(state,data){
    state.refresh = data ;
  },
  //人员
  unitNumber(state,data){
    state.unitNumber = data ;
  },
  peopleTableData(state,data){
    state.peopleTableData = data;
  },
  //危险品
  dangerId(state,data){
    state.dangerId = data ;
  },
  dangerUnit(state,data){
    state.dangerUnit = data;
  },
  dangerBuild(state,data){
    state.dangerBuild = data;
  },
  dangerFloor(state,data){
    state.dangerFloor = data;
  },
  dangerRoom(state,data){
    state.dangerRoom = data;
  },
  dengerStatus(state,data){
    state.dengerStatus = data;
  },
  DangerSimple(state,data){
    state.DangerSimple = data ;
  },
  dangerUnitList(state,data){
    state.dangerUnitList = data ;
  },
  dangerBuildList(state,data){
    state.dangerBuildList = data ;
  },
  //预案
  unitPlan(state,data){
    state.unitPlan = data;
  },

  //消息
  noticeId(state,data){
    state.noticeId = data ;
  },
  unitNotice(state,data){
    state.unitNotice = data ;
  },
  noticeTableData(state,data){
    state.noticeTableData = data ;
  },
  activityTableData(state,data){
    state.activityTableData = data ;
  },
  // 展示端的store
  setvuextest(state,data){
    state.setvuextest = data;
  },
  queryUnitBuildList(state,data){
    state.queryUnitBuildList = data;
  },
  queryInspectionLineList(state,data){
    state.queryInspectionLineList = data;
  },
  route_path(state,data){
    state.route_path=data;
  },
  torightdata(state,data){
    state.torightdata=data;
  },
  indexToAlarmTroubel(state,data){
    state.indexToAlarmTroubel=data;
  },
  toIndexLeftAlarmChar(state,data){
    state.toIndexLeftAlarmChar=data;
  },
  // 展示端风险
  toriskitem(state,data){
    state.toriskitem=data;
  },
  // 展示端建筑
  tobuilditem(state,data){
    state.tobuilditem=data;
  },
  // 展示端楼层
  toFloorInfo(state,data){
    state.toFloorInfo=data;
  },
  // 展示人员
  topersonitem(state,data){
    state.topersonitem=data;
  },
  // 全局权限
  unitid(state,data){
    // alert(data);
    state.unitid=data;
  },
  userinfo(state,data){
    state.userinfo=data;
  },
  buildCountDataSocre(state,data){
    state.buildCountDataSocre=data;
  },
  buildDetailinfos(state,data){
    state.buildDetailinfos=data;
  },
  countUnitPlan(state,data){
    state.countUnitPlan=data;
  },
  topdf(state,data){
    state.topdf=data;
  },
  aleamAndtroubleInfo(state,data){
    state.aleamAndtroubleInfo=data;
  },
  mapAllUnit(state,data){
    state.mapAllUnit=data;
  },
  toMapPatterns(state,data){
    state.toMapPatterns=data;
  },
  toMapPatternsDanger(state,data){
    state.toMapPatternsDanger=data;
  },
  inspectionPlanUserId(state,data){
    state.inspectionPlanUserId = data;
  },
  dialogVisiblehide(state,data){
    state.dialogVisiblehide = data;
  },
  toMapPoint(state,data){
    state.toMapPoint = data;
  },
  closePeopleInterver(state,data){
    state.closePeopleInterver = data;
  },
  building(state,data){
    state.building = data;
  },
}

export default new Vuex.Store({
    state,
    mutations
})

