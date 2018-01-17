const express = require('express');
const app = express();
const fs = require('fs-extra')
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



//--------服务端设置数据接口---------------
app.use('/data', (req, res, next) => {
    res.send({
        "code": 1,
        "data": {
            "livePreList": [],
            "liveWodList": [{
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/05/05/183558.90013339.jpg",
                "liveId": 634,
                "liveStatus": 4,
                "startTime": 1494313262000,
                "statistic": 64783,
                "title": "《超凡战队》首映礼发布会",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/05/08/175130.84730904.jpg",
                "liveId": 635,
                "liveStatus": 4,
                "startTime": 1494307635000,
                "statistic": 60474,
                "title": "《毒。诫》首映礼发布会",
                "videoId": 0
            }],
            "livingList": [],
            "myAppointLiveList": []
        },
        "msg": "",
        "showMsg": ""
    })
  })

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
  const renderStream = renderer.renderToStream(context)
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
   res.end(html)
  })
})



app.listen(8090, () => {
    console.log('Listen 8090')
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
