import 'phaser'
import Joystick from './scenes/Joystick'
import PreloadScene from './scenes/preloadScene'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'virtual-joystick',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, Joystick]
}

window.addEventListener('load', () => {
  new Phaser.Game(config)
})
