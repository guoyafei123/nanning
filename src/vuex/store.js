import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state={
  region:'',
  inspectionId:'',
  form:{},
  deviceId:'',
  Unit:''
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
  }
}

export default new Vuex.Store({
    state,
    mutations
})

