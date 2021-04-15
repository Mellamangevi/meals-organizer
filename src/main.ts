import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebasePlugin from './plugins/firebase';

Vue.config.productionTip = false;

Vue.use(firebasePlugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
