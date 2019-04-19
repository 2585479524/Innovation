// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'
import Vuex from 'vuex'
import echarts from 'echarts'


Vue.use(ElementUI)
Vue.use(iView)
Vue.use(Vuex)
Vue.use(echarts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  echarts,
  components: { App },
  template: '<App/>'
})
