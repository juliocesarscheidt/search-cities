import Vue from 'vue';
import App from './App';
import router from './router';
import Multiselect from 'vue-multiselect';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.component('multiselect', Multiselect);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
