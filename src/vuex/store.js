
import Vue from 'vue';
import Vuex from 'vuex';
// import { Store } from 'vuex';
// import personnel from './modules/personnel';
Vue.use(Vuex);


var state={
    setvuextest:''
}

var mutations={
    tovuex(state,data){
        state.setvuextest=data;
    }
}

export default new Vuex.Store({
    state,
    mutations
})

