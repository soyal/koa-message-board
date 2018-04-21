const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackOptions = require('../../webpack.config')
const compiler = webpack(webpackOptions)

const middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackOptions.output.publicPath
})

module.exports = async function(ctx, next) {
  middleware(
    ctx.req,
    {
      send: content => (ctx.body = content),
      setHeader: (...args) => {
        ctx.set(...args)
      }
    },
    next
  )
}
