import Vue from 'vue'
import Router from 'vue-router'
import Pic from "@/components/Pic"
import Hello from "@/components/HelloWorld"
import Test from "@/components/test1"
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
        component:Hello
      },
      {
        path: '/test1',
        name: ' Test',
        component:Test
      }
    ]
  })
}
