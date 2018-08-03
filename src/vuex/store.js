import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state={
  region:'',
  inspectionId:'',
  form:{},

  // 展示端的store
  setvuextest:'',
  queryUnitBuildList:Object,
  queryInspectionLineList:Object,
  route_path:'',
  loginusername:''
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
  loginusername(state,data){
    state.loginusername=data;
  }

  

  
}

export default new Vuex.Store({
    state,
    mutations
})

