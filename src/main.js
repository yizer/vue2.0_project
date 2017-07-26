// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
Vue.use(Router)
Vue.use(VueResource)
Vue.config.productionTip = false
const router = new Router({
    mode:'history',
    routes: [
      {
        path: '/',
        name: 'IndexPage',
        component: IndexPage
      }
    ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
