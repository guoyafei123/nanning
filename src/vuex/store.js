import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state={
  //巡检
  region:'',
  inspectionId:'',
  form:{},
  //设备
  deviceId:'',
  Unit:'',
  //建筑
  buildUnit:'',
  buildingId:'',
  tableData:[],
  floorAdd:'',
  floorId:'',
  // 展示端的store
  setvuextest:'',
  queryUnitBuildList:Object,
  queryInspectionLineList:Object,
  route_path:''
}

var mutations={
  region(state,data){
    state.region = data;
  },
  inspectionPlanId(state,data){
    state.inspectionId = data;
  },
  form(state,data){
    state.form= data;
  },

  deviceId(state,data){
    state.deviceId = data;
  },
  Unit(state,data){
    state.Unit = data;
  },

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
  }

  

  
}

export default new Vuex.Store({
    state,
    mutations
})

