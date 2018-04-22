const webpack = require('webpack')
const koaWebpack = require('koa-webpack')
const webpackOptions = require('../../webpack.config')
const compiler = webpack(webpackOptions)

module.exports = function(app) {
  const middleware = koaWebpack({
    compiler,
    dev: {
      logLevel: 'error'
    }
  })
  app.use((ctx, next) => {
    console.log('webpack handle', compiler.outputPath)
    middleware(ctx, next)
  })
}
