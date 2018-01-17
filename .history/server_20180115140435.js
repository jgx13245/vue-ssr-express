const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = file => path.resolve(__dirname, file)

// 生成服务端渲染函数
const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  // 推荐
  runInNewContext: false,
  // 模板html文件
  template: fs.readFileSync(resolve('./index.html'), 'utf-8'),
  // client manifest-客户端清单
  clientManifest: require('./dist/vue-ssr-client-manifest.json')
})


function renderToString (context) {
    return new Promise((resolve, reject) => {
      renderer.renderToString(context, (err, html) => err ? reject(err) : resolve(html))
    })  
  }

app.use(express.static('./dist'))
// 在服务器处理函数中……
app.use('*', (req, res) => {
  const context = { 
    title:"jgx",
    url: req.url
   }
   req.body  = renderToString(context)
  //  res.header('Content-Type', 'count/html')
  //  res.header('Server', 'express server side render')
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
   res.end(html)
  })
})

app.listen(5000, () => {
    console.log('Listen 5000')
})
















//---------------------koa-------------------------
// const Koa = require('koa')
// const app = new Koa()
// const fs = require('fs')
// const path = require('path')
// const { createBundleRenderer } = require('vue-server-renderer')

// const resolve = file => path.resolve(__dirname, file)

// // 生成服务端渲染函数
// const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
//   // 推荐
//   runInNewContext: false,
//   // 模板html文件
//   template: fs.readFileSync(resolve('./index.html'), 'utf-8'),
//   // client manifest
//   clientManifest: require('./dist/vue-ssr-client-manifest.json')
// })

// function renderToString (context) {
//   return new Promise((resolve, reject) => {
//     renderer.renderToString(context, (err, html) => err ? reject(err) : resolve(html))
//   })
// }
// app.use(require('koa-static')(resolve('./dist')))
// // response
// app.use(async (ctx, next) => {
//   try {
//     const context = {
//       title: '服务端渲染测试', // default title
//       url: ctx.url
//     }
//     // 将服务器端渲染好的html返回给客户端
//     ctx.body = await renderToString(context)

//     // 设置请求头
//     ctx.set('Content-Type', 'text/html')
//     ctx.set('Server', 'Koa2 server side render')
//   } catch (e) {
//     // 如果没找到，放过请求，继续运行后面的中间件
//     next()
//   }
// })

// app.listen(3001)
//   .on('listening', () => console.log('服务已启动'))
//   .on('error', err => console.log(err))
