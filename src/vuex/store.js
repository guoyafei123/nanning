import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state={
  setvuextest:'',
}

var mutations={
  setvuextest(state,data){
    state.setvuextest = data;
  }
}

export default new Vuex.Store({
    state,
    mutations
})

