import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick'

export default class Joystick extends Phaser.Scene {
  text: Phaser.GameObjects.Text
  joystick: VirtualJoystick & {
    on?: (event: string, callback: Function, scene: Phaser.Scene) => void
  }

  constructor() {
    super({ key: 'Joystick' })
  }

  preload() {}

  create() {
    this.joystick = new VirtualJoystick(this, {
      x: 400,
      y: 400,
      radius: 100,
      base: this.add.circle(0, 0, 100, 0x888888),
      thumb: this.add.circle(0, 0, 50, 0xcccccc),
      enable: true
    })

    this.joystick.on?.('update', this.dumpJoyStickState, this)

    console.log(this.joystick)

    this.text = this.add.text(0, 0, '', { color: 'black', fontSize: '28px' })
    this.dumpJoyStickState()
  }

  dumpJoyStickState() {
    let cursorKeys = this.joystick.createCursorKeys()
    let s = 'Key down: '
    for (let name in cursorKeys) {
      if (cursorKeys[name].isDown) {
        s += name + ' '
      }
    }
    s += '\n'
    s += 'Force: ' + Math.floor(this.joystick.force * 100) / 100 + '\n'
    s += 'Angle: ' + Math.floor(this.joystick.angle * 100) / 100 + '\n'
    this.text.setText(s)
  }

  update() {}
}
