import Vue from 'vue'
import Router from 'vue-router'
import Pic from '@/components/pic'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/pic',
        name: 'Hello',
        component: () => import('@/components/HellowORLD')
      },
      {
        path: '/test1',
        name: ' Test',
        component: () => import('@/components/test1')
      },
      {
        path: '/',
        name: ' pic',
        component: Pic
      }
    ]
  })
}
