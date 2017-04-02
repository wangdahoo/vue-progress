import 'normalize.css/normalize.css'

import Vue from 'vue'
import App from './App'
import router from './router'

import VProgress from 'vprogress'
Vue.use(VProgress)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
