import { createApp } from './main'
const { app, router,store } = createApp()
// 因为可能存在异步组件，所以等待router将所有异步组件加载完毕，服务器端配置也需要此操作


if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  console.log('router ready')
  app.$mount('#app')
})

