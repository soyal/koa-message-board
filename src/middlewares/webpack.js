const webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const webpackOptions = require('../../webpack.config')
const compiler = webpack(webpackOptions)

module.exports = function(app) {
  app.use(
    koaWebpack({
      compiler,
      dev: {
        logLevel: 'silent'
      }
    })
  )
}
