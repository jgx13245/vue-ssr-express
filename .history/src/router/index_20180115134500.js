import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: HelloWorld
      }, {
        path: '/count',
        name: ' Count',
        component: () => import('@/components/count')
      },
      {
        path: '/test1',
        name: ' Test',
        component: () => import('@/components/test1')
      }
    ]
  })
}
