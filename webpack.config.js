const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [path.resolve(__dirname, './src/view/index.jsx')],

  mode: process.env.NODE_ENV,

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          compact: false
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: {
          enforce: true,
          priority: 1
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 2,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/public/index.html')
    })
  ]
}
