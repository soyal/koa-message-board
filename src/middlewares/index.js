const webpackM = require('./webpack')

const middlewares = app => {
  webpackM(app)
}

module.exports = middlewares
