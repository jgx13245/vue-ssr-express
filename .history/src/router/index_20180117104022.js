import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'pic',
        component: () => import('@/components/Pic')
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
