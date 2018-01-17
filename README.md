# vue-ssr-demo

> support ssr with node

# install dependencies
npm install

# 打包生成环境与服务器端渲染资源
npm run build

# 启动服务
npm run start-prod
#或者
node server.js


链接到本库的博客文章地址:

[让vue-cli初始化后的项目集成支持SSR](http://blog.myweb.kim/vue/%E8%AE%A9vue-cli%E5%88%9D%E5%A7%8B%E5%8C%96%E5%90%8E%E7%9A%84%E9%A1%B9%E7%9B%AE%E9%9B%86%E6%88%90%E6%94%AF%E6%8C%81SSR/?utm-source=github)

#---------------------------------------ssr 渲染流程------------------------------------------

# src文件下的  
entry-client.js是客户端入口文件    
entry-server.js是服务端入口文件
main.js是整个vue组件的入口文件，vue的根实例在里面

# webpack打包流程
根目录啊的build文件夹下，
webpack.server.config.js里面引入src文件夹下的entry-server.js
webpack.base.config.js里面引入src文件夹下的entry-client.js

#打包生成dist

npm  run build 后生成的dist文件夹里面的两个JSON文件，

# 根目录下

server.js是一个服务端文件的代码，里面引入在webpack打包好的entry-server.js  entry-client.js生成的json文件，通过vue-server-renderer的方法吧渲染好的html拍到客户端。  

# ssr总体流程：
1.SSR 有两个入口文件client-entry，server-entry , webpack打包之后，生成 server-bundle, client-bundle
服务器收到浏览器的请求，创建一个bundleRenderer,读取1生成的server-bundle，执行代码（具体做了什么后面会讲到），生成html发送到前端
2.把第二步生成的html跟前端的client-bundle进行混合（hydrate），混合时判断client-bundle 的DOM节点跟服务端返回的html里DOM节点是否相同，是的话挂载（vue中的$mount）到这个节点上，页面渲染完毕
3.用白话形容，服务端获取页面所需的数据之后，拼出html，把html转成string发送到前端，前端把html插入到指定节点，渲染页面，OK了。