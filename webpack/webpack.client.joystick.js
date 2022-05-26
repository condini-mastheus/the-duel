const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/client/joystick/scripts/index.ts', './webpack/credits.js'],
  output: {
    path: path.resolve(__dirname, '../dist/joystick'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$|\.jsx?$/, include: path.join(__dirname, '../src/client/joystick'), loader: 'ts-loader' }]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          filename: '[name].bundle.js'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ gameName: 'The Duel - Joystick', template: 'src/client/joystick/index.html' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'pwa', to: '' },
        { from: 'src/client/joystick/favicon.ico', to: '' }
      ]
    })
  ]
}
