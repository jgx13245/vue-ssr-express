// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import { createRouter } from './router'
import axios from 'axios'
import store from './store/store.all'
Vue.config.productionTip = false

Vue.use(axios)
Vue.use(Vuex)

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
/* eslint-disable */
export function createApp () {
  // 创建 router 实例
  const router = new createRouter()
  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    store,
    render: h => h(App)
  })
  // 返回 app 和 router
  return { app, router,store }
}
