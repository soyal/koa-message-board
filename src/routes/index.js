const Router = require('koa-router')

module.exports = function routes(app) {
  const router = new Router()

  router.get(/^\/api/, (ctx, next) => {
    console.log('handle api, matchName:', ctx.path)
  })

  router.get(/^\//, (ctx, next) => {
    console.log('handle /, matchedRouteName: ', ctx.path)
    console.log(ctx.req.url)
    // todo convert ctx.req.url to / if request html and not end with dot(.)
    next()
  })

  app.use(router.routes())
}
