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
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/05/04/105659.96592879.jpg",
              "liveId": 632,
              "liveStatus": 4,
              "startTime": 1493974792000,
              "statistic": 95528,
              "title": "《时光玩家说》漫威周边大搜罗",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/24/145810.69089438.jpg",
              "liveId": 628,
              "liveStatus": 4,
              "startTime": 1493369978000,
              "statistic": 309495,
              "title": "《时光玩家说》银河护卫队特辑",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/25/094952.69977973.jpg",
              "liveId": 630,
              "liveStatus": 4,
              "startTime": 1493186515000,
              "statistic": 298599,
              "title": "《拆弹专家》首映礼",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/21/182516.74965602.jpg",
              "liveId": 626,
              "liveStatus": 4,
              "startTime": 1493009461000,
              "statistic": 766879,
              "title": "《记忆大师》全球首映礼",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/21/111007.73905844.jpg",
              "liveId": 623,
              "liveStatus": 4,
              "startTime": 1492929029000,
              "statistic": 229640,
              "title": "《喜欢你》“甜蜜蜜”首映礼发布会",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/19/101417.14887129.jpg",
              "liveId": 622,
              "liveStatus": 4,
              "startTime": 1492837672000,
              "statistic": 524955,
              "title": "《记忆大师》丰台万达广场“记忆迷宫”启动式",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/17/174133.40415342.jpg",
              "liveId": 620,
              "liveStatus": 4,
              "startTime": 1492765191000,
              "statistic": 98698,
              "title": "《时光玩家说》蓝精灵与蓝胖子萌物特辑",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/13/120129.35487357.jpg",
              "liveId": 618,
              "liveStatus": 4,
              "startTime": 1492257715000,
              "statistic": 239993,
              "title": "《西游记：女儿国》“秀之夜”发布会",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/11/152835.27620379.jpg",
              "liveId": 617,
              "liveStatus": 4,
              "startTime": 1492181998000,
              "statistic": 197493,
              "title": "星球大战庆典：星战八专场活动",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/13/153319.67664501.jpg",
              "liveId": 619,
              "liveStatus": 4,
              "startTime": 1492146498000,
              "statistic": 87973,
              "title": "《青禾男高》“校门口见”新闻发布会",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/10/170953.85552490.jpg",
              "liveId": 614,
              "liveStatus": 4,
              "startTime": 1491987581000,
              "statistic": 235831,
              "title": "《时光玩家说》“速激”车库探秘 人气车模炫酷登场",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/11/162902.42940538.jpg",
              "liveId": 613,
              "liveStatus": 4,
              "startTime": 1491901200000,
              "statistic": 166910,
              "title": "周冬雨 张孝全《指甲刀人魔》首映礼现场直击",
              "videoId": 0
          }, {
              "appointStatus": 0,
              "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/07/102003.53869632.jpg",
              "liveId": 612,
              "liveStatus": 4,
              "startTime": 1491719232000,
              "statistic": 88904,
              "title": "《反转人生》有求必应发布会",
              "videoId": 0
          }],
          "livingList": [],
          "myAppointLiveList": []
      },
      "msg": "",
      "showMsg": ""
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
