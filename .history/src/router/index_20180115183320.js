import Vue from 'vue'
import Router from 'vue-router'
import Pic from ''
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
      },
      {
        path: '/test1',
        name: ' Test',
        component: () => import('@/components/test1')
      },
      {
        path: '/pic',
        name: ' pic',
        component: () => import('@/components/pic')
      }
    ]
  })
}
