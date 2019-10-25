import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import '@/assets/css/base.scss'
import '@/assets/css/public.css'
// import '@/assets/css/styles.scss'
import '@/assets/iconfont/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
