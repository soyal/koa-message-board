const Koa = require('koa')
const middlewares = require('./middlewares')
const routes = require('./routes')

const app = new Koa()

// 添加中间件
middlewares(app)
// 路由
routes(app)

app.listen(3000)
