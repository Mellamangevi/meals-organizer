import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export type RootState = {};

export default new Vuex.Store<RootState>({
  state: {},
  modules: {
  }
})
