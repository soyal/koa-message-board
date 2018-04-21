const Koa = require('koa')
const middlewares = require('./middlewares')

const app = new Koa()

middlewares(app)

app.listen(3000)
