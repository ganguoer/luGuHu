// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
//引入mint-ui
import MintUI from 'mint-ui'
import './assets/css/style.css'
import './assets/js/fontsize.js'
import $ from 'jquery'
import Axios from 'axios'
Vue.use(MintUI)
Vue.prototype.$ajax = Axios;
Vue.config.productionTip = false;


//引入公共样式
import '../static/fonts/style.css'
import './assets/css/common.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
