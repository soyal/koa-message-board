const Router = require('koa-router')

module.exports = function routes(app) {
  const router = new Router()

  // capture /api
  router.get(/^\/api/, (ctx, next) => {
    console.log('handle api, path:', ctx.path)
    // next()
  })

  // capture route except /api
  router.get(/^\/(?!api).*/, (ctx, next) => {
    console.log('handle /, path: ', ctx.path)

    const url = ctx.url
    // convert ctx.req.url to / if request html and not end with dot(.)
    if (ctx.accepts(['html']) && url.lastIndexOf('.') < url.lastIndexOf('/')) {
      ctx.url = '/'
    }

    next()
  })

  app.use(router.routes())
}
