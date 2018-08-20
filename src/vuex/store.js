import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state={
  //单位
  unitNum:'',
  //巡检
  region:'',
  inspectionId:'',
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
  //建筑
  buildUnit:'',
  buildingId:'',
  tableData:[],
  floorAdd:'',
  floorId:'',
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
  //预案
  unitPlan:'',
  // 展示端的store
  setvuextest:'',
  queryUnitBuildList:Object,
  queryInspectionLineList:Object,
  route_path:'',
  torightdata:Object,
  indexToAlarmTroubel:Object,
  toIndexLeftAlarmChar:Object,
  // 展示端风险
  toriskitem:false,
  // 展示端建筑
  tobuilditem:Object,
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
  topersonitem:Object
}

var mutations={
  //单位
  unitNum(state,data){
    state.unitNum = data;
  },
  unitList(state,data){
    state.unitList = data;
  },
  //巡检
  region(state,data){
    state.region = data;
  },
  inspectionPlanId(state,data){
    state.inspectionId = data;
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
  //建筑
  buildUnit(state,data){
    state.buildUnit = data;
  },
  buildingId(state,data){
    state.buildingId = data;
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
  //预案
  unitPlan(state,data){
    state.unitPlan = data;
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
  // 展示人员
  topersonitem(state,data){
    state.topersonitem=data;
  },
  // 全局权限
  unitid(state,data){
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
}

export default new Vuex.Store({
    state,
    mutations
})

