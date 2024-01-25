import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import App from './App'
import store from './store'
import router from './router'
import '@/icons' // icon
import './api/mock'
import Cookie from 'js-cookie'
import axios from 'axios'
// import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1'
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const token = Cookie.get('token')

  if (!token && to.name !== 'login' && to.name !== 'register') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'HomePage' })
  } else {
    next()
  }
}

)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
