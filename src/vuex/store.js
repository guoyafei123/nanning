import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state={
  inspectionId:''
}

var mutations={
  inspectionPlanId(state,data){
    state.inspectionId = data;
  }
}

export default new Vuex.Store({
    state,
    mutations
})

