import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'

import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(iView)
Vue.use(echarts)

new Vue({
  router,
  store,
  echarts,
  render: h => h(App)
}).$mount('#app')
