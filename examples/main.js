import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ELEMENT from 'element-ui'
import euiElement from '../src/index'
import routes from './route'

Vue.use(VueRouter)
Vue.use(euiElement)
Vue.use(ELEMENT)

Vue.config.productionTip = false

// 引入demo-block
import DemoBlock from './components/demoBlock'
Vue.component('demo-block', DemoBlock)

import './assets/scss/index.scss'
import 'highlight.js/styles/color-brewer.css'

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
