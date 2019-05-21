import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import header from "./modules/header"
import navBar from "./modules/navBar"
import mutations from "./mutations"
import actions from "./actions"
import state from "./state"

export default new Vuex.Store({

state,
mutations,
  actions,
  modules:{
  	header,
  	navBar
  }
  
});
