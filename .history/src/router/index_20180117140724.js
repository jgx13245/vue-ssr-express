import Vue from 'vue'
import Router from 'vue-router'
import Pic from "@/components/pic"
import Hello from "@/components/hh"
import Test from "@/components/test1"
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
     
      {
        path: '/pic',
        name: 'pic',
        component:Pic
      },
      {
        path: '/',
        name: 'Hello',
        component:Hello
      },
      {
        path: '/test1',
        name: ' Test',
        component:Test
      },
      { path: '*', 
        component: {template:"<h1>404<h1>"} }
    ]
  })
}
