const { merge } = require('webpack-merge')
const clientJoystick = require('./webpack.client.joystick')
const clientGame = require('./webpack.client.game')

const dev = {
  mode: 'development',
  stats: 'errors-warnings',
  devtool: 'eval',
  devServer: {
    open: true
  },
  watch: true,
}

const joystick = merge(clientJoystick, dev)
const game = merge(clientGame, dev)

module.exports = [game, joystick] 
