import { createApp } from './main'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)
import App from './components/pic.vue'
import store from './store/store.all'
import {
    PIC
} from './store/mutation-types'
const app = new Vue({ ...App,
    store
})
export default context => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    // 设置服务器端 router 的位置
    router.push(context.url)
    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        // eslint-disable-next-line
        return reject({ code: 404 })
      }
      // Promise 应该 resolve 应用程序实例，以便它可以渲染
      resolve(app)
    }, reject)

    axios.get('http://localhost:5000/data').then((response) => {
            // 获取数据
            const list = response.data.data
            console.log(list);
            // 把数据存到Vuex里面
            store.commit(LIST.GET_DATA, list)
            // 把state存放到context中
            context.state = store.state
            resolve(app)
        })

  })
}
