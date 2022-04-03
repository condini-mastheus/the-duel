import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'

import { Client, Room } from 'colyseus.js'

export default class MainScene extends Phaser.Scene {
  fpsText

  private client: Client
  private room?: Room

  constructor() {
    super({ key: 'MainScene' })

    this.client = new Client('ws://localhost:2567')
  }

  async create() {
    new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)

    await this.join()
  }

  async join() {
    this.room = await this.client.joinOrCreate('lobby')

    this.room.onMessage('message', message => {
      console.log(message)
    })
  }

  update() {
    this.fpsText.update()
  }
}
