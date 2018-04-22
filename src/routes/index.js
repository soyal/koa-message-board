const Router = require('koa-router')

module.exports = function routes(app) {
  const router = new Router()

  router.get(/^\/api/, (ctx, next) => {
    console.log('handle api, matchName:', ctx.path)
  })

  router.get(/^\//, (ctx, next) => {
    console.log('handle /, matchedRouteName: ', ctx.path)
  })

  app.use(router.routes())
}
