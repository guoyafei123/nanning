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
  //设备
  deviceId:'',
  Unit:'',
  buildDevice:'',
  floorDevice:'',
  roomDevice:'',
  equipmentDevice:'',
  //建筑
  buildUnit:'',
  buildingId:'',
  tableData:[],
  floorAdd:'',
  floorId:'',
  //人员
  unitNumber:'',
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
}

var mutations={
  //单位
  unitNum(state,data){
    state.unitNum = data;
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
}

export default new Vuex.Store({
    state,
    mutations
})

