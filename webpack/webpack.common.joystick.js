const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/joystick/scripts/index.ts', './webpack/credits.js'],
  output: {
    path: path.resolve(__dirname, '../dist/joystick'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{ test: /\.tsx?$|\.jsx?$/, include: path.join(__dirname, '../src/joystick'), loader: 'ts-loader' }]
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
    new HtmlWebpackPlugin({ gameName: 'The Duel - Joystick', template: 'src/joystick/index.html' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/joystick/assets', to: 'assets' },
        { from: 'pwa', to: '' },
        { from: 'src/joystick/favicon.ico', to: '' }
      ]
    })
  ]
}
