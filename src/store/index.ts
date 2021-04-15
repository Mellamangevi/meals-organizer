import Vue from 'vue';
import Vuex from 'vuex';
import UserModule from "./modules/user";

Vue.use(Vuex);

export type RootState = {};

export default new Vuex.Store<RootState>({
  state: {},
  modules: {
    user: UserModule,
  }
})
