// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
import App from './App'
// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(axios)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
