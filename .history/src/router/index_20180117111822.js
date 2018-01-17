import Vue from 'vue'
import Router from 'vue-router'
import Pic from "@/components/Pic"
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'pic',
        component:Pic
      },
      {
        path: '/hello',
        name: 'Hello',
        component: () => import('@/components/HelloWorld')
      },
      {
        path: '/test1',
        name: ' Test',
        component: () => import('@/components/test1')
      }
    ]
  })
}
