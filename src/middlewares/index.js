const webpackMd = require('./webpack')
const compose = require('koa-compose')

const middlewares = app => {
  app.use(compose([webpackMd]))
}

module.exports = middlewares
