import Vue from 'vue';
import App from './App';
import router from './router';
import Multiselect from 'vue-multiselect';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

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

Sentry.init({
  dsn: 'https://a1b9ab836d9a4270a5a770855fb6c4fb@sentry.io/1462253',
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true
    })
  ]
});
